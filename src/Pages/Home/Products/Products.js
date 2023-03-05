import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("productData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;