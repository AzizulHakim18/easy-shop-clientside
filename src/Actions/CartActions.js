
export const addToCart = (product, quantity) => (dispatch, getState) => {



    const cartItem = {
        name: product.name,
        _id: product._id,
        productQuantity: +quantity,
        img: product.img,
        prices: product.price,
        price: product.price * quantity
    }

    dispatch({ type: 'ADD_TO_CART', payload: cartItem })

    const cartItems = getState().CartReducers.cartItems
    console.log(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart = (product) => (dispatch, getState) => {

    dispatch({ type: "DELETE_FROM_CART", payload: product })
    const cartItems = getState().CartReducers.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}