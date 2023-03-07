import React from 'react';
import { toast } from 'react-hot-toast';

const AddProducts = () => {

    const productSubmit = (event) => {
        event.preventDefault();

        const img = event.target.img.value
        const name = event.target.name.value
        const category = event.target.category.value
        const price = event.target.price.value
        const ratings = event.target.ratings.value
        const details = event.target.details.value


        const productsDetails = {
            img, name, category, price, ratings, details
        }
        console.log(productsDetails);
        fetch('http://localhost:5000/getallproducts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productsDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    event.target.reset();
                    toast.success('Successfully post product')
                    window.location.reload(false);

                }
            })
            .catch(er => console.error(er))


    }
    return (
        <div>
            <h1 className='text-3xl font-semibold  text-center my-6 w-full'> You can easily add the product by fill all the input field</h1>

            <div>
                <form onSubmit={productSubmit} action="">
                    <input type="text" name="img" placeholder='Add image link' className="input input-bordered input-secondary w-full max-w-xs m-2 p-2" id="" required />
                    <div className='flex'>
                        <input type="text" name="name" placeholder='Enter product name' className="input input-bordered input-secondary w-full max-w-xs m-2 p-2" id="" required />
                        <input type="text" name="category" placeholder='Enter category' className="input input-bordered input-secondary w-full max-w-xs m-2 p-2" id="" required />
                    </div>
                    <div className='flex'>
                        <input type="text" name="price" placeholder='Price' className="input input-bordered input-secondary w-full max-w-xs m-2 p-2" id="" required />
                        <input type="text" name="ratings" placeholder='Ratings' className="input input-bordered input-secondary w-full max-w-xs m-2 p-2" id="" required />
                    </div>
                    <input type="text" name="details" placeholder='Add details product' className="input input-bordered input-secondary w-full max-w-xs" id="" required /> <br />
                    <div className='flex justify-center'>
                        <input type="submit" value="Submit" className="btn btn-outline btn-secondary m-2 p-2" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;