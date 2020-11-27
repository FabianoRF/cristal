import React from 'react';
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import product2mini from '../../assets/product2-mini.png'

const Bag: React.FC =() => {
    return(
        <>
            <Header />

            <main>
                <article className="main-grid">
                    <section className="purchased-products">
                        <div className="product-unity">
                            <img src={product2mini} alt="" />
                
                            <div>
                                <h2>Sapatilha Michele Bege</h2>
                                <span className="price">R$ 99,90</span>
                            </div>
                
                            <div>
                                <label htmlFor="">Quantidade:</label>
                                <input type="number" min='0' max="10" id="qtd-input" value="1" />
                            </div>
                        </div>
                        
                        <div className="product-unity">
                            <img src={product2mini} alt="" />
                
                            <div>
                                <h2>Sapatilha Michele Bege</h2>
                                <span className="price">R$ 79,90</span>
                            </div>
                
                            <div>
                                <label htmlFor="qtd-input">Quantidade:</label>
                                <input type="number" min='0' max="10" id="qtd-input" value="1"/>
                            </div>
                        </div>
                    </section>
            
                    <section className="final-price-container">
                        <div>
                            <h2>Calcular frete:</h2>
                            <form action="" className="calculate-cep">
                            
                            <input type="text" name="" id="input-cep" placeholder="Digite seu cep:"/>
                            <button className="btn-cep">Calcular</button>
                            </form>
                        </div>
                
                        <div className="sum-prices">
                            <h3>Valor do Frete: </h3>
                            <span className="price">R$ 20,00</span>
                            <h3>2 produtos: </h3>
                            <span className="price">R$ 179,90</span>
                
                            <h3>Total: </h3>
                            <span className="price">R$ 199,90</span>
                        </div>
                        
                        <a href="preco.html">
                            <button className="btn-buy">Comprar</button>
                        </a>
                    </section>
                </article>
            </main>

            <Footer />
        </>
    )
}

export default Bag;