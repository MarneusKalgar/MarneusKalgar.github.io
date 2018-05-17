import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import AlbumLink from '../AlbumLink';
import ArticlesNav from '../ArticlesNav';

export default class DayFour extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <article className="article">
                <div className="wrapper">
                    <Breadcrumbs day="День 4" />

                    <h1>День 4</h1>
                    {/* <img src={mainImage} alt="Сантехкомплект"/> */}

                    {/* <div className="subsection">
                        <h3>у и по традиции фотоотчет о третьем дне стенда нашей компании на Aqua-Therm 2018 можно посмотреть по ссылке ниже.</h3>
                        <AlbumLink href="" />
                    </div> */}

                    <div className="subsection">
                        <ArticlesNav next="zero" />
                    </div>
                </div>
                <footer>
                    <div className="wrapper">
                        <p>&copy; 2018 Сантехкомплект.</p>
                    </div>
                </footer>
            </article>
        );
    }
};