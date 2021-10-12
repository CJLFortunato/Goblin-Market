import allItemsData from "./data";


const initialState = [];

export const loadData = () => {
    return {
        type: 'allItems/loadData',
        payload: allItemsData 
    }
};

export const allItemsReducer = (allItems = initialState, action) => {
    switch(action.type) {
        case 'allItems/loadData': {
            return action.payload;
        }
    default: 
        return allItems;
    }
};

export const selectAllitems = (state) => state.inventory;

/*export const selectFilteredItems = (state) => {

};*/


