import React, { Component, PropTypes } from 'react';
import { FormGroup, FormControl   } from 'react-bootstrap';

export default class Item extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        friends: PropTypes.object.isRequired
    };

    render() {

        return (
            <div className="listItem">
                <div className="itemImgBlock">
                    <img src="#" />
                </div>

                <div className="itemInfBlock">
                    <h4>Title</h4>
                    <h5>Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle </h5>
                    <FormGroup controlId="formControlsSelect">
                        <FormControl bsClass="itemInfBlock-select" componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other1">1</option>
                            <option value="other2">2</option>
                            <option value="other3">3</option>
                        </FormControl>
                    </FormGroup>
                </div>

                <div className="itemQuantityBlock">
                    <div className="itemQuantityButton">
                        <p>-</p>
                    </div>
                    <div className="price">
                        <p>5</p>
                    </div>
                    <div className="itemQuantityButton">
                        <p>+</p>
                    </div>
                </div>

                <div className="itemSumTrashBlock">
                    <div className="itemSumTrashBlockWrapper">
                        <div className="trash">
                            <i className="fa fa-trash" />
                        </div>
                        <h5 className="sum">75.00 &#8364;</h5>
                    </div>
                </div>
            </div>
        );
    }
}

