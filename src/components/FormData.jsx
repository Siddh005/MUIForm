import { useState } from "react";
import React from "react";
import "../styles/FormData.css";
import hide from "../styles/images/hide-password.svg";
import show from "../styles/images/show-password.svg";

export const FormData = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const [reveal, setReveal] = useState(false);

  const handleChange = (e) => {console.log(e.target.name,":", e.target.value)
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `First name: ${data.firstname}, Last name: ${data.lastname}, email: ${data.email}, password: ${data.password}`
    );

    setData({ ...data, firstname: "", lastname: "", email: "", password: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First Name : </label>
        <input
          name="firstname"
          type="text"
          value={data.firstname}
          onChange={handleChange}
          required
        />

        <label>Last Name : </label>
        <input
          name="lastname"
          type="text"
          value={data.lastname}
          onChange={handleChange}
          required
        />

        <label>email : </label>
        <input
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          required
        />

        <div className="container">
          <input
            name="password"
            placeholder="password"
            type={reveal ? "text" : "password"}
            value={data.password}
            onChange={handleChange}
            required
          />
          <img
            src={reveal ? hide : show}
            alt="passwordhide"
            onClick={() => setReveal((prevState) => !prevState)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
