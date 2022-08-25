const fetchMovies = (sort, page) => {
  const result = fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=faea67d2ef16cdf2958d803964a0a767&language=en&sort_by=${sort}&include_adult=false&include_video=false&page=${page}`,
    {
      dataType: "json",
      headers: { "Content-Type": "application/json" },
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => data.results);
  return result;
};

export default fetchMovies;
