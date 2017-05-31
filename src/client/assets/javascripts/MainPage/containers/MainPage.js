import React, { Component, PropTypes } from 'react';
import Products from '../components/Products';
import Header from './../../components/Header/Header';
import Footer from '../../components/Footer';
import './MainPage.scss';

export default function MainPage(){

    return <div className="wrapper">
            <Header />
            <Products />
            <Footer />
          </div>;
}
