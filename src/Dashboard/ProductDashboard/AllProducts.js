import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/UserContext';
import AllProduct from './AllProduct';

const AllProducts = () => {

    const { user } = useContext(AuthContext);
    const uid = user?.uid
    const adminId = "PpwhQMtA6mfSi6QtJU5YwIOpUOT2";
    console.log(uid,);

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/getallproducts`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
            })
    }, [])


    const handleDelete = id => {
        if (adminId == uid) {
            const procced = window.confirm("Are you sure to delete this ?")
            if (procced) {
                fetch(`http://localhost:5000/getallproducts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            toast.success("Deleted successfully")
                            const remaining = products.filter(x => x._id !== id)
                            setProducts(remaining)
                            window.location.reload(false);
                        }
                    })
            }
        }
        else {
            toast.error("Sorry only admin can delete the products.Thank You")
        }

    }

    return (
        <div>

            <div className=" w-1/2 lg:mx-auto">
                <table className="table w-1/2">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-3xl text-center'>You have total {products.length} items</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map(product => <AllProduct

                                key={product._id}
                                product={product}
                                handleDelete={handleDelete}
                            ></AllProduct>)
                        }

                    </tbody>


                </table>
            </div>





        </div>
    );
};

export default AllProducts;