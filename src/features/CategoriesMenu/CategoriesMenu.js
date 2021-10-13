import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './CategoriesMenu.css';
import { clearCategory, selectCategory, setCategory } from "./categoriesMenuSlice";

export function CategoriesMenu() {

    const currentCategory = useSelector(selectCategory);
    const dispatch = useDispatch();

    const onCategoryClickHandler = (e) => {
        const userInput = e.target.innerHTML;
        dispatch(setCategory(userInput));
    };

    const onClearCategoryHandler = () => {
        dispatch(clearCategory());
    }

    return(
        <div className="categories-menu">
            <h3>Categories</h3>
            <ul>
              <li><button className="cat-btn" onClick={onClearCategoryHandler}>All</button></li>
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Category 1</button></li>
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Category 2</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Category 3</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Category 4</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Category 5</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Category 6</button></li>    
            </ul>
        </div>
    );
}