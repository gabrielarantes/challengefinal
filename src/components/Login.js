import React, {Component} from 'react'

export default class Login extends Component{
    render(){
        return(
            <section id="login">
                <div className="container">
                    <form className="row nomargin">
                        <h1>User Area</h1>
                        <div className="col-md-12 form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" required id="user" name="user" />
                        </div>

                        <div className="col-md-12 form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" required id="pass" name="pass" />
                        </div>

                        <div className="col-md-12 form-group">
                            <button type="submit" className="btn btn-info btn-lg">Login</button>
                        </div>

                    </form>
                </div>
            </section>
        )
    }
}