import api from "../../services/api";

// GET all movies
export const fetchMovies = async () => {
  const response = await api.get("/movie");
  return response.data;
};

// GET movie by ID
export const fetchMovieById = async (id) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

// POST create movie
export const addMovie = async (newMovie) => {
  const response = await api.post("/movie", newMovie);
  return response.data;
};

// PUT update movie
export const updateMovie = async ({ id, updatedMovie }) => {
  const response = await api.put(`/movie/${id}`, updatedMovie);
  return response.data;
};

// DELETE movie
export const deleteMovie = async (id) => {
  const response = await api.delete(`/movie/${id}`);
  return response.data;
};
