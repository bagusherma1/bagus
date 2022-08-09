$.ajax({
  url: "http://www.omdbapi.com/?apikey=6cae0390&s=avengers",
  succes: (results) => {
    const movies = results.Search;
    console.log(movies);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
