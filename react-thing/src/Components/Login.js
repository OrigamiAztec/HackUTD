import React from 'react'
class Login extends React.Component {
    render () {
        return <div className='message-box'>
            <div className="inputform">
                <p id="mid_sect">Add past flights | Get new recommendations | Find new events 🎉</p>
                <form action="" method="post">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value=""/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value=""/>
                    {/*<br>*/}
                        <input type="submit" className="submit_button" value="Sign up"/>
                    {/*</br>*/}
                </form>
            </div>
        </div>
    }
}

export default Login;