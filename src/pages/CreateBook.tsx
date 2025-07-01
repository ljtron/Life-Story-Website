import React from 'react';
import { Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const createBook = () => {
    return(
        <div className="font-sans text-gray-800 bg-cream min-h-screen">
            <Header />
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
            <Footer />
        </div>
    )
}

export default createBook;