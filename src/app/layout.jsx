import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
  title: "Ben Juan",
  description: "Personal website",
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
