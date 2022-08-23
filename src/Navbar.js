import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container d-flex justify-content-between">
        <div>
          <div>
            <Link to="/">
              <i className="bi bi-house"></i>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-link">
                <Link to="/">Accueil</Link>
              </li>
              <li className="nav-link">
                <Link to="/exercises">Exercices</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
