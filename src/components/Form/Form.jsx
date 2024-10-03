import './Form.css';
import React from 'react'
import Input from '../../common-components/Input';

class Form extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: '',
            email:'',
            numPhone:''
        }
    }

    handleChange = (event) => {
        const {id, value} = event.target;
        this.setState({
            [id]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onHandleSubmit(this.state);
        this.setState({
            name: '',
            email:'',
            numPhone:''
        });
    }

    render() {
        const {name, email, numPhone } = this.state;
        return (
            <aside>
                <h2>Insira novo leads</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <form>
                    <div>
                        <label htmlFor="name">Nome Completo: </label>
                        <input type="text" id="name" placeholder="Ex: Thais Santos" onChange={this.handleChange} value={name}/>
                    </div>
                    <div>
                        <label htmlFor="email">E-Mail: </label>
                        <input type="text" id="email" placeholder="Ex: thais@gmail.com" onChange={this.handleChange} value={email}/>
                    </div>
                    <div>
                        <label htmlFor="numPhone">Celular: </label>
                        <input type="text" id="numPhone" placeholder="Ex: 11 92662-2447" onChange={this.handleChange} value={numPhone}/>
                    </div>
                    <button onClick={this.handleSubmit}>Cadastrar</button>
                </form>
            </aside>
        );
    }
}

export default Form