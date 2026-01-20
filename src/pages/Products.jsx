import ProductShowcase from '../components/ProductShowcase';
import './Products.css';

const Products = () => {
    return (
        <main className="products-page">
            <div className="products-page__hero">
                <div className="container">
                    <h1 className="products-page__title">
                        Our <span className="text-gold">Collection</span>
                    </h1>
                    <p className="products-page__subtitle">
                        Explore our complete range of handcrafted premium umbrellas.
                    </p>
                </div>
            </div>

            <ProductShowcase limit={0} showFilters={true} />
        </main>
    );
};

export default Products;
