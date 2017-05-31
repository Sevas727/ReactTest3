import React, { Component, PropTypes } from 'react';
import Item from './Item';
import TotalSum from './TotalSum';
import { connect } from 'react-redux';
import { getProductsReq, deleteProduct } from "../../actions/products.actions"
import { bindActionCreators } from 'redux';

 @connect((state)=>({
     products: state.productsReducer.products
     }), (dispatch)=>({
         actions: bindActionCreators({getProductsReq, deleteProduct}, dispatch)
     })
 )

export default class Products extends Component {

   constructor(props) {
     super();
     this.state = {
       totalSum: 0
     };
   }

    static propTypes = {
        actions: PropTypes.object.isRequired
    };


     componentDidMount(){
         this.props.actions.getProductsReq();
     }

   componentDidUpdate(){
     if(this.props.products && this.props.products.length) this.getSum();
   }

   getSum = () => {

     let totalSum = 0;

     for(let i=0; i< this.props.products.length; i++){
        const ItemSum = this.refs[`Item${i}`].state.sum;
         totalSum += ItemSum;
     }
    if(this.state.totalSum !== totalSum) this.setState({totalSum: totalSum});
   };

    render() {

        const { products, actions: { deleteProduct } } = this.props;
        const { totalSum } = this.state;

        return (
            <main className="block2">
                <div className="listWrapper">
                    <div className="listContainer">
                        {products && products.map((product, i) =>
                            <Item key={i}
                                  num={i}
                                  ref={`Item${i}`}
                                  product={product}
                                  deleteProduct={deleteProduct}
                                  getSum={this.getSum}
                            />)
                        }
                      <TotalSum totalSum={totalSum} />
                    </div>
                </div>
            </main>
        );
    }
}

Products.defaultProps = {
  products: []
}
