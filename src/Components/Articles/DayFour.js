import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import AlbumLink from '../AlbumLink';
import ArticlesNav from '../ArticlesNav';
import Footer from '../Footer';

import mainImage from  '../../images/articles/aquatherm-STK-2018-12.jpg';
import contentImage1 from '../../images/articles/aquatherm-STK-2018-13.jpg';
import contentImage2 from '../../images/articles/aquatherm-STK-2018-14.jpg';
import contentImage3 from '../../images/articles/aquatherm-STK-2018-15.jpg';

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
                    <img src={mainImage} alt="Сантехкомплект"/>

                    <div className="subsection">
                        <p>Вот и подошла к концу выставка Aqua-Therm 2018, к которой мы готовились на протяжении нескольких месяцев. Четыре невероятно насыщенных дня промелькнули очень быстро, а ведь порой нам так хотелось насладиться моментом чуточку дольше. Мы в очередной раз убедились в том, что Aqua-Therm &mdash; это отличное место для новых знакомств и теплых встреч с уже проверенными партнерами, возможность рассказать побольше о нашей компании и о прошедших за год переменах. </p>
                        <img src={contentImage1} alt="Сантехкомплект"/>

                        <p>Надеемся на то, что смогли-таки порадовать необычной продукцией и слаженной работой каждого сотрудника на стенде. Не будем скрывать &mdash; искренне хотели оставить приятное впечатление у каждого посетителя нашего стенда. Как думаете, получилось?</p>
                        <img src={contentImage2} alt="Сантехкомплект"/>

                        <p>Если уж вдруг вам не хватило приятного общения с нашими специалистами или не досталось нужного каталога, не отчаивайтесь. Обратитесь в ближайший филиал &laquo;Сантехкомплект&raquo; и наверстайте упущенное.</p>
                        <img src={contentImage3} alt="Сантехкомплект"/>

                        <p>Ну а нам остается только пересматривать фоторепортаж с четвертого и последнего дня выставки. Помимо ее окончания мы сегодня отметили ещё и День вышиванки. О том, как это было, смотрите по ссылке ниже.</p>
                    </div>

                    <div className="subsection">
                        <AlbumLink href="https://www.flickr.com/photos/161517446@N06/albums/72157693824485712" />
                    </div>

                    <div className="subsection">
                        <ArticlesNav next="zero" />
                    </div>
                </div>

                <Footer />
            </article>
        );
    }
};