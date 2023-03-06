import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const CheckOut = ({ totalProductsPrice }) => {

    const tokenHandler = (token) => {
        console.log(token);
    }


    return (
        <div>
            <StripeCheckout

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