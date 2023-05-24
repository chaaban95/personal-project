"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link
              href={"/"}
              className={pathname == "/" ? "active" : "txtStyle"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={pathname == "/about" ? "active" : "txtStyle"}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
