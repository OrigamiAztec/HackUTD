import React from 'react'
class Header extends React.Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img className="logo" src="https://www.hackutd.co/img/logo-horizontal-coral.png"
                         width="auto"
                         height="80vh"
                         alt="HackUTD Logo"/>
                    <img className="logo"
                         src="http://www.catman.global/wp-content/uploads/2018/10/american-airlines-logo.png"
                         width="auto"
                         height="110px"/>
                    <img className="logo" src="https://logos-download.com/wp-content/uploads/2016/11/ESRI_logo_logotype.png"
                         width="auto"
                         height="110px"/>
                </header>
            </div>
        );
    }
}

export default Header;