// import { Component } from "react";
import { useState } from 'react';
import { signUp } from '../../utilities/user-service';
const SignUpForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  })

  const [error, setError] = useState("")

  const handleChange = evt => {
    const { name, value } = evt.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const userData = { ...formData };
      delete userData.confirm;

      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(userData);
      // setUser(user)
      console.log(user)
    } catch (error) {
      // An error has occurred
      setError("Sign Up Failed - Try Again");
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm</label>
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <button type="submit" >
            SIGN UP
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}

export default SignUpForm
