import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Songlist = () => {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://3.122.232.246:5000/api/poems");
      console.log(data);

      setTerm(
        data.map((song) => {
          return (
            <Link
              to={{ pathname: `Poempage/${song.poemName}`, query: song }}
              className="links"
              key={song._id}
            >
              {song.poemName}
              <br />
            </Link>
          );
        })
      );
    };

    search();
  }, []);

  return (
    <>
      <h3>השירים</h3>
      <div>{term}</div>
    </>
  );
};

export default Songlist;
