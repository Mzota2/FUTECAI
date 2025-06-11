import "./globals.css";
import "aos/dist/aos.css";
export const metadata = {
  title: "FutecAI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
