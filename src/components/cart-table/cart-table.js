import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux'
import {deleteFromCart, plusInCart, minusInCart} from '../../actions'

const CartTable = ({items, deleteFromCart, plusInCart, minusInCart}) => {
    
    
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, qtty} = item
                        
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">
                                     {price * qtty + ' $'} 
                                    <button onClick={ () => minusInCart(id) } className='cart__item-btn'>—</button>
                                    <div className='cart__item-count"'>{qtty}</div>
                                    <button onClick={ () => plusInCart(id) } className='cart__item-btn'>+</button>
                                    
                                </div>
                                
                                <div onClick={ () => deleteFromCart(id) } className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};
const mapStateToProps = ({items}) => {
    return {
        items
    }
}
const mapDispatchToProps = {
    deleteFromCart,
    plusInCart,
    minusInCart
}



export default connect(mapStateToProps, mapDispatchToProps)(CartTable);