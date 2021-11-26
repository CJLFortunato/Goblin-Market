import { selectCategory } from "../CategoriesMenu/categoriesMenuSlice";
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
    const category = selectCategory(state);

    if (searchTerm.length > 0 && category.length > 0) {
        const temp = allItems.filter((item) => item.category === category);
        
        return temp.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ); 
    } else if (category.length > 0) {
        if (category === "Best Sellers") {
            return allItems.filter((item) => item.bestSeller === true);
        }
        if (category === "On Sale") {
            return allItems.filter((item) => item.onSale === true);
        }
        return allItems.filter((item) => item.category === category);
    } else if (searchTerm.length > 0) {
        return allItems.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    } else {
        return allItems;
    }  
};


