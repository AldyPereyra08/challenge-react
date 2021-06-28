import React from 'react';


export const LoginPage = ({customerSignUp, handleChange, handleSubmit}) => {
    return(
        <>
        <h2>Login</h2>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-6">
                <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" aria-describedby="emailHelp" value={customerSignUp.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" value={customerSignUp.password} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
                </div>
            </div>
        </div>
        </>
    );
}
