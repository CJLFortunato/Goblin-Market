const initialState = ''

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'categories/setCategory':
      return action.payload;
    case 'categories/clearCategory':
      return '';
    default:
      return state;
  }
};

export function setCategory(cat) {
  return {
    type: 'categories/setCategory',
    payload: cat
  }
};

export function clearCategory() {
  return {
    type: 'categories/clearCategory'
  }
};

export const selectCategory = (state) => state.categories;

export default categoriesReducer;

