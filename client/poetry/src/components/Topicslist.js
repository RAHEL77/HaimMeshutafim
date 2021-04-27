import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Topicslist = () => {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://3.122.232.246:5000/api/poems");
      console.log(data);

      setTerm(
        data.map((topic) => {
          return (<>
          
            <Link
              to={{ pathname: `Songlist/${topic.songName}`, query: topic }}
              className="links"
              key={topic._id}
            >
              {topic._id}
              <br />
            </Link>
            </>
          );
        })
      );
    };

    search();
  }, []);

  return  <><h3>קטגוריות</h3><div>{term}</div></>;
};

export default Topicslist;
