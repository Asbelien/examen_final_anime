const BASE_URL = 'https://api.jikan.moe/v4/anime';

export const jikanApi = {
  getAllAnime: async (page = 1) => {
    const response = await fetch(`${BASE_URL}?page=${page}`);
    if (!response.ok) throw new Error('Error al cargar los animes');
    return response.json();
  },

  getAnimeById: async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Error al cargar el anime');
    return response.json();
  },

  searchAnime: async (query) => {
    const response = await fetch(`${BASE_URL}?q=${query}`);
    if (!response.ok) throw new Error('No se encontraron animes');
    return response.json();
  },
};
