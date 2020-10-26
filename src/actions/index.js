const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuRequsted = (newMenu) => {
    return {
        type: 'MENU_REQUESTED',
    }
}
const menuError = (newMenu) => {
    return {
        type: 'MENU_ERROR',
    }
}
export {
    menuLoaded,
    menuRequsted,
    menuError
}