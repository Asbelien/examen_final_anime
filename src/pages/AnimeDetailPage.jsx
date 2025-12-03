import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AnimeDetailPage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then(res => res.json())
      .then(data => setAnime(data.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!anime) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status"></div>
        <p className="mt-3">Cargando información...</p>
      </div>
    );
  }

  return (
    <>
      <header className="py-4">
        <div className="container">
          <nav className="mb-3">
            <Link to="/animes" className="btn btn-outline-secondary">
              <i className="bi bi-arrow-left me-2"></i>
              Volver a animes
            </Link>
          </nav>

          <div className="text-center">
            <h1 className="display-5 fw-bold">
              <i className="bi bi-camera-reels me-2"></i>
              Detalle del Anime
            </h1>
            <p className="lead text-muted">ID: {id}</p>
          </div>
        </div>
      </header>

      <section className="py-4">
        <div className="container">

          <div className="row g-4">
            <div className="col-md-4">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="img-fluid rounded shadow-sm"
              />
            </div>

            <div className="col-md-8">
              <h2 className="fw-bold">{anime.title}</h2>

              <p className="text-muted">
                <strong>Géneros:</strong>{" "}
                {anime.genres.map(g => g.name).join(", ")}
              </p>

              <p className="mt-3">{anime.synopsis || "Sin sinopsis disponible."}</p>

              <ul className="list-group mt-4">
                <li className="list-group-item">
                  <strong>Tipo:</strong> {anime.type}
                </li>
                <li className="list-group-item">
                  <strong>Episodios:</strong> {anime.episodes || "??"}
                </li>
                <li className="list-group-item">
                  <strong>Estado:</strong> {anime.status}
                </li>
                <li className="list-group-item">
                  <strong>Año:</strong> {anime.year || "Desconocido"}
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimeDetailPage;
