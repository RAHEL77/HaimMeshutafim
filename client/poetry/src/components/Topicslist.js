import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Topicslist = () => {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://3.122.232.246:5000/api/category/");
      console.log(data);

      // const { data } = [
      //   "قصائد اعتذار",
      //   "قصائد الاناشيد",
      //   "قصائد المعلقات",
      //   "قصائد حزينه",
      //   "قصائد دينية",
      //   "قصائد ذم",
      //   "قصائد رثاء",
      //   "قصائد رومنسيه",
      //   "قصائد سياسية",
      //   "قصائد شوق",
      //   "قصائد عامه",
      //   "قصائد عتاب",
      //   "قصائد غزل",
      //   "قصائد فراق",
      //   "قصائد قصيره",
      //   "قصائد مدح",
      //   "قصائد هجاء",
      //   "قصائد وطنيه"
      // ]
      

      setTerm(
        data.map((topic) => {
          return (<>
          
            <Link
              to={{ pathname: `Songlist/${topic.songName}`, query: topic }}
              className="links"
              key={topic._id}
            >
              {topic.poemName}
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
