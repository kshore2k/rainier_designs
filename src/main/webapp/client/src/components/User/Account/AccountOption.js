import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditAccountForm from './EditAccountForm';
import './styles/AccountOption.css'

class AccountOption extends Component {
    
    render() {
        let option = this.props.option;
        if (option === "completed orders") {
            return (
                <div className="container-options completed-orders">
                    <h1>{`YOUR ${option.toUpperCase()}`}</h1>
                    <p>You don't have any completed orders with us. When you do, they will appear on this page.</p>
                </div>
            );
        } else if (option === "account details") {
            return (
                <div className="container-options account-details">
                    <h1>{`YOUR ${option.toUpperCase()}`}</h1>
                    <p>Make changes to your account details below. Click 'Update My Details' when you're done.</p>
                    <EditAccountForm />
                </div>
            );
        } else {
            return (
                <div className="container-options">
                    <p>From this page you can view your <Link className="option-link" to={`${this.props.match.url}/orders`}>orders</Link> and 
                        update your <Link className="option-link" to={`${this.props.match.url}/edit`}>account details</Link>. 
                        Choose an option from the menu.
                    </p>
                </div>
            );
        }
        
    };
};

export default AccountOption;