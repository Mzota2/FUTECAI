import "./globals.css";
import "aos/dist/aos.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: {
    default:"FutecAI",
    template:"%s | FutecAI",
  },
  description: "FutecAI is a startup company that is dedicated to providing innovative solutions to businesses in the future of AI.",
};



export default function RootLayout({ children }) {

  setInterval(() => {
  const mem = process.memoryUsage();
  console.log(`[MEMORY] Heap: ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB, RSS: ${(mem.rss / 1024 / 1024).toFixed(2)} MB`);
}, 10000); // every 10 seconds

  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
