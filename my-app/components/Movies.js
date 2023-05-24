import Link from "next/link";

export default function Movies({ id, title, release, poster, overview }) {
  const imageURL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <h2>{title}</h2>
      <h3>{release}</h3>
      <Link href={`/${id}`}>
        <img src={imageURL + poster} alt={title}></img>
      </Link>
      {/* <p>{overview}</p> */}
    </>
  );
}
