import React, {useState} from "react";
import Firebase from "./Firebase";
import { Link } from "react-router-dom";

function LogIn({history}) {
  const [error, setError] = useState(null);

  const handleSignUp = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      Firebase.auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(user => {
          history.push("/");
          console.log(user);
        }).catch(e => {
          setError(e);

        })
    } catch (error) {
      setError(error);
    }
  };
  return (
    <section className="login">
      <h1>Login</h1>
      <div className="header">
        <Link to="/signup" className="link">Create Account</Link>
      </div>
      {error ? <div className="error">{error.message}</div> : null}
      <form onSubmit={handleSignUp} className="login-form">
        <div className="input2 input">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="input1 input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="button">
            <i className="fa fa-eye" />
          </button>
        </div>
        <button type="submit" className="primaryBtn">Login</button>
        <button type="button" className="secondaryBtn">I Forgot E-mail or Password</button>
      </form>
    </section>
  );
}

export default LogIn;