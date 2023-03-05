
export const addToCart = (product, quantity) => (dispatch, getState) => {



    const cartItem = {
        name: product.name,
        quantity: quantity,
        img: product.img,
        prices: product.price,
        price: product.price * quantity
    }

    dispatch({ type: 'ADD_TO_CART', payload: cartItem })

    const cartItems = getState().CartReducers.cartItems
    console.log(cartItems);
    console.log(localStorage.setItem('cartItems', JSON.stringify(cartItems)));
}