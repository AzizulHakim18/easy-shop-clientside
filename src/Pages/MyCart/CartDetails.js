import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../Actions/CartActions';

const CartDetails = ({ cartItem }) => {


    const { img, name, price, prices, productQuantity } = cartItem;

    const dispatch = useDispatch()
    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt=" product" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm font-bold">Quantity: {productQuantity}</div>
                    </div>
                </div>
            </td>
            <td className='font-bold'>
                Single Price:{prices}
            </td>
            <td className='font-bold'>Total Product Price: {price}</td>
            <td><button className='btn btn-outline btn-error' onClick={() => dispatch(deleteFromCart(cartItem))}>X</button></td>
        </tr>
    );
};

export default CartDetails;