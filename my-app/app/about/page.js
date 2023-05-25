import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  // throw new Error("failed to load");
  return (
    <>
      <h4 className="breadCrumb">About</h4>
      <main>
        <h1>About authors</h1>
        <Link href={"/about/omar"}>Author: Omar</Link>
      </main>
    </>
  );
}
