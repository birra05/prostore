import { ProductList } from "@/components/shared";
import sampleData from "@/db/sample-data";

export default function HomePage() {
  console.log(typeof sampleData.products);

  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrival"
        limit={4}
      ></ProductList>
    </>
  );
}
