import Header from '../components/Header';
import Footer from '../components/Footer';

const createBook = () => {
    return(
        <div className="font-sans text-gray-800 bg-cream min-h-screen">
            <Header />
            <main>
                <section id="testimonials" className="py-16 md:py-24 bg-white">
                    <div>
                        book entry #1
                    </div>
                    <br></br>
                    <div>
                        book entry #2
                    </div>
                    <br></br>
                    <div>
                        book entry #3
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default createBook;