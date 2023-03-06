import React from 'react';

const Order = ({ product }) => {

    const { img, name, productQuantity } = product

    return (
        <div>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div>


                        </div>
                    </div>
                </td>
                <td>
                    Product: {name}

                </td>
                <td>Quantity: {productQuantity}</td>

            </tr>
        </div>
    );
};

export default Order;