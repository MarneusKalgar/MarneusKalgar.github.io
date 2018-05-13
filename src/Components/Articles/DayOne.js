import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs';
// import Flickr from '../Flickr';
// import Share from '../Share';
import ArticlesNav from '../ArticlesNav';

import mainImage from  '../../images/articles/aquatherm-STK-2017-001.jpg';
import contentImage from '../../images/articles/aquatherm-STK-2017-050.jpg'

// const articleData = {
//     href: "https://www.flickr.com/photos/161517446@N06/sets/72157693411295832",
//     src: "https://c1.staticflickr.com/1/831/41904609291_c1405c9a4f_h.jpg",
//     shareUrl: "https://www.flickr.com/photos/161517446@N06/sets/72157693411295832"
// };

export default class DayOne extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <article className="article">
                <div className="wrapper">
                    <Breadcrumbs day="День 1" />

                    <h1>День 1</h1>
                    <img src={mainImage} alt="Сантехкомплект"/>

                    <div className="subsection">
                        <p>Современная жизнь просто немыслима без транспортировки на большие расстояния воды, газа и различных топливных материалов. С тех пор как человечество научилось делать трубы и конструировать из них трубопроводы, процесс транспортировки стал значительно проще, но приобрел свои конструктивные особенности и “оброс” элементами, которые в совокупности называются трубопроводной арматурой. Основные области применения таких трубопроводных изделий или арматуры:</p>
                        <ul>
                            <li>системы тепло- и водоснабжения;</li>
                            <li>газоснабжающие и газораспределительные системы;</li>
                            <li>конструкции для вентиляции помещений и кондиционирования;</li>
                            <li>системы с различными агрессивными средами типа морской воды, бензина и т.п.;</li>
                            <li>устройства для пожаротушения и аварийной подачи воды.</li>
                        </ul>
                        <p>Там, где есть подача рабочей среды (а именно так мы будем называть различные носители),  должна быть и возможность ее регулирования и полного перекрытия потока. За эти функции в трубопроводных инженерных системах отвечают устройства из класса запорной арматуры, которые называются затворами. Из всех затворов самой широкое применение получили поворотные дисковые затворы.</p>
                    </div>

                    <div className="subsection">
                        <h3>Дисковые затворы и принцип их действия</h3>
                        <p>Невозможно найти современные трубопроводные системы без встроенных в них дисковых поворотных затворов разных производителей, параметров и разной сложности. Почему же они так полюбились инженерам-проектировщикам и специалистам, постоянно эксплуатирующим такие системы? Ответ прост, как и сами затворы. Это удобство и надежность, подходящая стоимость, возможность ремонта и быстрой замены уплотнений прямо на месте в случае необходимости.</p>
                        <blockquote>
                        Небольшие габаритные размеры, малый вес и доступная стоимость - ключевые достоинства дисковых затворов
                        </blockquote>
                    </div>

                    <div className="subsection">
                        <h3>Затворы двухэксцентриковые</h3>
                        <p>Принцип работы  затворов с двойным эксцентриситетом принципиально не отличается от принципа действия простых поворотных дисковых затворов.</p>
                        <img src={contentImage} alt="Сантехкомплект"/>
                        <p>Наша компания уже давно предлагает затворы такого типа, обращая внимание клиентов на то, что они изготавливаются с корпусами из высокопрочного металла, а это значительно повышает их износостойкость и сопротивление коррозии. Особенно это важно для систем, в которых рабочим веществом является вода или пар. Представленные у нас типы двухэксцентриковых затворов долговечны еще и за счет высокого качества применяемого в них уплотнения, а значит, не требуют постоянного специального обслуживания и проведения частых ремонтных работ.</p>
                    </div>

                    {/* <div className="subsection">
                        <h3>Фотоальбом с первого дня выставки</h3>
                        <p>Переходите в альбом ниже, чтобы скачать фотографии с выставки</p>
                        <Flickr href={articleData.href} src={articleData.src} />
                    </div> */}

                    {/* <div className="subsection">
                        <Share url={articleData.shareUrl}/>
                    </div> */}

                    <div className="subsection">
                        <ArticlesNav prev="zero" />
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