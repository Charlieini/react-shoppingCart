import React from 'react';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/app-cart-button';
import { Link } from 'react-router';

export default (props) => {
  let itemStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: 15
  }
  return (
    <div className="col-xs-6 con-sm-4 col-md-3">
      <h4>{ props.item.title }</h4>
      <img src="http://placehold.it/250x250" width="100%" className="img-responsive"/>
      <p>{ props.item.sumary }</p>
      <p>${ props.item.cost } <span
        className="text-success">
          {props.item.qty && `(${props.item.qty} in cart )`}
        </span>
      </p>
      <div className="btn-group">
        <Link to={`/item/${props.item.id}`} className="btn btn-default btn-sm">Learn more</Link>
        <CartButton
          handler={
            AppActions.addItem.bind(null, props.item)
          }
          txt="Add to Cart"
          />
        </div>
    </div>
  )
}
