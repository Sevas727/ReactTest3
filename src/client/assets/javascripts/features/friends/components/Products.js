import React, { Component, PropTypes } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { getProducts } from "../../../actions/products.actions"
import { bindActionCreators } from 'redux';

 @connect((state)=>({
     state: state,
     form: state.form
 })
     , (dispatch)=>({
     actions: bindActionCreators({getProducts}, dispatch)
 })
 )

export default class Products extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        friends: PropTypes.object.isRequired
    };

     componentDidMount(){
         this.props.actions.getProducts();
     }

    render() {

        return (
            <main className="block2">
                <div className="listWrapper">
                    <div className="listContainer">
                    <Item />

                        <div className="total-sum">
                            <h1>225 &#8364;</h1>
                        </div>

                    </div>
                </div>
            </main>
        );
    }
}
