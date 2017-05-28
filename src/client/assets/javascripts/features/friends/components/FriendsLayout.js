import React, { Component, PropTypes } from 'react';
import { FormGroup, Button, FormControl   } from 'react-bootstrap';

import AddFriendInput from './AddFriendInput';
import FriendList from './FriendList';
import './FriendListApp.scss';

export default class FriendsLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    friends: PropTypes.object.isRequired
  };

  render() {
    const { friends: { friendsById }, actions } = this.props;

    return (
      <div className="wrapper">
          <header>
              <a href="https://www.adyax.com/">
                  <img alt="Adyax" src={require("../../../../images/logo.jpg")} />
              </a>
              <h5>a better experience</h5>
              <h1>Front-End Developer<span>.</span></h1>
              <h3>
                  Adyax's core values take top priority: we care for our client,
                  and we care for our people. Staff and clients work in partnership
                  with consistent, transparent communication.
              </h3>
          </header>
          <main className="block2">
              <div className="listWrapper">
                  <div className="listContainer">
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
                                  <div className="trash">
                                          <i className="fa fa-trash" />
                                  </div>
                                  <h5 className="sum">75.00 &#8364;</h5>
                                  <div></div>
                          </div>

                      </div>

                  </div>
              </div>
          </main>
          <footer>
              <img alt="Adyax" src={require("./bottom-background.jpg")} />
          </footer>
          {/* <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />*/}
      </div>
    );
  }
}
