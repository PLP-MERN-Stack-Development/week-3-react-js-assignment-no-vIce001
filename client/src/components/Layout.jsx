import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card } from "./ui/card";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="p-6">{children}</Card>
      </main>
      <Footer />
    </div>
  );
}