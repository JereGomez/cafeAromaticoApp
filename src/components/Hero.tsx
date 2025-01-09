import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-coffee-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Coffee Haven</h1>
        <p className="text-xl mb-8">
          Discover our delicious selection of coffee and snacks
        </p>
        <Button size="lg">Shop Now</Button>
      </div>
    </div>
  );
}
