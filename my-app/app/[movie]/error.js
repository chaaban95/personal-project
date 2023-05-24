"use client";

export default function Error({ error, reset }) {
  return (
    <section>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </section>
  );
}
