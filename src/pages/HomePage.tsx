import React from 'react';
import { Check } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
    return(
        <div className="font-sans text-gray-800 bg-cream min-h-screen">
            <Header />
            <main>
                <Hero />
                <HowItWorks />
                <Features />
                <Testimonials />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;