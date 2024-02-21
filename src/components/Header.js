import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="background-image">
          <h6>Click for Index</h6>
        </div>
      </Link>
    </nav>
  )
}

export default Header
