import React, { Component, PropTypes } from 'react';
import Products from './Products';
import './MainPage.scss';

export default class FriendsLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    friends: PropTypes.object.isRequired
  };

  render() {

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
          <Products />
          <footer>
              <img alt="Adyax" src={require("./bottom-background.jpg")} />
          </footer>
          {/* <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />*/}
      </div>
    );
  }
}
