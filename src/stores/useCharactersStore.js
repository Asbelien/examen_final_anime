import { create } from "zustand";
import { jikanApi } from "../services/jikanApi";

export const useAnimeStore = create((set) => ({
  animes: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,

  fetchAnimes: async (page = 1) => {
    set({ isLoading: true, error: null });

    try {
      const data = await jikanApi.getAllAnime(page);

      set({
        animes: data.data, 
        currentPage: data.pagination.current_page,
        totalPages: data.pagination.last_visible_page,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        isLoading: false,
      });
    }
  },
}));
