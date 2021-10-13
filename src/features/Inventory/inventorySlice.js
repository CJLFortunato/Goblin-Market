import { findRenderedComponentWithType } from "react-dom/test-utils";
import { selectSearchTerm } from "../SearchBar/searchBarSlice";
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

export const selectFilteredItems = (state) => {
    const allItems = selectAllitems(state);
    const searchTerm = selectSearchTerm(state);

    return allItems.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};


