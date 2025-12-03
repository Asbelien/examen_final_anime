import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-fire me-2"></i>
          Anime Explorer
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/"
                end
              >
                <i className="bi bi-house-door me-1"></i>
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/animes"
              >
                <i className="bi bi-grid-3x3-gap me-1"></i>
                Animes
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/chat"
              >
                <i className="bi bi-chat-dots me-1"></i>
                Chat IA
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
