import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <ProductCatalog />
    </main>
  );
}
