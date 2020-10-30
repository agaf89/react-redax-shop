const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuRequsted = () => {
    return {
        type: 'MENU_REQUESTED',
    }
}
const menuError = () => {
    return {
        type: 'MENU_ERROR',
    }
}
const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}
const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}
const plusInCart = (id) => {
    return {
        type: 'PLUS_IN_CART',
        payload: id
    }
}
const minusInCart = (id) => {
    return {
        type: 'MINUS_IN_CART',
        payload: id
    }
}
export {
    menuLoaded,
    menuRequsted,
    menuError,
    addedToCart,
    deleteFromCart,
    plusInCart,
    minusInCart
}