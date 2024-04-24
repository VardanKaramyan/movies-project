const BASE_URL = 'https://api.themoviedb.org/3'; // New API endpoint

async function fetchData(endpoint: string): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmMxNzExN2M5MmE5ZmM5OGE3MDJkNzE2ZWY5YTlkMyIsInN1YiI6IjY2MjUwMzUwNjJmMzM1MDE0YmQ3YWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsjvjdRN_ARHUQGYttVqgOdN7DTf206dtg1osQW2dAM'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data from endpoint: ${endpoint}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from endpoint ${endpoint}:`, error);
    throw error;
  }
}

export default fetchData;
