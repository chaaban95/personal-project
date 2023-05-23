import Link from "next/link";

export default function Movies({ id, title, release, poster, overview }) {
  const imageURL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <h1>{title}</h1>
      <h2>{release}</h2>
      <Link href={`/${id}`}>
        <img src={imageURL + poster} alt={title}></img>
      </Link>
      {/* <p>{overview}</p> */}
    </>
  );
}
