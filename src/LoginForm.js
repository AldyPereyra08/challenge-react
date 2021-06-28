import React from 'react';
import './LoginForm.css';
import '../src/img/img_avatar2.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function LoginForm(){
    return (
        <>
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label"/>Email address
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label"/>Password
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </>
      );
}

export default LoginForm;