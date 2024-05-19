import { Link } from "react-router-dom";
import { categories } from "../../../config/categories"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import cls from '../Shop/Shop.module.css'


function Shop() {
    return (
      <>
        <Header />
        <main>
          <section>
            <h3>Категории</h3>
            <div className={cls.categories}>
              {categories.map((item, index) => (
                <Link to={`${item.id}`}>
                  <div className={cls.categories__item}>
                    <h5>{item.name}</h5>
                  </div>
                </Link> 
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
  
  export default Shop;