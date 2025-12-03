import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <article className="py-5">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4 fw-bold">
            Bienvenido a Anime Explorer 🍥✨
          </h1>
          <p className="lead text-muted">
            Explora animes, personajes y descripciones usando la API de Jikan
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-5">
                <div className="text-primary">
                  <i className="bi bi-collection-play-fill" style={{ fontSize: '4rem' }}></i>
                </div>
                <h5 className="card-title fw-bold">Ver Animes</h5>
                <p className="card-text text-muted">
                  Explora animes populares con imagen, sinopsis y géneros
                </p>
                <Link to="/animes" className="btn btn-primary btn-lg">
                  <i className="bi bi-arrow-right-circle me-2"></i>
                  Explorar
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-5">
                <div className="text-success">
                  <i className="bi bi-chat-dots-fill" style={{ fontSize: '4rem' }}></i>
                </div>
                <h5 className="card-title fw-bold">Chat con IA</h5>
                <p className="card-text text-muted">
                  Pregunta sobre cualquier anime o personaje y obtén respuestas
                </p>
                <Link to="/chat" className="btn btn-success btn-lg">
                  <i className="bi bi-chat-left-text me-2"></i>
                  Iniciar Chat
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};

export default HomePage;
