import "../../globals.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export const metadata = {
  title: {
    default:"FutecAI",
    template:"%s | FutecAI",
  },

  description: "",
};

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen  flex flex-col relative">
      <header className="sticky top-0 w-full bg-primary z-20 shadow-[0_6px_24px_0_rgba(30,64,175,0.25)]">
        <NavBar/>
      </header>
      {children}
      <footer className="w-full mt-auto">
        <Footer/>
      </footer>
    </div>
  );
}
