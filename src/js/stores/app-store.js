import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';
import cartAPI from '../api/cartAPI';

const CHANGE_EVENT = 'change'

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListerner ( CHANGE_EVENT, callback )
  },

  getCart(){
    return cartAPI.cartItems;
  },

  getCatalog(){
    return cartAPI.getCatalog();
  },

  getCartTotals(){
    return cartAPI.cartTotals();
  },

  dispatcherIndex: register( function( action ){
    switch(action.actionType) {
      case AppConstants.ADD_ITEM:
        cartAPI.addItem( action.item );
        break;
      case AppConstants.REMOVE_ITEM:
        cartAPI.removeItem( action.item );
        break;
      case AppConstants.INCREASE_ITEM:
        cartAPI.increaseItem( action.item );
        break;
      case AppConstants.DECREASE_ITEM:
        cartAPI.decreaseItem( action.item );
        break;
    }

    AppStore.emitChange();
  })
})

export default AppStore
