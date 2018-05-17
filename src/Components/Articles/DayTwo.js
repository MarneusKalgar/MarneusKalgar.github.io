import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import ArticlesNav from '../ArticlesNav';
import AlbumLink from '../AlbumLink';

import mainImage from  '../../images/articles/aquatherm-STK-2018-07.jpg';
import contentImage1 from '../../images/articles/aquatherm-STK-2018-05.jpg';
import contentImage2 from '../../images/articles/aquatherm-STK-2018-04.jpg';
import contentImage3 from '../../images/articles/aquatherm-STK-2018-06.jpg';

export default class DayTwo extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <article className="article">
                <div className="wrapper">
                    <Breadcrumbs day="День 2" />

                    <h1>День 2</h1>
                    <img src={mainImage} alt="Сантехкомплект"/>

                    <div className="subsection">
                        <p>На волне энтузиазма и эйфории от первого дня мы энергично начали второй день крупнейшей промышленной выставки в Украине Aqua-Therm 2018. Крупные строительные компании, производители, коммунальные предприятия, монтажники хлынули сегодня в Международный выставочный центр.</p>
                        <img src={contentImage1} alt="Сантехкомплект"/>
                        <p>Представители всех уголков Украины - близких и далеких - приехали в эпицентр текущих событий HVAC индустрии. Иностранные гости с нескольких стран Европы, Турции, Китая также присутствовали на Aqua-Therm сегодня. Что касается нас, то мы без всяких сомнений удовлетворены прошедшим днем. Еще больше посетителей с интересом рассмотрели поближе наши образцы, выставленные на стенде, задали интересующие вопросы, получили подробные консультации о наиболее важной для них продукции, а также нашли ближайший к ним филиал &laquo;Сантехкомплект&raquo; (у нас ведь их 6, не забывайте).</p>
                        <img src={contentImage2} alt="Сантехкомплект"/>
                        <p>Ассортимент компании «Сантехкомплект» чрезвычайно широк (если вы еще не убедились в этом, обязательно загляните в каталог на <a href="https://santehkomplekt.ua/" target="_blank" rel="noopener noreferrer">нашем сайте</a>). На стенде же в этом году мы представили три направления нашей продукции:</p>
                        <ul>
                            <li>трубопроводная арматура;</li>
                            <li>канализационные системы;</li>
                            <li>отопительное оборудование.</li>
                        </ul>
                        <p>Самые интересные образцы этих направлений расположены на стенде &laquo;Сантехкомплект&raquo;. У нас вы можете не ограничивать себя и смело тестировать продукцию прямо на месте, а опытные специалисты помогут разобраться в нюансах.</p>
                        <img src={contentImage3} alt="Сантехкомплект"/>

                        <p>Если вы еще не успели заглянуть к нам на стенд и пообщаться с нашими симпатичными сотрудниками, то завтра самое время исправить эту ситуацию. Мы ждем вас на стенде 3-F3-9!</p>
                    </div>

                    <div className="subsection">
                        <h3>Ну и по традиции фотоотчет о втором дне стенда нашей компании на Aqua-Therm 2018 можно посмотреть по ссылке ниже.</h3>
                        <AlbumLink href="https://www.flickr.com/photos/161517446@N06/albums/72157695166774671" />
                    </div>

                    <div className="subsection">
                        <ArticlesNav prev="one" next="three" />
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