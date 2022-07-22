import React, { Component } from 'react';
import { FormContainer, MainContainer } from './Style';


const initialState = {
    sender_name: '',
    message: '',
    nameError: '',
    messageError: '',
    successMessage: ''
}

class Form extends Component {

    state= initialState;

    handleChange = (e) => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({ [e.target.name]: isCheckbox ? e.target.checked : e.target.value});
    };

    validate = (e) => {
        let nameError = '';
        let messageError = '';

        if (!this.state.sender_name) {
            nameError = "Name cann't be blank.";
        }

        if (!this.state.message) {
            messageError = 'Please write your message.'
        }

        if (nameError || messageError) {
            this.setState({nameError, messageError});
            return false;
        }
        return true;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        const { sender_name, message } = this.state;
        if (isValid) {
            this.setState(initialState);
            this.setState({successMessage: 'Your message has sent successfully.'});

            // after validation thanks page must be opened
            // successMessage is only for test which will be removed later
        };
    };

    render() {
        return (
            <MainContainer>
                <FormContainer>
                    <h1>My Form</h1>
                    <div className='form-wrap'>
                        <form>
                            <div className='name-wrap'>
                                <label>Name:</label>
                                <input 
                                    name="sender_name" 
                                    placeholder="Name*"
                                    value={this.state.sender_name}
                                    onChange={this.handleChange}
                                />
                                <div style={{fontSize: ".8rem", color: "red"}}>
                                    {this.state.nameError}
                                </div>
                            </div>
                            <div className='message-wrap'>
                                <label>Message:</label>
                                <textarea 
                                    name="message" 
                                    placeholder="Message*" 
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                />
                                <div style={{fontSize: ".8rem", color: "red"}}>
                                            {this.state.messageError}
                                    </div>
                            </div>
                            <div className='submit-btn-wrap'>
                                <button
                                    type="submit"
                                    onClick={this.onSubmit}
                                >
                                    Submit
                                </button>
                                <div style={{marginTop: '2rem', fontSize: '1rem', color: '#3399FF'}}>
                                    {this.state.successMessage}
                                </div>
                            </div>
                        </form>
                    </div>
                </FormContainer>            
            </MainContainer>
        );
    }
}

export default Form;
