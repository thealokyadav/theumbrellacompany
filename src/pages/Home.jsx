import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <main className="home">
            <Hero />
            <ProductShowcase limit={8} showFilters={false} />
            <AboutSection />
            <Testimonials />
        </main>
    );
};

export default Home;
