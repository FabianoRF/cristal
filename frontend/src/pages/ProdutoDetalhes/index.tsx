import React from 'react';
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product2mini from '../../assets/product2-mini.png'

const ProductDetails: React.FC =() => {
    return(
        <>
            <Header />

            <main>
                <section className="product-contrast">
                    <div className="picture-container">
                        <div className="small-picture">
                            <img src={product2mini} alt="Fotos"/>            
                            <img src={product2mini} alt="Fotos"/>            
                            <img src={product2mini} alt="Fotos"/>            
                            <img src={product2mini} alt="Fotos"/>            
                        </div>

                        <div className="big-picture">
                            <img src={product2} alt="Foto"/>
                        </div>
                    </div>

                    <div className="product-information">
                        <div>
                            <h1>Sapatilha Michele Bege</h1>
                            <p>Sapato feminino, na cor bege, destaque para seu laço, com conforto incrivel para os pés femininos.</p>
                        </div>
                    <div/>

                    <div>
                        <label>Selecione o Tamanho:</label>
                        <br/><br/>
                        <form action="" className="check-size-container">
                            <div className="check-size">
                                <label htmlFor="check1">34: </label>
                                <input type="checkbox" name="" id="check1"/>
                            </div>
                            <div className="check-size">
                                <label htmlFor="check1">35: </label>
                                <input type="checkbox" name="" id="check1"/>
                            </div>
                            <div className="check-size">
                                <label htmlFor="check1">36: </label>
                                <input type="checkbox" name="" id="check1"/>
                            </div>
                            <div className="check-size">
                                <label htmlFor="check1">37: </label>
                                <input type="checkbox" name="" id="check1"/>
                            </div>
                            <div className="check-size">
                                <label htmlFor="check1">38: </label>
                                <input type="checkbox" name="" id="check1"/>
                            </div>
                        </form>
                    </div>

                    <div className="prices">
                        <span className="product-parcels">Até 4x de R$ 20.99</span>
                        <span className="product-price">R$ 99,90</span>
                    </div>

                    <a href="bag.html"><button className="buy-button">Comprar</button></a>

                </div>
                </section>

                <section className="product-description">
                    <h1>Detalhes do Produto:</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat massa, aliquam sit amet maximus sed, condimentum sit amet odio. Vivamus convallis quam vel tempus sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu tempor enim. Maecenas consectetur quam a ultricies cursus. Quisque id sollicitudin est, et sagittis tortor. Morbi eleifend nisl quis velit vehicula, a faucibus neque scelerisque. Praesent feugiat scelerisque neque vitae ultrices. Sed dignissim turpis orci, in mattis turpis rutrum id. Integer bibendum lectus metus, sed volutpat ante congue a.</p>
                </section>
                
                <section className="related-products">
                    <h1>Produtos Relacionados:</h1>
                    <div className="product-catalog">

                        <a href="productDetails.html">
                            <div className="product-container">
                                <img className="p-image" src={product1} alt="Produto"/>

                                <div className="product-text">
                                    <span className="p-title">Conjunto Short e Cropped</span>
                                    <span className="p-parcels">4x de 12,30</span>
                                    <span className="p-price">R$ 46,90</span>
                                </div>
                            </div>
                        </a>
                        <a href="productDetails.html">
                            <div className="product-container">
                                <img className="p-image" src={product1} alt="Produto"/>

                                <div className="product-text">
                                    <span className="p-title">Conjunto Short e Cropped</span>
                                    <span className="p-parcels">4x de 12,30</span>
                                    <span className="p-price">R$ 46,90</span>
                                </div>
                            </div>
                        </a>
                        <a href="productDetails.html">
                            <div className="product-container">
                                <img className="p-image" src={product1} alt="Produto"/>

                                <div className="product-text">
                                    <span className="p-title">Conjunto Short e Cropped</span>
                                    <span className="p-parcels">4x de 12,30</span>
                                    <span className="p-price">R$ 46,90</span>
                                </div>
                            </div>
                        </a>
                        <a href="productDetails.html">
                            <div className="product-container">
                                <img className="p-image" src={product1} alt="Produto"/>

                                <div className="product-text">
                                    <span className="p-title">Conjunto Short e Cropped</span>
                                    <span className="p-parcels">4x de 12,30</span>
                                    <span className="p-price">R$ 46,90</span>
                                </div>
                            </div>
                        </a>
                    </div>    
                </section>
            </main>

            <Footer />
        </>
    )
}

export default ProductDetails;