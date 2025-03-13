interface ProductPrice {
  value: number;
  className?: string;
}

const ProductPrice = ({ value }: ProductPrice) => {
  const [intValue, floatValue] = value.toFixed(2).split(".");

  return (
    <p>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
