import "../(blog)/globals.css";
import Provider from "../(blog)/provider";

export default function Dashboard({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
