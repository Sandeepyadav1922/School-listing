import axios from "axios";
import { useFormik } from 'formik';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddSchool.css";

const validate = values => {
   const errors = {};
   if (!values.name) {
     errors.name = 'Name is Required';
   }
   if (!values.address) {
     errors.address = 'Address is Required';
   }
   if (!values.city) {
     errors.city = 'City is Required';
   }
   if (!values.state) {
     errors.state = 'State is Required';
   }
   if (!values.contact) {
     errors.contact = 'Contact is Required';
   }
   if (!values.image) {
     errors.image = 'Image is Required';
   }

   if (!values.email_id) {
     errors.email_id = 'Email is Required';
   }
//    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//      errors.email_id = 'Invalid email address';
//    }
 
   return errors;
 };

function AddSchool() {
    let navigate = useNavigate();
let [error, setError] = useState("");

let handleSubmit = async() => {
    try {
        await axios.post("http://localhost:8080/schools", formik.values)
        navigate("/");
        } catch(err) {
            setError(err.response.data.message);
        }
    }

    const formik = useFormik({
     initialValues: {
       name: "",
       address: "",
       city: "",
       state: "",
       contact: "",
       image: "",
       email_id: "",
     },
     validate,
     onSubmit: () => {
        handleSubmit();
     },
   });

  return (
    <div className="newpage-container">
      <div className="row newpage-inputs mt-5">
        <form  onSubmit={formik.handleSubmit}>
        <div className="col-lg-6 col-10 offset-lg-3 offset-1 mb-3">
        <label htmlFor="name">School Name</label>
          <input
          id="name"
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div style={{color: "red"}}>{formik.errors.name}</div> : null}
        </div>
        <br />
        <div className="col-lg-6 col-10 offset-lg-3 offset-1 mb-3">
        <label htmlFor="address">School Address</label>
          <input
          id="address"
            type="text"
            className="form-control"
            placeholder="Enter Your Address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.errors.address ? <div style={{color: "red"}}>{formik.errors.address}</div> : null}
        </div>
        <br />
        <div className="row">
        <div className="col-lg-3 col-5 offset-lg-3 offset-1 mb-3">
        <label htmlFor="city">City</label>
          <input
          id="city"
            type="text"
            className="form-control"
            placeholder="Mention Your City"
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          {formik.errors.city ? <div style={{color: "red"}}>{formik.errors.city}</div> : null}
        </div>
        <br />
        <div className="col-lg-3 col-5 mb-3">
        <label htmlFor="state">State</label>
          <input
          id="state"
            type="text"
            className="form-control"
            placeholder="Enter Your State"
            name="state"
            onChange={formik.handleChange}
            value={formik.values.state}
          />
          {formik.errors.state ? <div style={{color: "red"}}>{formik.errors.state}</div> : null}
        </div>
        </div>
        <br />
        <div className="col-lg-6 col-10 offset-lg-3 offset-1 mb-3">
        <label htmlFor="contact">Contact</label>
          <input
          id="contact"
            type="text"
            className="form-control"
            placeholder="Enter Contact No."
            name="contact"
            onChange={formik.handleChange}
            value={formik.values.contact}
          />
          {formik.errors.contact ? <div style={{color: "red"}}>{formik.errors.contact}</div> : null}
        </div>
        <br />
        <div className="col-lg-6 col-10 offset-lg-3 offset-1 mb-3">
        <label htmlFor="image">Upload School Image</label>
          <input
            id="image"
            type="text"
            placeholder="Enter Image URL"
            className="form-control"
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          {formik.errors.image ? <div style={{color: "red"}}>{formik.errors.image}</div> : null}
        </div>
        <br />
        <div className="col-lg-6 col-10 offset-lg-3 offset-1 mb-3">
        <label htmlFor="email">Email Adrress</label>
          <input
            id="email"
            type="text"
            className="form-control"
            placeholder="Enter Your Email"
            name="email_id"
            onChange={formik.handleChange}
            value={formik.values.email_id}
          />
          {formik.errors.email_id ? <div style={{color: "red"}}>{formik.errors.email_id}</div> : null}
        </div>
        {error && <p className="offset-lg-3 offset-1" style={{color: "red"}}>{error}</p>}
        <br />
        <div className="offset-lg-3 offset-1 add-btns">
        <Link to="/">
        <button className="btn btn-outline-warning"><i class="fa-solid fa-arrow-left"></i> Add Back</button>
        </Link>
        <button className="btn btn-outline-info">+ Add School</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default AddSchool;


// import axios from "axios";
// import { useFormik } from "formik";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./AddSchool.css";

// const validate = values => {
//    const errors = {};
//    if (!values.name) errors.name = "Name is required";
//    if (!values.address) errors.address = "Address is required";
//    if (!values.city) errors.city = "City is required";
//    if (!values.state) errors.state = "State is required";
//    if (!values.contact) errors.contact = "Contact is required";
//    if (!values.email_id) errors.email_id = "Email required";
//    if (!values.image) errors.image = "Image required";
//    return errors;
// };

// function AddSchool() {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       address: "",
//       city: "",
//       state: "",
//       contact: "",
//       email_id: "",
//       image: null,
//     },
//     validate,
//     onSubmit: async (values) => {
//       const formData = new FormData();

//       Object.keys(values).forEach((key) => {
//         formData.append(key, values[key]);
//       });

//       try {
//         await axios.post("http://localhost:8080/schools", formData, {
//           headers: { "Content-Type": "multipart/form-data" }
//         });
//         navigate("/");
//       } catch (err) {
//         setError(err.response?.data?.message || "Server Error");
//       }
//     }
//   });

//   return (
//     <div className="newpage-container">
//       <div className="row newpage-inputs mt-5">
//         <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
//           <div className="col-lg-6 col-10 offset-lg-3 offset-1 mb-3">
//             <label>School Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               onChange={formik.handleChange}
//               value={formik.values.name}
//             />
//             {formik.touched.name && formik.errors.name && (
//               <p className="text-danger">{formik.errors.name}</p>
//             )}
//           </div>

//           <div className="col-lg-6 col-10 offset-lg-3 offset-1 mb-3">
//             <label>School Address</label>
//             <input
//               type="text"
//               className="form-control"
//               name="address"
//               onChange={formik.handleChange}
//               value={formik.values.address}
//             />
//             {formik.touched.address && formik.errors.address && (
//               <p className="text-danger">{formik.errors.address}</p>
//             )}
//           </div>

//           <div className="row">
//             <div className="col-lg-3 col-5 offset-lg-3 offset-1 mb-3">
//               <label>City</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="city"
//                 onChange={formik.handleChange}
//                 value={formik.values.city}
//               />
//               {formik.touched.city && formik.errors.city && (
//                 <p className="text-danger">{formik.errors.city}</p>
//               )}
//             </div>

//             <div className="col-lg-3 col-5 mb-3">
//               <label>State</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="state"
//                 onChange={formik.handleChange}
//                 value={formik.values.state}
//               />
//               {formik.touched.state && formik.errors.state && (
//                 <p className="text-danger">{formik.errors.state}</p>
//               )}
//             </div>
//           </div>

//           <div className="col-lg-6 col-10 offset-lg-3 offset-1 mb-3">
//             <label>Contact</label>
//             <input
//               type="text"
//               className="form-control"
//               name="contact"
//               onChange={formik.handleChange}
//               value={formik.values.contact}
//             />
//             {formik.touched.contact && formik.errors.contact && (
//               <p className="text-danger">{formik.errors.contact}</p>
//             )}
//           </div>

//           <div className="col-lg-6 col-10 offset-lg-3 offset-1 mb-3">
//             <label>Upload School Image</label>
//             <input
//               type="file"
//               className="form-control"
//               name="image"
//               onChange={(e) =>
//                 formik.setFieldValue("image", e.target.files[0])
//               }
//             />
//             {formik.touched.image && formik.errors.image && (
//               <p className="text-danger">{formik.errors.image}</p>
//             )}
//           </div>

//           <div className="col-lg-6 col-10 offset-lg-3 offset-1 mb-3">
//             <label>Email Address</label>
//             <input
//               type="text"
//               className="form-control"
//               name="email_id"
//               onChange={formik.handleChange}
//               value={formik.values.email_id}
//             />
//             {formik.touched.email_id && formik.errors.email_id && (
//               <p className="text-danger">{formik.errors.email_id}</p>
//             )}
//           </div>

//           {error && <p className="text-danger offset-lg-3 offset-1">{error}</p>}

//           <div className="offset-lg-3 offset-1 add-btns">
//             <Link to="/">
//               <button type="button" className="btn btn-outline-warning">
//                 ← Back
//               </button>
//             </Link>
//             <button type="submit" className="btn btn-outline-info ms-3">
//               + Add School
//             </button>
//           </div>
//         </form>

//       </div>
//     </div>
//   );
// }

// export default AddSchool;
