import './MainDiv.css';
import React from 'react';
import Form from '../Form/Form';
import TableLeads from '../Table/TableLeads';

class Main extends React.Component {
    constructor (props) {
        super(props);
        let leads = props.leads;

        this.state = {leads};
    };

    onHandleSubmit = (lead) => {
        this.setState({
            leads: [...this.state.leads, lead]
        });
    }

    render() {
        return (
            <main>
                <Form onHandleSubmit={this.onHandleSubmit}/>
                <TableLeads leads={this.state.leads} />
            </main>
        );
    }
}

export default Main;