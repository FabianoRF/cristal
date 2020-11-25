import React from 'react';
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Login: React.FC =() => {
    return (
        <>
            <Header />

                <main className="login-screen">

                    <div className="primeira_parte">
                        <h2 className="indentifica">Identificação:</h2>
                    </div>

                    <div className="segunda_parte">
                        <section className="cadastrar">
                            <h2>Quero me cadastrar:</h2>

                            <form action="" className="cad">
                                <h1>Digite seu email:</h1>
                                <input type="text" className="cad_input"/>
                                <button className="cad_button" type="submit">Cadastrar</button>
                            </form>

                        </section>
            
                        <section className="entrar">
                            <h2>Já sou cliente:</h2>

                            <form action="" className="ent">
                                <h1>Digite seu email:</h1>
                                <input type="text" className="ent_input_email"/>
                                <h1 className="text_senha">Senha:</h1>
                                <input type="text" className="ent_input_senha"/>
                                <button className="cad_button" type="submit">Entrar</button>
                            </form>

                            <a href=""><h3>Esqueci meu email ou senha</h3></a>
                        </section>
                    </div>
                </main>
            <Footer />
        </>
    )
}

export default Login;