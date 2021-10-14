export const addItem = (itemToAdd) => {
    return {
      type: 'cart/addItem',
      payload: itemToAdd,
    };
  };
  
  // Create your changeItemQuantity action creator here.
export const changeItemQuantity = (name, newQuantity) => {
    return {
      type: "cart/changeItemQuantity",
      payload: {
        name,
        newQuantity
      }
    };
  };

const initialCart = {};

export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
        case 'cart/addItem': {
            const { name, price } = action.payload;
          
            const quantity = cart[name] ? cart[name].quantity + 1 : 1;
            const newItem = { price, quantity };

            return { 
                ...cart, 
                [name]: newItem 
              };
        }
        case "cart/changeItemQuantity": {
            const { name, newQuantity } = action.payload;
      const itemToUpdate = cart[name];

      // Create a copy of itemToUpdate and update the quantity prop.
      const updatedItem = {
        ...itemToUpdate,
        quantity: newQuantity
      }
      // Return a copy of the cart with the updatedItem included.
      return {
        ...cart,
        [name]: updatedItem
      };
        }
        default: {
            return cart;
        }
    }
};

export const selectCartItems = (state) => state.cart;