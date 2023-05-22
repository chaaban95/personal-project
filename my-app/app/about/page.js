import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  //throw new Error("failed to load");
  return (
    <main>
      <h1>About page</h1>
      <Link href={"/about/omar"}>Author Omar</Link>
    </main>
  );
}
