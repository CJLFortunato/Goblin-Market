import React from "react";
import { useDispatch } from "react-redux";
import './CategoriesMenu.css';
import { clearCategory, setCategory } from "./categoriesMenuSlice";


export function CategoriesMenu() {

    
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
            <h3 class="menu-h3">Categories</h3>
            <ul>
              <li><button className="cat-btn" onClick={onClearCategoryHandler}>All</button></li>
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Technology</button></li>
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Reagents</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Artifacts</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Live Animals</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Weapons</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Drugs</button></li>
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Best Sellers</button></li> 
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>On Sale</button></li>     
            </ul>
        </div>
    );
}