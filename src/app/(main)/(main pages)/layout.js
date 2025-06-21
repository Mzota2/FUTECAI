import "../../globals.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Mail, Phone, Shield, Briefcase, HelpCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="w-full z-30 sticky top-0 bg-white">
        <nav className="max-w-[1200px] mx-auto px-4 py-2 hidden md:block">
          <div className="font-medium flex gap-4 items-center">
            <Link href='/' className="flex text-primary items-center gap-2">
              <Phone /> +265 981 83 95 78
            </Link>
            <Link href='/' className="flex text-primary items-center gap-2">
              <Mail /> support@futecai.com
            </Link>
            <Link href='/terms-of-service' className="flex items-center gap-2 hover:text-primary">
              <span><FileText /></span> Terms of Service
            </Link>
            <Link href='/privacy-policy' className="flex items-center gap-2 hover:text-primary">
              <span><Shield /></span> Privacy Policy
            </Link>
            <Link href='/career' className="flex items-center gap-2 hover:text-primary">
              <span><Briefcase /></span> Career
            </Link>
            <Link href='/faq' className="flex items-center gap-2 hover:text-primary">
              <span><HelpCircle /></span> FAQ
            </Link>
          </div>
        </nav>
        <header className="w-full bg-primary z-20 shadow-[0_6px_24px_0_rgba(30,64,175,0.25)]">
          <NavBar />
        </header>
      </header>

      {children}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
