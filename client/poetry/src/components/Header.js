
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div className="Header">
       
  <div className="logo">شعر</div>
  <div className="title">תרגום שירה ערבית</div>
  <Link to="/">חזרה לראשי</Link>
      </div>
      
    );
  }
  
  export default Header;
  