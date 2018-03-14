import React, { Component } from 'react'
import Header from './components/global/Header'
import Footer from './components/global/Footer'

class App extends Component {
    render() {
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
