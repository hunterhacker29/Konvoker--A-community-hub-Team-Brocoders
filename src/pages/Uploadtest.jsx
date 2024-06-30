// import React, { useState } from 'react';
// import { db, storage } from '../server/Firebase'; // Adjust this import based on your Firebase setup
// import { doc, setDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import Navbar from '../components/Navbar';

// export default function CreateBlog() {
//   const [blogTitle, setBlogTitle] = useState('');
//   const [blogText, setBlogText] = useState('');
//   const [images, setImages] = useState([]);
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = (event) => {
//     if (event.target.files.length > 0) {
//       const filesArray = Array.from(event.target.files);
//       setImages(filesArray);
//     }
//   };

//   const handleUpload = async (event) => {
//     event.preventDefault();
//     setUploading(true);

//     try {
//       const imageUrls = [];
//       for (const image of images) {
//         // Upload each image to Firebase Storage
//         const fileRef = ref(storage, `blogs/${image.name}`);
//         await uploadBytes(fileRef, image);
//         const url = await getDownloadURL(fileRef);
//         imageUrls.push(url);
//       }

//       // Save blog data to Firestore
//       await setDoc(doc(db, 'blogs', blogTitle), {
//         title: blogTitle,
//         text: blogText,
//         images: imageUrls,
//         createdAt: new Date(),
//       });

//       console.log('Blog created successfully!');
//       // Optionally navigate to a success page or update UI
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       // Handle error (e.g., show error message to the user)
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-5">
//         <div className="card custom-card">
//           <div className="card-body">
//             <h2 className="card-title">Upload Blog</h2>
//             <form onSubmit={handleUpload}>
//               <div className="mb-3">
//                 <label htmlFor="blogTitle" className="form-label">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="blogTitle"
//                   value={blogTitle}
//                   onChange={(e) => setBlogTitle(e.target.value)}
//                   placeholder="Enter the title of your blog"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="inputGroupFile01" className="form-label">
//                   Upload Images
//                 </label>
//                 <input
//                   type="file"
//                   className="form-control"
//                   id="inputGroupFile01"
//                   onChange={handleFileChange}
//                   multiple
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="blogText" className="form-label">
//                   Text
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="blogText"
//                   rows="6"
//                   value={blogText}
//                   onChange={(e) => setBlogText(e.target.value)}
//                   placeholder="Write your blog text here"
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary" disabled={uploading}>
//                 {uploading ? 'Uploading...' : 'Upload Blog'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path based on your folder structure
import { useParams } from 'react-router-dom';
import { db, storage } from '../server/Firebase'; // Adjust this import based on your Firebase setup
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


export default function CreateBlog() {
  const { communityId } = useParams(); // Fetching communityId from URL params
  const [blogTitle, setBlogTitle] = useState('');
  const [blogText, setBlogText] = useState('');
  const [blogImages, setBlogImages] = useState([]);
  const [validated, setValidated] = useState(false);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);
    setBlogImages(fileArray);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity()) {
      try {
        // Upload images to Firebase Storage
        const uploadedImageUrls = await Promise.all(
          blogImages.map(async (image) => {
            const imageRef = ref(storage, `community/${communityId}/blog/${image.name}`);
            await uploadBytes(imageRef, image);
            return getDownloadURL(imageRef);
          })
        );

        // Add blog data to Firestore
        const docRef = await addDoc(collection(db, `communities/${communityId}/Blogs`), {
          title: blogTitle,
          text: blogText,
          images: uploadedImageUrls,
          createdAt: serverTimestamp(),
        });

        console.log('Blog created with ID: ', docRef.id);
        // Optionally, navigate to another page after successful creation
        // Example: history.push(`/community/${communityId}`);

      } catch (error) {
        console.error('Error adding document: ', error);
        // Handle error (e.g., show error message to the user)
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="create-blog-container">
        <h2>Create Blog</h2>
        <form onSubmit={handleSubmit} noValidate validated={validated ? "true" : "false"}>
          <div className="form-group">
            <label htmlFor="blogTitle">Title</label>
            <input
              type="text"
              className="form-control"
              id="blogTitle"
              placeholder="Enter the title of your blog"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              required
            />
            <div className="invalid-feedback">Title is required.</div>
          </div>
          <div className="form-group">
            <label htmlFor="inputGroupFile01">Upload Images</label>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  onChange={handleFileChange}
                  multiple
                  required
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  Choose images for your blog
                </label>
                <div className="invalid-feedback">Please upload at least one image.</div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="blogText">Text</label>
            <textarea
              className="form-control"
              id="blogText"
              rows="6"
              placeholder="Write your blog text here"
              value={blogText}
              onChange={(e) => setBlogText(e.target.value)}
              required
            />
            <div className="invalid-feedback">Blog text is required.</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Blog
          </button>
        </form>
      </div>
    </>
  );
}
