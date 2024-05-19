import Footer from "../Footer"
import Header from "../Header"
import cls from './About.module.css'
import image_3 from '../../assets/image_3.png'
import image_4 from '../../assets/image_4.png'

function About(props) {
    return (
        <>
            <Header />
            <main>
                <section className={cls.about__as}>
                    <h2>О компании</h2>
                    <div className={cls.text__block}>
                        <img src={image_3} alt="" />
                        <div className={cls.text__item}>
                            <p>Студия Pallas cat была создана с целью уместить на один сайт все - все материалы, что человек
                                изучает на JS, но сделать это так, чтобы картинка нашего сайта не пострадала, чтобы мы могли
                                посмотреть на результаты нашей практики и сказать: “да, я я это сделал и сделал это красиво”</p>
                            <h4>Введение</h4>
                            <p>На данной странице пользователю дана возможность по клику на одну из кнопок открыть модальное
                                окно с соответствующим содержимым.Сайт будет усложняться по мере погружению в Javascript.</p>
                        </div>
                    </div>
                </section>
                <section className={cls.instruction}>
                    <h4>Инструкция. Шаги</h4>
                    <div className={cls.instruction__block}>
                        <div className={cls.instruction__item}>
                            <h2>1.</h2>
                            <p>Видим кнопку, например, fetch. По клику на эту кнопку открывается модальное окно</p>
                        </div>
                        <div className={cls.instruction__item}>
                            <h2>2.</h2>
                            <p>В модальном окне вытаскиваем данные, согласно поставленной задаче</p>
                        </div>
                        <div className={cls.instruction__item}>
                            <h2>3.</h2>
                            <p>Каждое модальное окно должно быть способным закрываться и открываться по клику</p>
                        </div>
                        <div className={cls.instruction__item}>
                            <h2>4.</h2>
                            <p>Каждое модальное окно должно быть способным закрываться и открываться по клику</p>
                        </div>
                    </div>
                </section>
                <section className={cls.reviews}>
                    <div className={cls.reviews__text}>
                        <h4>Оценка</h4>
                        <p>Оценка производится в соотвествии с соблюдением разметки, качества использованных тегов (
                            семантически ), качеству написания js кода и количеству выполненых заданий</p>
                    </div>
                    <img src={image_4} alt="" />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About

