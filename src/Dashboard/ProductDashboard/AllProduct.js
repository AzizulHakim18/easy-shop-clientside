import React from 'react';

const AllProduct = ({ product, handleDelete }) => {


    const { img, name, price, _id } = product

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
                <td>Price: {price}</td>
                <td>Product Id: {_id}</td>
                <td className='text-2xl font-semibold'><button className="btn btn-outline btn-error" onClick={() => handleDelete(_id)}>x</button></td>

            </tr>
        </div>
    );
};

export default AllProduct;