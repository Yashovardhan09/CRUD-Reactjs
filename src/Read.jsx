import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function handleDelete(id) {
    axios
      .delete(
        `https://664aeb6aa300e8795d436b68.mockapi.io/crud-instagram/${id}`
      )
      .then(() => {
        getData();
      });
  }
 const setToLocalStorage = (id,name,email) => {
  localStorage.setItem("id" , id)
  localStorage.setItem("name" , name)
  localStorage.setItem("email" , email)
 }

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("https://664aeb6aa300e8795d436b68.mockapi.io/crud-instagram")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  getData();
  return (
    <>
      <h2>Read Operations</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>

                <td>
                  <Link to="/update">
                    <button className="btn btn-success" onClick={()=>setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Read;
