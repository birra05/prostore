import { Product } from "@/db/sample-data";
import { ProductCard } from "..";

interface ProductList {
  data: Product[];
  title?: string;
  limit: number;
}

const ProductList = ({ data, title, limit }: ProductList) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      <h2 className="font-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((item) => {
            return (
              <li key={item.slug}>
                <ProductCard product={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
