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

  export const removeItem = (itemToRemove) => {
    console.log('action dispatched');
    return {
      type: 'cart/removeItem',
      payload: itemToRemove
    };
  }

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
        case 'cart/removeItem': {
          console.log("action received");
          console.log(action.payload);
          const { name } = action.payload;
          if (cart[name] === action.payload.name) {
             
          }
          const removeProp = action.payload.name;
             console.log(removeProp);
             const { [removeProp]: remove, ...rest} = cart;
            console.log(rest);
             
            return {...rest};
          
        }
        default: {
            return cart;
        }
    }
};

export const selectCartItems = (state) => state.cart;

export const selectNumberOfItemsInCart = (state) => Object.keys(state.cart).length;