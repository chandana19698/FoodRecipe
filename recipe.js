import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipes}>
            <h1>{title}</h1>
            
            <p><b>Calories : </b>{calories}</p>
            <img src={image} alt=""></img>
            <p>
                {ingredients.map(ingredient => (
                    <p><li>{ingredient.text}</li></p>
                ))}
            </p>
            
        </div>
    );
};

export default Recipe;