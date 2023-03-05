import React from 'react';

const Product = ({ product }) => {

    const { category, img, name, price, ratings } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">
                        Category:{category}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='font-semibold '>Product Name: {name}</p>
                    <div className="card-actions justify-end items-center">
                        <div className="badge badge-outline font-semibold">Price: BDT{price}</div>
                        <div className="badge badge-outline">Ratings:{ratings}</div>
                        <button className="btn btn-outline btn-secondary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;