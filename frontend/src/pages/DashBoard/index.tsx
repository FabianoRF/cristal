import React from 'react';
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import productImg from '../../assets/product1.png';

const DashBoard: React.FC =() => {
  return (
    <>
      <Header />

        <section className="banner-container">
            <span className="spot-title">Cristal moda feminina</span>
            <span className="spot-title">A loja que acredita no potencial das mulheres.</span>
        </section>

        <main className="product-catalog">

            <a href="pages/productDetails.html">
                <div className="product-container">
                    <img className="p-image" src={productImg} alt="Produto"/>

                    <div className="product-text">
                        <span className="p-title">Conjunto Short e Cropped</span>
                        <span className="p-parcels">4x de 12,30</span>
                        <span className="p-price">R$ 46,90</span>
                    </div>
                </div>
            </a>

            <a href="pages/productDetails.html">
                <div className="product-container">
                    <img className="p-image" src={productImg} alt="Produto"/>

                    <div className="product-text">
                        <span className="p-title">Conjunto Short e Cropped</span>
                        <span className="p-parcels">4x de 12,30</span>
                        <span className="p-price">R$ 46,90</span>
                    </div>
                </div>
            </a>

            <a href="pages/productDetails.html">
                <div className="product-container">
                    <img className="p-image" src={productImg} alt="Produto"/>

                    <div className="product-text">
                        <span className="p-title">Conjunto Short e Cropped</span>
                        <span className="p-parcels">4x de 12,30</span>
                        <span className="p-price">R$ 46,90</span>
                    </div>
                </div>
            </a>

            <a href="pages/productDetails.html">
                <div className="product-container">
                    <img className="p-image" src={productImg} alt="Produto"/>

                    <div className="product-text">
                        <span className="p-title">Conjunto Short e Cropped</span>
                        <span className="p-parcels">4x de 12,30</span>
                        <span className="p-price">R$ 46,90</span>
                    </div>
                </div>
            </a>

            <a href="pages/productDetails.html">
                <div className="product-container">
                    <img className="p-image" src={productImg} alt="Produto"/>

                    <div className="product-text">
                        <span className="p-title">Conjunto Short e Cropped</span>
                        <span className="p-parcels">4x de 12,30</span>
                        <span className="p-price">R$ 46,90</span>
                    </div>
                </div>
            </a>

            <a href="pages/productDetails.html">
                <div className="product-container">
                    <img className="p-image" src={productImg} alt="Produto"/>

                    <div className="product-text">
                        <span className="p-title">Conjunto Short e Cropped</span>
                        <span className="p-parcels">4x de 12,30</span>
                        <span className="p-price">R$ 46,90</span>
                    </div>
                </div>
            </a>

            <a href="pages/productDetails.html">
                <div className="product-container">
                    <img className="p-image" src={productImg} alt="Produto"/>

                    <div className="product-text">
                        <span className="p-title">Conjunto Short e Cropped</span>
                        <span className="p-parcels">4x de 12,30</span>
                        <span className="p-price">R$ 46,90</span>
                    </div>
                </div>
            </a>

            <a href="pages/productDetails.html">
                <div className="product-container">
                    <img className="p-image" src={productImg} alt="Produto"/>

                    <div className="product-text">
                        <span className="p-title">Conjunto Short e Cropped</span>
                        <span className="p-parcels">4x de 12,30</span>
                        <span className="p-price">R$ 46,90</span>
                    </div>
                </div>
            </a>

        </main>
      <Footer />
    </>
  )
}

export default DashBoard;
