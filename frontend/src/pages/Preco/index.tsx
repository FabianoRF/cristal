import React from 'react';
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Price: React.FC =() =>{
    return(
        <>
            <Header />
            <main>
                <div className="cupom">
                    <h1 id="titulo_1">Endereço da entrega:</h1>
                    <section id="info">
                        <h2>João da Silva</h2>
                        <p> 37980-000 </p>
                        <p> Rua Exemplar do Exemplo, 100, casa</p>
                        <p> Centro</p>
                        <p> Cássia, MG</p>

                        <a href="../pages/preco.html">Alterar Endereço</a>

                    </section>

                    <section id="barra"></section>

                    <h1 id="titulo_2">Resumo do Pedido:</h1>
                    
                    <section id="preco">
                        <h2>Produtos</h2>

                        <div id="num_produ">
                            <p id="text_1">2 Produtos</p>
                            <p id="text_2">R$ 230,90</p>
                        </div>

                        <div id="frete">
                            <p id="text_3">Frete</p>
                            <p id="text_4">R$ 15,00</p>
                        </div>

                        <div id="total">
                            <p id="text_5">Total</p>
                            <p id="text_6">R$ 245,90</p>
                        </div>

                        <p id="divisor">Em até 3x de 81,96</p>

                    </section>
                </div>

                <div className="buy-button-container">
                    <button /*onClick={handleClickButtonBuy()} Aqui precisa da atenção para a chamada da função em JS*/ id="button-finally-buy">Finalizar compra</button>
                </div>

            </main>

            <Footer />
        </>
    )
}

export default Price;