import React, { Component } from 'react'
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import Account from './components/Account/Account'
import NewProfile from './components/Profile/NewProfile'
import Login from './components/Login/Login'
import axios from 'axios'

class App extends Component {
    state = {
        user: 'a',
        view: 'home'
    }

    register = () => {
        const username = this.refs.username.value
        const password = this.refs.password.value

        axios.post('/register', {username, password}).then(response => {
            this.setState({ user: response.data.user.user, view: 'home' })
        })
    }
      
    login = () => {
        const username = this.refs.username.value
        const password = this.refs.password.value

        axios.post('/login', {username, password}).then(response => {
            this.setState({ user: response.data.user.user, view: 'home' })
        })
    }
    
    logout = () => {
        axios.post('/logout').then(response => {
            this.setState({ user: null, view: 'home' })
        })
    }
    
    getUser = () => {
        axios.get('/user-data').then(response => {
            if (response.data) {
                console.log(response.data)
                console.log(response.data.user.user)
                this.setState({ user: response.data })
            }
        })
    }

    changeView = (input) => {
        this.setState({view: input})
    }

    render() {
        const { user, view } = this.state
        const inputFields = <div>Username: <input ref="username" /> <br/> Password: <input type="password" ref="password" /> </div>

        return (
            <div className="App">
                <Header user={user} changeView={this.changeView}/>
                {`${this.state.view}  user: ${user}`}
                {/* <Account user={user} /> */}
                <NewProfile user={user} />
                {/* {view === 'home' ? <Home /> : 
                view === 'login' ? <Login login={this.login} register={this.register} inputFields={inputFields} /> : 
                view === 'account' ? <Account user={user}/> : 
                view === 'view' ? <component /> : 
                view === 'view' ? <component /> : 
                view === 'view' ? <component /> : 
                view === 'view' ? <component /> : null} */}
                <Footer />
            </div>
        )
    }
}

export default App
