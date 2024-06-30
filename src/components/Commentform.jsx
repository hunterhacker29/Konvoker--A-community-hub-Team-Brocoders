// import React from 'react';
// import '../styles/commentform.css'; // Assuming the CSS file is named CommentForm.css

// function CommentForm({ onCancel }) {
//   return (
//     <div className="comment-form card">
//       <div className="card-body">
//         <h3 className="card-title mb-3">Add a Comment</h3>
//         <form>
//           <div className="form-group">
//             <label htmlFor="new-comment">Your Comment:</label>
//             <textarea
//               id="new-comment"
//               className="form-control"
//               rows="3"
//               required
//             ></textarea>
//           </div>
//           <div className="text-right">
//             <button type="submit" className="btn btn-primary mr-2">Submit</button>
//             <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CommentForm;

import React from 'react';
import '../styles/commentform.css';

function CommentForm({ onCancel }) {
  return (
    <div className="comment-form-component card-comment-form">
      <div className="card-body-comment-form">
        <h3 className="card-title-comment-form mb-3-comment-form">Add a Comment</h3>
        <form>
          <div className="form-group-comment-form">
            <label htmlFor="new-comment-comment-form">Your Comment:</label>
            <textarea
              id="new-comment-comment-form"
              className="form-control-comment-form"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="text-right-comment-form">
            <button type="submit" className="btn btn-primary btn-submit-comment-form mr-2">Submit</button>
            <button type="button" className="btn btn-secondary btn-cancel-comment-form" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
