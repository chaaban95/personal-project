import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Home",
  description: "Welcome home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
