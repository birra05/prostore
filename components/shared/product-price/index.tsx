import { cn } from '@/lib/utils';
interface ProductPrice {
  value: number;
  className?: string;
}

const ProductPrice = ({ value, className }: ProductPrice) => {
  const [intValue, floatValue] = value.toFixed(2).split('.');

  return (
    <p className={cn('text-2xl', className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
