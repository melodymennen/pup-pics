import React, { Component } from 'react'
import Header from './components/global/Header'
import Footer from './components/global/Footer'

class App extends Component {
    state = {
        user: null,
        view: 'home'
    }

    register = () => {
        const username = this.refs.username.value
        const password = this.refs.password.value

        axios.post('/register', {username, password}).then(response => {
            this.setState({ user: response.data })
        })
    }
      
    login = () => {
        const username = this.refs.username.value
        const password = this.refs.password.value

        axios.post('/login', {username, password}).then(response => {
            this.setState({ user: response.data })
        })
    }
    
    logout = () => {
        axios.post('/logout').then(response => {
            this.setState({ user: null })
        })
    }

    render() {
        const { user } = this.state
        const inputFields = <div>Username: <input ref="username" /> <br/> Password: <input type="password" ref="password" /> </div>
        
        return (
            <div className="App">
                <Header />
                {/* {big ternary here} */}
                <Footer />
            </div>
        )
    }
}

export default App
