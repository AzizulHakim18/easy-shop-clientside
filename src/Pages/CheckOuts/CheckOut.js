import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { AuthContext } from '../../Context/UserContext';

const CheckOut = ({ totalProductsPrice }) => {


    const { user } = useContext(AuthContext);
    const loginEmail = user?.email;

    const cartstate = useSelector(state => state.CartReducers)
    const cartItems = cartstate?.cartItems;
    console.log(cartItems);


    const tokenHandler = async (token) => {
        // console.log(token.card.address_city);
        console.log(token);

        const order = await {
            orderId: token.card.id,
            orderEmail: loginEmail || "unregistered",
            ordererName: token.card.name,
            country: token.card.address_country,
            city: token.card.address_city,
            street: token.card.address_line1,
            cartItems: cartItems

        }
        console.log(order);

        fetch('https://easy-shop-serverside.vercel.app/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    window.localStorage.clear();
                    window.location.reload(false);
                    toast.success('Successfully ordered')

                }
            })
            .catch(er => console.error(er))



    }





    return (
        <div>
            <StripeCheckout
                email={loginEmail}
                amount={totalProductsPrice * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey='pk_test_51MgoJaFdccroNVypuuZGPgtQVhNwjoDrUvCYcBqHTr1YTcGi6xQ6YweFSERzV0v0y1IcRlQghNSZmEZiTaHHUbsW001OA1n9hy'
                currency='BDT'
            >





                <button className="btn btn-outline btn-secondary">Pay Now</button>
            </StripeCheckout>
        </div>
    );
};

export default CheckOut;