import React, { useState, useEffect } from "react";
import axios from "axios";

const Poempage = () => {

  const [poem, setPoem] = useState("");
  const [poemName, setPoemName] = useState("");
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`http://3.122.232.246:5000/api/poems/naama`);
     console.log(data[0]);
      setPoemName(data[0].poemName)
      setPoem(data[0].poem)
      setAuthorName(data[0].authorName)
    };

    search();
  }, []);

  return (
    <>
      <h3>  {poemName}  /  {authorName} </h3>
      <div className="song_text">
 
     
      <div>{poem}</div>
    </div></>
  );
};

export default Poempage;
