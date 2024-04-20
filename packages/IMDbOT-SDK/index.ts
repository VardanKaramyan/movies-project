const BASE_URL = process.env.BASE_URL || 'https://search.imdbot.workers.dev';

async function fetchData(endpoint: string): Promise<any> {
  try {
      const response = await fetch(`${BASE_URL}/${endpoint}`);
      if (!response.ok) {
          throw new Error(`Failed to fetch data from endpoint: ${endpoint}`);
      }
      return await response.json();
  } catch (error) {
      console.error(`Error fetching data from endpoint ${endpoint}:`, error);
      throw error;
  }
}

// Search movies by query
export async function getMovieData(query: string): Promise<any> {
  return fetchData(`?q=${encodeURIComponent(query)}`);
}

// Get more details by IMDb ID
export async function getMovieDetails(imdbId: string): Promise<any> {
  return fetchData(`?tt=${imdbId}`);
}


