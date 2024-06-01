import React, { useEffect, useState } from 'react'

const Update = () => {
    
        const [id,setId] = useState(0);
        const [name,setName] = useState("");
        const [email,setEmail] = useState("");


        useEffect(()=>{
           setId(localStorage.getItem("id"))
           setName(localStorage.getItem("name"))
           setEmail(localStorage.getItem("email"))
        },[])
        

    
  return (
    <>
        <h2>UPDATE</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
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

        <button type="submit" className="btn btn-primary" //onClick={Update}
        >
          Update
        </button>
      </form>
    </>
  )
}

export default Update
