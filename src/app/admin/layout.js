import Menu from "@/components/Admin/Menu";

export const metadata = {
  title: {
    default:"FutecAI Admin",
    template:"%s | FutecAI Admin",
  },

  description: "",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex relative min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
        <Menu/>
        {/* Main content */}
        <main className="transition-all duration-200">
            {children}
        </main>
    </div>
  );
}
