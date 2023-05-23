export default async function Movie({ params }) {
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  const imageURL = "https://image.tmdb.org/t/p/original";
  //   console.log(params);
  return (
    <>
      <h1>{res.title}</h1>
      <h2>Length: {res.runtime} minutes</h2>
      <img src={imageURL + res.backdrop_path} alt={res.title}></img>
      <p>{res.overview}</p>
    </>
  );
}
