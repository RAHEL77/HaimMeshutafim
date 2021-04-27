


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


const Topicslist = () => {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const search = async () => {
      // const  { data } = await axios.get(
      //   "https://6069b5a1e1c2a10017544d37.mockapi.io/products"
      // );

      // const data = [{title:"שירי אהבה"},{title:"שירי געגוע"},{title:"שירים קצרים"}]
      const data =  [
        'قصائد اعتذار',   'قصائد الاناشيد',
        'قصائد المعلقات', 'قصائد حزينه',
        'قصائد دينية',    'قصائد ذم',
        'قصائد رثاء',     'قصائد رومنسيه',
        'قصائد سياسية',   'قصائد شوق',
        'قصائد عامه',     'قصائد عتاب',
        'قصائد غزل',      'قصائد فراق',
        'قصائد قصيره',    'قصائد مدح',
        'قصائد هجاء',     'قصائد وطنيه'
      ]
 
      setTerm(data.map(topic => {
        
        return (    
    
      <Link to={{pathname: `Songlist/`, query: topic}}
      className="links" key={topic.title}>
        
        {topic}<br/>
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

export default Topicslist;

// function Songlist() {
//   return (
//     <div id="Songlist">
// this is Songlist
//     </div>
//   );
// }

// export default Songlist;
