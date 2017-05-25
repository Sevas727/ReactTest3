import React, { PropTypes } from 'react';
import * as s from '../styles/main.scss';


const App = () =>
    <div className={s.main}>
        <div className={s.block1}>
            <h2>adyax<span>.</span></h2>
            <h5>a better experience</h5>
            <h1>Front-End Developer<span>.</span></h1>
            <h3>
                Adyax's core values take top priority: we care for our client,
                and we care for our people. Staff and clients work in partnership
                with consistent, transparent communication.
            </h3>
        </div>
        <div className={s.block2}>
            <div className={s.listWrapper}>
                <div className={s.listContainer}>
                    <div className={s.listItem}>
                        <div className={s.itemImgBlock}>
                            <img src="#" />
                        </div>

                        <div className={s.itemInfBlock}>
                            <h4>Title</h4>
                            <h5>Subtitle</h5>
                            <select>
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select>
                        </div>

                        <div className={s.itemQuantityBlock}>
                            <div className={s.itemQuantityButton}>
                                <p>-</p>
                            </div>
                            <div className={s.price}>
                                <h5>5</h5>
                            </div>
                            <div className={s.itemQuantityButton}>
                                <p>+</p>
                            </div>
                        </div>

                        <div className={s.itemSumTrashBlock}>
                            <div>
                                <p>Trash</p>
                            </div>
                            <h5>Sum</h5>
                        </div>

                    </div>
                    <p >
                        Adyax's core values take top priority: we care for our client,
                        and we care for our people. Staff and clients work in partnership
                        with consistent, transparent communication.
                    </p >
                    <p className={s.listItem}>
                        Adyax's core values take top priority: we care for our client,
                        and we care for our people. Staff and clients work in partnership
                        with consistent, transparent communication.
                    </p>
                    <p>
                        Adyax's core values take top priority: we care for our client,
                        and we care for our people. Staff and clients work in partnership
                        with consistent, transparent communication.
                    </p>
                </div>
            </div>
        </div>
        <div className={s.block3}>
        </div>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
