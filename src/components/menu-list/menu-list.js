import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux'
import WithRestoService from '../hoc'
import {menuLoaded, menuRequsted,menuError, addedToCart} from '../../actions'
import Spinner from '../spinner'
import Error from '../error'
import './menu-list.scss';

class MenuList extends Component {
    componentDidMount(){
        this.props.menuRequsted()
        const {RestoService} = this.props
        RestoService.getMenuItems().then( res =>{
            this.props.menuLoaded(res)
        }).catch(e => {
            this.props.menuError()
            console.log(e)
        })
    }
    render() {
        const {menuItems,addedToCart, loading, error} = this.props

        if( loading ){
            return <Spinner/>
        } else if( !loading && error ){
            return <Error/>
        }
        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem =>{
                        return <MenuListItem  onAddToCart={() => addedToCart(menuItem.id)}  key={menuItem.id} menuItem={menuItem}/>
                    }) 
                }  
            </ul>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = {
    menuLoaded,
    menuRequsted,
    menuError,
    addedToCart
}


export default WithRestoService ()(connect(mapStateToProps, mapDispatchToProps) (MenuList));
