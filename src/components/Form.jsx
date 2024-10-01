import React from 'react'
import Input from '../common-components/Input';

class Form extends React.Component {
    render() {
        return (
            <aside>
                <h2>Insira novo leads</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia rem magnam, neque tenetur fugiat, deserunt eligendi eius quibusdam nisi dolorem totam officia tempore corporis, amet ab quod placeat asperiores dignissimos.
                </p>
                <form>
                    <Input
                        id="nome"
                        label="Nome Completo:"
                        placeholder="Ex: Thais Santos" />
                    <Input
                        id="email"
                        label="E-mail:"
                        placeholder="Ex: thais@gmail.com" />
                    <Input
                        id="celular"
                        label="Celular:"
                        placeholder="Ex: 11 92662-2447" />
                    <button>Cadastrar</button>
                </form>
            </aside>
        );
    }
}

export default Form