


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


const Songlist = () => {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const search = async () => {
      // const  { data } = await axios.get(
      //   "https://6069b5a1e1c2a10017544d37.mockapi.io/products"
      // );

      const data = [{title:"שיר 1"},{title:"שיר 2"},{title:"שיר 3"}]
      // const data =  [
      //   'قصائد اعتذار',   'قصائد الاناشيد',
      //   'قصائد المعلقات', 'قصائد حزينه',
      //   'قصائد دينية',    'قصائد ذم',
      //   'قصائد رثاء',     'قصائد رومنسيه',
      //   'قصائد سياسية',   'قصائد شوق',
      //   'قصائد عامه',     'قصائد عتاب',
      //   'قصائد غزل',      'قصائد فراق',
      //   'قصائد قصيره',    'قصائد مدح',
      //   'قصائد هجاء',     'قصائد وطنيه'
      // ]
 
      setTerm(data.map(topic => {
        
        return (    
    
      <Link to={{pathname: `/Songpage`, query: topic}}
      className="links" key={topic.title}>
        
        {topic.title}<br/>
        </Link>

          )
      }
      ));
    };

    search();
  }, []);


  return (
    <div >
{term}
    </div>
  );
};

export default Songlist;

// function Songlist() {
//   return (
//     <div id="Songlist">
// this is Songlist
//     </div>
//   );
// }

// export default Songlist;
