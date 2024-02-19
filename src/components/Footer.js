
import { Link } from "react-router-dom"

function Footer(props) {
  return (
    <div className="footer-container">
        <div className="footer">
            <h5>
                <a href="https://github.com/pisces7diana">| Diana |</a>
                <a href="https://github.com/geno223"> Geno |</a>
                <a href="https://github.com/rabhioli"> Rabhi |</a>
                <a href="https://github.com/jeffmcd21"> Jeff 
                    <i class="fa-solid fa-biohazard fa-fade"></i>|</a>
                    <h6>Click for GitHub Repo</h6>
            </h5>
      <Link to="/">
            <button>Return to Index</button>
      </Link>
        </div>
    </div>
  )
}

export default Footer
