import { Link } from 'react-router-dom'

function NotFound() {
    return (
      <div>
השיר שחיפשת לא נמצא... 
<Link to="/">חזרה לקטגוריות</Link>
      </div>
    );
  }

  export default NotFound;

  