import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const history = useNavigate()
   const header = {"Access-Control-Allow-Origin": "*"}

   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("cliked")
      await axios.post(
        "https://664aeb6aa300e8795d436b68.mockapi.io/crud-instagram",{
        name: name, 
        email:email,
        header,
        
      })
      .then(()=>{
        history("/read");
      })
      
   }
  return (
    <>
      <h2>CREATE</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
