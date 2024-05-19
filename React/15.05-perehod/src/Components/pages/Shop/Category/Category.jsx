import { Link, Outlet, useParams } from "react-router-dom";
import { categories } from "../../../../config/categories"
import Footer from "../../../Footer/Footer"
import Header from "../../../Header/Header"
import cls from '../Shop/Shop.module.css'


function Category() {

  const {pageId} = useParams()
  const formattedData = shopList.filter(item => parseInt(pageId) === item.id)

return (
  <>
    <Header />
    <main>
      <section>
        <h3>Категории</h3>
        <div className={cls.categories}>
          {formattedData[0].data.map((item, index) => (
            <Link to={`${index}`} key={index}>
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
export default Category;