import { ProductList } from "@/components/shared";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  console.log(latestProducts);

  return (
    <>
      <ProductList
        data={latestProducts}
        title="Newest Arrival"
        limit={4}
      ></ProductList>
    </>
  );
};

export default HomePage;
