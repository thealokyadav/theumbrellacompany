import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import './ProductShowcase.css';

const ProductShowcase = ({ limit = 8, showFilters = true }) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const calculateDiscount = (original, current) => {
        return Math.round(((original - current) / original) * 100);
    };

    return (
        <section className="products section">
            <div className="container">
                <div className="section-title">
                    <h2>Our <span className="text-gold">Collection</span></h2>
                    <p>Explore our handcrafted range of premium umbrellas, each designed to make a statement.</p>
                </div>

                {showFilters && (
                    <div className="products__filters">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`products__filter ${activeCategory === category.id ? 'products__filter--active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                )}

                <div className="products__grid">
                    {displayProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="product-card card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="product-card__image-wrapper">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-card__image"
                                    loading="lazy"
                                />
                                {product.badge && (
                                    <span className="product-card__badge">{product.badge}</span>
                                )}
                                <div className="product-card__overlay">
                                    <Link to={`/products`} className="btn btn-primary btn--small">
                                        View Details
                                    </Link>
                                </div>
                            </div>

                            <div className="product-card__content">
                                <span className="product-card__category">
                                    {categories.find(c => c.id === product.category)?.name || product.category}
                                </span>
                                <h3 className="product-card__title">{product.name}</h3>
                                <p className="product-card__description">{product.description}</p>

                                <div className="product-card__features">
                                    {product.features.slice(0, 2).map((feature, idx) => (
                                        <span key={idx} className="product-card__feature">
                                            <span className="product-card__feature-icon">✓</span>
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="product-card__pricing">
                                    <span className="product-card__price">{formatPrice(product.price)}</span>
                                    {product.originalPrice && (
                                        <>
                                            <span className="product-card__original-price">
                                                {formatPrice(product.originalPrice)}
                                            </span>
                                            <span className="product-card__discount">
                                                {calculateDiscount(product.originalPrice, product.price)}% OFF
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {limit && products.length > limit && (
                    <div className="products__cta">
                        <Link to="/products" className="btn btn-secondary">
                            View All Products
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductShowcase;
