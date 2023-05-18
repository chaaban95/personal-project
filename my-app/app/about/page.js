import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <main>
      <h1>About page</h1>
      <Link href={"/about/omar"}>Author Omar</Link>
    </main>
  );
}
