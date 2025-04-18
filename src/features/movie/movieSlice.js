import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchMovies as fetchMoviesAPI,
  fetchMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} from "./movieApi";

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  return await fetchMoviesAPI();
});

export const getMovieById = createAsyncThunk(
  "movie/getMovieById",
  async (id) => {
    return await fetchMovieById(id);
  }
);

export const createMovie = createAsyncThunk(
  "movie/createMovie",
  async (newMovie) => {
    return await addMovie(newMovie);
  }
);

export const editMovie = createAsyncThunk(
  "movie/editMovie",
  async ({ id, updatedMovie }) => {
    return await updateMovie({ id, updatedMovie });
  }
);

export const removeMovie = createAsyncThunk("movie/removeMovie", async (id) => {
  return await deleteMovie(id);
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
    selectedMovie: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })

      .addCase(getMovieById.fulfilled, (state, action) => {
        state.selectedMovie = action.payload;
      })

      .addCase(createMovie.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })

      .addCase(editMovie.fulfilled, (state, action) => {
        const index = state.data.findIndex((m) => m.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })

      .addCase(removeMovie.fulfilled, (state, action) => {
        state.data = state.data.filter((m) => m.id !== action.meta.arg);
      });
  },
});

export default movieSlice.reducer;
