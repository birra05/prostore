import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "../product-price";
import { Product } from "@/db/sample-data";

interface ProductCard {
  product: Product;
}

const ProductCard = ({ product }: ProductCard) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}></Link>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={300}
          height={300}
          priority={true}
        />
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs"></div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium"></h2>
        </Link>
        <div className="flex-between gap-4">
          <p className="">{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
