import React, { useState } from 'react';
import { db, storage } from '../server/Firebase'; // Adjust this import based on your Firebase setup
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Form, Button, Col, InputGroup, Row } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import '../styles/register.css';
import Navbar from '../components/Navbar';

function Register() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [email, setEmail] = useState('');
  const [aboutUs, setAboutUs] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [interests, setInterests] = useState('');
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!fname) newErrors.firstName = 'First name is required';
    if (!lname) newErrors.lastName = 'Last name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!city) newErrors.city = 'City is required';
    if (!state) newErrors.state = 'State is required';
    if (!zip) newErrors.zip = 'Zip is required';
    if (!profilePic) newErrors.profilePic = 'Profile picture is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (event) => {
    setProfilePic(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (validateForm()) {
      try {
        // Upload file to Firebase Storage
        const fileRef = ref(storage, `files/${profilePic.name}`);
        await uploadBytes(fileRef, profilePic);
        const fileURL = await getDownloadURL(fileRef);

        // Save data to Firestore
        await setDoc(doc(db, 'profiles', email), {
          fname,
          lname,
          email,
          city,
          state,
          zip,
          profilePic: fileURL,
          aboutUs,
          socialMedia,
          interests,
        });

        console.log('Document successfully written!');
        // Navigate to viewprofile or any other route after successful registration
        // Example: <Navigate to="/viewprofile" />;

      } catch (error) {
        console.error('Error writing document: ', error);
        // Handle error (e.g., show error message to the user)
      }
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'sticky', top: 0, height: '100%', overflowY: 'auto', borderRight: '1px solid white', padding: 10, backgroundColor: '#221e1e', zIndex: 1 }}>
          
          <div style={{margin:"0px",padding:"0px", fontSize:'18px', margin: 0, display: 'flex', alignItems: 'center',borderBottom:'1px solid rgb(150,150,150)', justifyContent: 'center', height: 50,  color: 'white' }}>
            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>CREAT +</Link>
          </div>
          <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
            My Communities
          </div>
          <div style={{fontSize:'13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50,  color: 'white' }}>
            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
          </div>
          <div style={{fontSize:'13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, borderBottom:'1px solid rgb(150,150,150)', color: 'white' }}>
            <Link to="/community/comm2" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM2</Link>
          </div>

          <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
            Joined Communities
          </div>
          <div style={{fontSize:'13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50,  color: 'white' }}>
            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
          </div>
          <div style={{fontSize:'13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, borderBottom:'1px solid rgb(150,150,150)', color: 'white' }}>
            <Link to="/community/comm2" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM2</Link>
          </div>
          <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
           All Communities
          </div>
          <div style={{fontSize:'13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50,  color: 'white' }}>
            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
          </div>
          {/* Add more communities as needed */}
        </div>

        <div className="register-container">
          <h2>Register</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom06">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                  isInvalid={!!errors.profilePic}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.profilePic}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom07">
                <Form.Label>About Us</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Tell us about yourself"
                  rows={3}
                  value={aboutUs}
                  onChange={(e) => setAboutUs(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom08">
                <Form.Label>Social Media</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Social Media Links"
                  value={socialMedia}
                  onChange={(e) => setSocialMedia(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom09">
                <Form.Label>Interests</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Interests"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
