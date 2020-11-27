import React from 'react';
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const RegistrationAddress: React.FC =() => {
    return(
        <>
            <Header />

            <main>
                <div id="titulo">
                    <h1>Endereço de entrega</h1>
                    <p>Por favor preencha alguns dados sobre você, será bem rapidinho!</p>
                </div>

                <div className="campos">
                    <div id="nome">
                        <label htmlFor=""> Nome do destinatario</label>
                        <input type="text" id="name"/>
                    </div>

                    <div id="cep">
                        <label htmlFor=""> CEP</label>
                        <input type="text" id="name"/>
                    </div>

                    <div id="rua">
                        <div id="camp_1">
                            <label htmlFor=""> Rua</label>
                            <input type="text" id="name"/>
                        </div>
                        
                        <div id="camp_2">
                            <label htmlFor=""> Número</label>
                            <input type="text" id="name"/>
                        </div>
                    
                    </div>

                    <div id="bairro">
                        <label htmlFor=""> Bairro</label>
                        <input type="text" id="name"/>

                    </div>

                    <div id="complemento">
                        <label htmlFor="">Complemento</label>
                        <input type="text" id="name"/>
                    </div>

                    <div id="cidade">
                        <div id="cid">
                            <label htmlFor=""> Cidade</label>
                            <input type="text" id="name"/>
                        </div>

                        <div id="est">
                            <label htmlFor="">Estado</label>
                            <input type="text" id="name"/>
                        </div>                
                    </div>            
                    
                    <div className="button">
                        <a href=""><button>Continuar</button></a> 
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default RegistrationAddress;