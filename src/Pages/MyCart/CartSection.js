import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartDetails from './CartDetails';

const CartSection = () => {


    const cartstate = useSelector(state => state.CartReducers)

    const cartItems = cartstate.cartItems;


    const totalProductsPrice = cartItems.reduce((x, y) => {
        return x + y.price;
    }, 0);
    console.log(totalProductsPrice);
    return (


        <div>
            <h1 className='text-4xl font-bold text-green-600 my-6'>My Cart</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
                <div className='col-span-2'>
                    <div className="overflow-x-auto ">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(cartItem => <CartDetails
                                        key={cartItem._id}
                                        cartItem={cartItem}
                                    ></CartDetails>)
                                }
                            </tbody>


                        </table>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <h1 className='text-3xl font-extrabold text-red-700'>Total Amount</h1>
                        <h1 className='text-2xl font-bold'>BDT {totalProductsPrice}</h1>
                        <button className="btn btn-outline btn-secondary">Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSection;