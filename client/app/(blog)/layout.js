import Footer from "../components/site/footer";
import Header from "../components/site/header";
import "./globals.css";
import { Poppins } from "@next/font/google";
import Provider from "./provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${poppins.className} flex flex-col h-screen justify-between`}
      >
        <Header />
        <main className=" mb-auto !max-w-7xl mx-auto">
          <Provider>{children}</Provider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
