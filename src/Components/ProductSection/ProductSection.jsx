import React from 'react';
import { storeData } from '../../assets/data/dummyData';
import ProductSectionItem from './ProductSectionItem';
import { Fade } from 'react-reveal';

const ProductSection = () => {
  return (
    <div>

      <div className="pt-16 grid grid-cols-2 lg:grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
        {storeData.slice(0, 12).map((product, index) => (
          <Fade key={index} delay={index * 10} duration={300}>
            <ProductSectionItem
              id={product.id}
              type={"T-Shirts"}
              name={product.name}
              img={product.img}
              text={product.text}
              price={product.price}
              totalPrice={product.totalPrice}
              color={product.color}
              size={product.size}
            ></ProductSectionItem>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
