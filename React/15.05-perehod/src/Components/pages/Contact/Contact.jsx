import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import { Link } from "react-router-dom";


function Contact(props) {
    return (
        <>
            <Header />
            <main>
                <section>Contact</section>
                <ul>
                    <li>
                        <Link to={''}>instagram</Link>
                    </li>
                    <li>
                        <Link to={''}>facebook</Link>
                    </li>
                    <li>
                        <Link to={''}>telegram</Link>
                        </li>
                    <li>
                        <Link to={'/Shop'}>Products</Link>
                        </li>
                    <li>
                        <Link to={'/'}>Back on page</Link>
                        </li>
                </ul>
            </main>
            <Footer />
        </>
    )
}

export default Contact