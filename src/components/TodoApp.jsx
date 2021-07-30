import React, {Component} from 'react';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
                <WelcomeComponent/>
            </div>
        );
    }
}


class WelcomeComponent extends Component {

    render() {
        return(
            <div>Welcome !!!</div>
        );
    }

}

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'calle',
            password: '',
            showSuccessMessage: false,
            hasLoginFailed: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        //console.log(this.state)
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked() {
        if (this.state.username === 'calle' && this.state.password === 'abc123') {
            console.log('success')
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        } else {
            console.log('failed')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        console.log(this.state)
    }

    render() {
        return (
            <div>
            {this.state.hasLoginFailed && <div>Invalid credentials</div>}
            {this.state.showSuccessMessage && <div>Login successful</div>} 


                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                  
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}

// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid credentials</div>
//     }
//     return null;
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login successful</div>
//     }
//     return null;
// }

export default TodoApp;