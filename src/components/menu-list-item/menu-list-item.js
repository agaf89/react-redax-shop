import React from 'react';
import laptop from './laptop.svg'
import phone from './smartphone.svg'
import tablet from './ipad.svg'
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category, id} = menuItem
    const iconObj ={
        laptop,
        phone,
        tablet
    }
    
    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <div className="menu__icon"><img src={iconObj[category]} alt={title}/></div>
            <button onClick={() => {
                
                return onAddToCart(id)
            }} className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;