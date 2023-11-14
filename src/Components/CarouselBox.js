import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Card } from 'react-bootstrap';
import sof from '../assets/sof.jpg'
import ipso from '../assets/ipso.jpg'
import course from '../assets/q-course.jpg'
import './style/index.scss'
import './style/carousel.css'




class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='img_carousel'
                        src={sof}
                        alt='SOF'
                    />
                    <Carousel.Caption className='caption_1'>
                        <h2 className="text_h1">Сили спеціальних операцій</h2>
                        <p className="text_h1">окремий рід сил у складі Збройних сил України, до складу якого входять частини спеціального призначення і підрозділи інформаційно-психологічних спеціальних операцій, що комплектуються спеціально навченими фахівцями, які мають спеціальні можливості у сферах розвідки, прямих акцій та військової підтримки для виконання складних, небезпечних, інколи політично чутливих операцій, що проводить командування ССО.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='img_carousel'
                        src={ipso}
                        alt='IPSO'
                    />
                    <Carousel.Caption className='caption_2'>
                        <h2 className="text_h1">Підрозділи інформаційно-психологічних операцій у складі ССО</h2>
                        <p className="text_h1">це окремий компонент, який проводить оборонні чи наступальні психологічні операції, що зменшують спроможності ворога на полі бою, а саме: змушують противника відходити від займаних позицій, здаватись у полон заради збереження свого життя, саботувати накази командування і аж до повернення на свою територію задля вирішення соціально-побутових питань у своєму домі, а не на території нашої країни.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='img_carousel'
                        src={course}
                        alt='Q-course'
                    />
                    <Carousel.Caption className='caption_3'>
                        <h2 className="text_h1">ВІДБІР НА Q-COURSE ІПсО</h2>
                        <p className="text_h1">Вперше проводиться набір на Кваліфікаційний курс ІПсО.
                            У період з 10.05.2019 по 21.07.2019 триває реєстрація кандидатів
                            на I Кваліфікаційний курс ІПсО Сил спеціальних операцій.
                            Дата початку Курсу 05 серпня 2019 року. До участі у Курсі запрошуються діючі військовослужбовці Збройних Сил України, які проходять військову службу за контрактом (з вищою освітою) віком до 35 років.

                            Протягом Кваліфікаційного курсу ІПсО Ви вивчите специфіку проведення інформаційних та психологічних операцій, отримаєте базові знання інформаційно-аналітичної роботи, опануєте основи комунікацій та ще багато іншого. Загальна тривалість Курсу становить три з половиною місяці.

                            Успішне проходження Курсу гарантує Вам призначення на посади до підрозділів ІПсО Сил спеціальних операцій Збройних Сил України.

                            Подати заявку на Курс <a href='https://sof.mil.gov.ua/join'>sof.mil.gov.ua/join</a>. 
                            ВАЖЛИВО! В примітках обов`язково вказати, що Ви подаєте заявку саме на Кваліфікаційний курс ІПсО!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Card>
                        <iframe
                            title="YouTube Video"
                            width="100%"
                            height="600"
                            src="https:/www.youtube.com/embed/l4SU9NVZCQM?si=6Nj6BMoh28kIRmEL"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </Card>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;