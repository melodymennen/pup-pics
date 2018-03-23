import React, { Component } from 'react'
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import Account from './components/Account/Account'
import AddPhoto from './components/Photos/AddPhoto'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import axios from 'axios'

class App extends Component {
    state = {
        user: null,
        view: 'home',
        currentProfile: null
    }

    componentDidMount(){
        this.getUser()
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
                this.setState({ user: response.data.user })
            }
        })
    }

    changeView = (input) => {
        this.setState({view: input})
    }

    changeProfile = (input) => {
        this.setState({
            currentProfile: input, 
            view: 'profile'
        })
    }

    render() {
        const { user, view, currentProfile } = this.state
        const inputFields = <div>Username: <input ref="username" /> <br/> Password: <input type="password" ref="password" /> </div>

        return (
            <div className="App">
                <Header user={user} changeView={this.changeView}/>
                {`${this.state.view} - user: ${user}`}
                {
                view === 'home' ? <Home changeView={this.changeView}/> : 
                view === 'login' ? <Login login={this.login} register={this.register} inputFields={inputFields} /> : 
                view === 'account' ? <Account user={user} changeView={this.changeView} changeProfile={this.changeProfile}/> : 
                view === 'profile' ? <Profile changeView={this.changeView} profile={currentProfile}/> :
                view === 'add photo' ? <AddPhoto changeView={this.changeView} profile={currentProfile}/> : 
                view === 'view' ? <component /> : 
                view === 'view' ? <component /> : null}
                <Footer />
            </div>
        )
    }
}

export default App
