import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Actions/CartActions";


const Product = ({ product }) => {

    const { category, img, name, price, ratings } = product;

    const [quantity, setQuantity] = useState("");

    const dispatch = useDispatch()
    const addtocart = () => {

        if (quantity < 1) {
            toast.error('Please add quantity first')
        }
        else {
            dispatch(addToCart(product, quantity))
            toast.success('Successfully Added to cart')
        }

    }

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
                    <div className="card-actions justify-between items-center">
                        <div className="badge badge-outline font-semibold">Price: BDT{price}</div>
                        <div className="badge badge-outline">Ratings:{ratings}</div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <p className='lg:text-xl font-semibold '>Quantity:</p>
                            <select className='m-2 p-2 border border-rose-600 rounded-lg lg:text-xl font-medium' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                                {[...Array(5).keys()].map((x, i) => {
                                    return <option value={i}>{i}</option>
                                })}
                            </select>
                        </div>
                        <button className="btn btn-outline btn-secondary" onClick={addtocart}>Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;