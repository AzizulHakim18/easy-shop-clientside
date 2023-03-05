import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../Actions/ProductActions';
import Product from './Product';
import LoadingSpiner from '../../../Sheared/LoadingSpiner'

const Products = () => {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/getallproducts")
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    const dispatch = useDispatch()

    const productsstate = useSelector(state => state.getAllProductsReducers)
    const { products, error, loading } = productsstate
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    console.log(products);
    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {loading ? (<LoadingSpiner></LoadingSpiner>) : error ? (<h1>Something went wrong</h1>) : (
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)

                )}


                {/* {
                   products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>) 
                } */}
            </div>
        </div>
    );
};

export default Products;