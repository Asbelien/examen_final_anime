import { Link } from 'react-router';

const AnimeCard = ({ anime }) => {
  const image = anime.images?.jpg?.image_url;
  const genres = anime.genres?.map(g => g.name).join(", ");

  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={image}
        className="card-img-top"
        alt={anime.title}
        loading="lazy"
      />
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{anime.title}</h5>

        <p className="text-muted small">{genres}</p>

        <p className="card-text small flex-grow-1">
          {anime.synopsis
            ? anime.synopsis.substring(0, 120) + "..."
            : "Sin sinopsis disponible."}
        </p>

        <Link to={`/anime/${anime.mal_id}`} className="btn btn-outline-primary w-100 mt-auto">
          <i className="bi bi-eye me-2"></i>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default AnimeCard;
