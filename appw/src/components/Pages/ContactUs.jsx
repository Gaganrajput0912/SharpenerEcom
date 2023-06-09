import React, { useState } from 'react'
import axios from 'axios'
const ContactUs = () => {

   const [userData, setUserData] = useState({ name: '', email: '', phoneNumber: '' })
  
  const handleChange = (e) => {
    const { placeholder, value } = e.target
    setUserData({ ...userData, [placeholder]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await axios.post("https://auth-5aa35-default-rtdb.firebaseio.com//contacts.json",userData);
  document.querySelector('form').reset()
  }

  return (
    <>
      <h1 className="display-1 border-bottom border-3 border-dark">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="form m-auto my-5 w-25 p-3 shadow-lg rounded-3"
      >
        <div className=" form-floating mb-3">
          <input
            type="text"
            placeholder="name"
            className="form-control"
            onChange={handleChange}
            required
          />
          <label>Name</label>
        </div>

        <div className=" form-floating mb-3">
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            placeholder="email"
            required
          />
          <label>Email address</label>
        </div>

        <div className=" form-floating mb-3">
          <input
            type="number"
            className="form-control"
            onChange={handleChange}
            placeholder="phoneNumber"
            required
          />
          <label>Phone Number</label>
        </div>

        <input type="submit" className=" btn btn-secondary" />
      </form>
    </>
  );
}

export default ContactUs