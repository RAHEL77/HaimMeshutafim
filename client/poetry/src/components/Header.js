
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div className="Header">
      <Link to="/">חזרה לראשי</Link> 
  <div className="logo">شعر</div>
  <div className="title">תרגום שירה ערבית</div>
  
  <input type="text" placeholder="חיפוש השיר..."/>
      </div>
      
    );
  }
  
  export default Header;
  