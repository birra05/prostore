'use client';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProductImages {
  images: string[];
}

const ProductImages = ({ images }: ProductImages) => {
  const [current, setCurrent] = useState<number>(0);

  const handleClick = (idx: number) => () => {
    setCurrent(idx);
  };

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <ul className="flex">
        {images.map((image, index) => {
          return (
            <li
              key={image}
              onClick={handleClick(index)}
              className={cn(
                'border mr-2 cursor-pointer hover:border-orange-600',
                current === index && 'border-orange-500'
              )}
            >
              <Image src={image} alt={image} width={100} height={100} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductImages;
