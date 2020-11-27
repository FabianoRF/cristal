import React from 'react';
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Register: React.FC =() => {
    return(
        <>
            <Header />

            <main>

                <div className="mensage">
                    <h1>Cadastre-se:</h1>

                    <h3>Por favor preencha alguns dados sobre você, será bem rapidinho! </h3>
                </div>

                <div className="campin">
        
                    <div id="email">
                        <label>Email</label>
                        <input type="text" id="email"/>
                    </div>

                    <div id="cpf">
                        <label>CPF</label>
                        <input type="text" id="cpf"/>
                    </div>

                    <div id="name">
                        <label>Nome Completo</label>
                        <input type="text" id="name"/>
                    </div>

                    <div id="date">
                        <label>Data de nascimento</label>
                        <input type="date" id="date" placeholder="DD/MM/AAAA" />
                    </div>

                    <div id="senha">
                        <label>Senha(minímo de 6 caracteres)</label>
                        <input type="text" id="senha"/>
                    </div>

                    <div id="conf_senha">
                        <label>Confirmar senha</label>
                        <input type="text" id="conf_senha" />
                    </div>
                    
                </div>
        
                <div className="button">
                    <a href=""><button>Continuar</button></a>
                </div>

            </main>

            <Footer />
        </>
    )
}

export default Register;