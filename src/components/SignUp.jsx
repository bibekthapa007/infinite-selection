import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Firebase from "./Firebase";
import { firestore } from "firebase";
import "./Form.css";

function SignUp({ history }) {
  const [error, setError] = useState(null);
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password, firstName, lastName } = event.target.elements;
      console.log(email.value);
      try {
        await Firebase.auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(res => {
            return firestore()
              .collection("users")
              .doc(res.user.uid)
              .set({
                firstName: firstName.value,
                lastName: lastName.value
              });
          });
        history.push("/");
      } catch (error) {
        console.log(error);
        setError(error);
      }
    },
    [history]
  );
  return (
    <section className="login">
      <h1>Create Account</h1>
      <div className="header">
        <Link to="/login" className="link">
          I Already Have an Account
        </Link>
      </div>
      {error ? <div className="error">{error.message}</div> : null}

      <form onSubmit={handleSignUp} className="login-form">
        <div className="input2 input">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="input2 input">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="input2 input">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="input2 input">
          <input type="number" name="phone" id="phone" placeholder="Phone" />
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
        <div className="input1 input">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
          <button type="button">
            <i className="fa fa-eye" />
          </button>
        </div>
        <div className="term">
          Creating an account means you agree to our Terms and Privacy Policy
        </div>
        <button type="submit" className="primaryBtn">
          Continue
        </button>
      </form>
    </section>
  );
}

export default SignUp;
