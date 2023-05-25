import Movies from "../components/Movies";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  // console.log(res);
  // throw new Error("failed to load");
  return (
    <>
      <h4 className="breadCrumb">Movies</h4>
      <div className="home">
        {res.results.map((movie) => (
          <div className="moviesWrapper">
            <Movies
              key={movie.id}
              id={movie.id}
              title={movie.title}
              release={movie.release_date}
              poster={movie.poster_path}
              // overview={movie.overview}
            />
          </div>
        ))}
      </div>
    </>
  );
}
