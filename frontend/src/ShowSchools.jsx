import axios from "axios";
import { useEffect, useState } from "react";
import "./ShowSchools.css";

function ShowSchools() {
  let [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/schools")
      .then((res) => setSchools(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 show-container">
      {schools.map((school) => (
        <div className="card col" key={school.id} >
          <img
            // src= {`http://localhost:8080/images/${school.image}`}
            src={school.Image}
            className="card-img-top"
            alt={school.name}
            style={{height: "20rem"}}
          />
          <div className="card-img-overlay"></div>
          <div className="card-body">
            <h5 className="card-title">{school.name}</h5>
            <div className="card-bottom">
            <p className="card-text">{school.address}</p>
            <p className="card-text">{school.city}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowSchools;
