import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover mb-4"
        />
        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
