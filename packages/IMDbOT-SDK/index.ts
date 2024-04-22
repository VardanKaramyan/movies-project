import fetchData from './fetch-data';

// Search movies by query
export async function searchMovie(query: string): Promise<any> {
  return fetchData(`search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`);
}

// Search movies by query
export async function getMovieData(): Promise<any> {
  return fetchData(`discover/movie?include_adult=false&sort_by=popularity.desc&page=1&with_people`);
}

// Get more details by ID
export async function getMovieDetails(id: number): Promise<any> {
  return fetchData(`movie/${id}`);
}
