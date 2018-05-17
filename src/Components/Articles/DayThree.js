import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import AlbumLink from '../AlbumLink';
import ArticlesNav from '../ArticlesNav';

import mainImage from  '../../images/articles/aquatherm-STK-2018-08.jpg';
import contentImage1 from '../../images/articles/aquatherm-STK-2018-09.jpg';
import contentImage2 from '../../images/articles/aquatherm-STK-2018-10.jpg';
import contentImage3 from '../../images/articles/aquatherm-STK-2018-11.jpg';

export default class DayThree extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <article className="article">
                <div className="wrapper">
                    <Breadcrumbs day="День 3" />

                    <h1>День 3</h1>
                    <img src={mainImage} alt="Сантехкомплект"/>

                    <div className="subsection">
                        <p>Что для вас выставка Аква-Терм? Для нас &mdash; отличная возможность встретить верных партнеров компании и пообщаться с ними, подружиться с новыми посетителями и рассказать им о наших решениях для их задач, продемонстрировать успехи, которых мы добились за прошедший год. Каждый последующий день Аква-Терм 2018 &mdash; это челлендж для всей нашей команды. В самом хорошем смысле этого слова, ведь залог ее успеха &mdash; это активная и слаженная работа каждого человека на стенде. Третий день выставки не исключение. Менеджеры компании &laquo;Сантехкомплект&raquo; по-прежнему рады рассказать о наших товарах как можно больше, снабдить рекламной продукцией и новейшими каталогами, напоить ароматным кофе и даже угостить конфеткой.</p>
                        <img src={contentImage1} alt="Сантехкомплект"/>
                        <p>У нас вы можете поближе рассмотреть гофрированные канализационные трубы <b>Magnaplast Magnacor</b> и даже заглянуть внутрь колодцев <b>Magnaplast SC</b>. Польский бренд, уже доказавший миру свое качество и надежность, занимает достойное месте на стенде &laquo;Сантехкомплект&raquo; и заслуженно привлекает внимание посетителей.</p>
                        <img src={contentImage2} alt="Сантехкомплект"/>
                        <p>Не забудьте подойти и попробовать открыть затвор с двойным эксцентриситетом <b>MIV</b> диаметром 800 мм (у нас на стенде это может сделать каждый). Это реальная возможность познакомиться с продукцией, которую мы можем привезти напрямую из Хорватии для вас. Отдельного внимания заслуживает задвижка с обрезиненным клином <b>Domex</b>, оснащенная электроприводом <b>ГЗ</b> &mdash; решение, уже готовое к установке. Стоит убедиться в этом лично на стенде 3-F3-9! </p>
                        <img src={contentImage3} alt="Сантехкомплект"/>
                        <p>Завтра мы все так же будем ждать вас на стенде нашей компании, заходите к нам в гости! По ссылке ниже уже доступен репортаж о том, как мы провели третий день на Аква-Терм 2018.</p>
                    </div>

                    <div className="subsection">
                        <h3>Ну и по традиции фотоотчет о третьем дне стенда нашей компании на Aqua-Therm 2018 можно посмотреть по ссылке ниже.</h3>
                        <AlbumLink href="https://www.flickr.com/photos/161517446@N06/albums/72157667043069897" />
                    </div>

                    <div className="subsection">
                        <ArticlesNav prev="two" next="four" />
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