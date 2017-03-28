import {connect} from 'react-redux';
import React, {Component} from 'react';
import {mapStateToProps, mapDispatchToProps} from '../store.js';
import {Link} from 'react-router-dom';


 class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.props.clearCart()}>Clear Cart!</button>
        <table className='table table-stripped'>
        <thead>
          <tr><th>Item</th><th>Quantity</th><th>Price</th></tr>
        </thead>
        <tbody>
        {
          this.props.cart.map((ele, i) => {
            return  <tr key={this.props.cart[i].id}>
                      <td>{ele.item}</td>
                      <td>{ele.quantity}</td>
                      <td>${ele.quantity * 2.50}</td>
                      <td><button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.delItemCart(this.props.cart[i].id, this.props.cart[i].key)}>Delete Item</button></td>
                    </tr>
          })
        }
        <tr className='active'><td><strong>Total: ${this.props.qty * 2.50}</strong></td><td></td><td></td></tr>
        </tbody>
        </table>
        <button type="button" className="btn btn-primary btn-lg"><Link to='/confirm'>Pay Now!</Link></button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
