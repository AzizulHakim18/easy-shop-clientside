import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../Actions/ProductActions';
import Product from './Product';
import LoadingSpiner from '../../../Sheared/LoadingSpiner'
import './Products.css'


const Products = () => {



    const dispatch = useDispatch()
    const productsstate = useSelector(state => state.getAllProductsReducers)
    const { error, loading } = productsstate
    // products,
    // useEffect(() => {
    //     dispatch(getAllProducts())
    // }, [])

    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);





    useEffect(() => {
        const url = `https://easy-shop-serverside.vercel.app/getallproducts?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setProducts(data.products)
            })
    }, [page, size])



    // useEffect(() => {
    //     fetch('https://easy-shop-serverside.vercel.app/getallproductscount')
    //         .then(res => res.json())
    //         .then(data => setCount(data.count))
    // }, [])

    console.log(count);
    console.log(products);

    const pages = Math.ceil(count / size);
    return (
        <div >
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                    {loading ? (<LoadingSpiner></LoadingSpiner>) : error ? (<h1>Something went wrong</h1>) : (
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)

                    )}
                </div>
            </div>
            <div className='pagination text-center'>
                <p className='text-xl font-semibold '>Currently selected page: {page} & size: {size}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={'btn' && page === number && 'btn-active text-white'}
                        onClick={() => { setPage(number) }}
                    >
                        {number}
                    </button>)
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value={5} selected>5 </option>
                    <option value={10} >10</option>
                    <option value={15}>15 </option>
                    <option value={20}>20</option>

                </select>
            </div>
        </div>
    );
};

export default Products;