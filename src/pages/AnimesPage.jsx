import { useEffect } from 'react';
import AnimeCard from '../components/modules/character/AnimeCard';
import { useAnimeStore } from '../stores/useCharactersStore';

const AnimesPage = () => {
  const { animes, isLoading, error, fetchAnimes } = useAnimeStore();

  useEffect(() => {
    fetchAnimes();
  }, [fetchAnimes]);

  return (
    <>
      <header className="py-4 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">
            <i className="bi bi-collection-play me-2"></i>
            Animes Populares
          </h1>
          <p className="lead text-muted">
            Explora un mundo lleno de historias increíbles 🍥✨
          </p>
        </div>
      </header>

      <section className="py-4">
        <div className="container">

          {isLoading && (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="alert alert-danger d-flex align-items-center gap-3">
              <i className="bi bi-exclamation-triangle fs-3"></i>
              <div>
                <h5 className="mb-1">Error</h5>
                <p className="mb-0">{error}</p>
              </div>
            </div>
          )}

          {!isLoading && !error && animes.length > 0 && (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {animes.map((anime) => (
                <div key={anime.mal_id} className="col">
                  <AnimeCard anime={anime} />
                </div>
              ))}
            </div>
          )}

          {!isLoading && !error && animes.length === 0 && (
            <div className="alert alert-warning d-flex align-items-center gap-3">
              <i className="bi bi-search fs-3"></i>
              <div>
                <h5 className="mb-1">Sin resultados</h5>
                <p className="mb-0">No se encontraron animes</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AnimesPage;
