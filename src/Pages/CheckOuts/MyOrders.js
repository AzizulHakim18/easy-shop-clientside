import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import Order from './Order';



const MyOrders = () => {

    const { user } = useContext(AuthContext);
    const displayEmail = user?.email

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);
    // in this case first i use email filtering to check the data which email are same  
    // and purchase then i using map each email having the cartitems then map and.flat() all the cart items get
    const getCartbyEmail = (email) => {
        return orders.filter(obj => obj.orderEmail === email);
    }

    const emailCart = getCartbyEmail(displayEmail);
    console.log(emailCart);

    const allCartItems = emailCart.map(obj => obj.cartItems).flat();
    console.log(allCartItems);


    return (
        <div>
            <h1 className='text-4xl font-bold text-green-600 text-center my-8 py-4'>My Order</h1>

            <div className='lg:flex '>
                <div className=" w-1/2 lg:mx-auto">
                    <table className="table w-1/2">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-3xl text-center'>You have total {allCartItems.length} orders</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                allCartItems.map(product => <Order
                                    key={product._id}
                                    product={product}
                                ></Order>)
                            }

                        </tbody>


                    </table>
                </div>

                <div >
                    <ul className="steps">
                        <li className="step step-primary">Register</li>
                        <li className="step step-primary">Choose plan</li>
                        <li className="step step-primary">Purchase</li>
                        <li className="step">Receive Product</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;