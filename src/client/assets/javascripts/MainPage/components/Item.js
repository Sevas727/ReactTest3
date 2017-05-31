import React, { PureComponent, PropTypes } from 'react';
import { FormGroup, FormControl, Button   } from 'react-bootstrap';

export default class Item extends PureComponent {

  static propTypes = {
    product: PropTypes.object.isRequired
  };

  constructor(props) {
      super();

      this.state = {
        sub: props.product.subs[0],
        quantity: props.product.subs[0].qMin,
        sum: props.product.subs[0].price * props.product.subs[0].qMin
      };
  }

  changeSub = (atr) => {
    const { product } = this.props;
    const i = atr.target.value;
    this.setState({
      sub: product.subs[i],
      quantity: product.subs[i].qMin,
      sum: product.subs[i].price * product.subs[i].qMin
    },
      function(){
        this.props.getSum()
      });
  };

  reduceQ = () => {

    this.setState({
      quantity: --this.state.quantity,
      sum: this.state.quantity * this.state.sub.price
    }, function(){
      this.props.getSum()
    });
  };

  increaseQ = () => {

    this.setState({
      quantity: ++this.state.quantity,
      sum: this.state.quantity * this.state.sub.price
    }, function(){
      this.props.getSum();
    });
  };

  deleteProduct = () => {
    this.props.deleteProduct(this.props.num);
  };

    render() {

      const { product: { subs, subtitle, title }} = this.props;
      const { quantity, sum, sub: { qMin, qMax, imageUrl }} = this.state;

        return (
            <div className="listItem">
                <div className="itemImgBlock">
                    <img src={imageUrl} />
                </div>

                <div className="itemInfBlock">
                    <h4>{title}</h4>
                    <h5>{subtitle}</h5>
                    <FormGroup controlId="formControlsSelect">
                        <FormControl onChange={this.changeSub} bsClass="itemInfBlock-select" componentClass="select" placeholder="select">
                          {subs && subs.map((sub, i) => <option key={i} value={i}>{sub.label}</option>)}
                        </FormControl>
                    </FormGroup>
                </div>

                <div className="itemQuantityBlock">
                    <Button onClick={this.reduceQ} disabled={quantity == qMin} className="itemQuantityButton">
                        -
                    </Button>
                    <div className="price">
                        <p>{quantity}</p>
                    </div>

                  <Button onClick={this.increaseQ} disabled={quantity == qMax} className="itemQuantityButton">
                        +
                  </Button>
                </div>

                <div className="itemSumTrashBlock">
                    <div className="itemSumTrashBlockWrapper">
                        <div className="trash">
                            <i className="fa fa-trash" onClick={this.deleteProduct} />
                        </div>
                        <h5 className="sum">{sum} &#8364;</h5>
                    </div>
                </div>
            </div>
        );
    }
}

