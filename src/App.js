import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form"
function App() {

  let [fullName, setFullName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [confirmPassword, setConfirmPassword] = useState("")

  let [userError, setUserError] = useState(false)
  let [emailError, setEmailError] = useState(false)
  let [passwordError, setPasswordError] = useState(false)
  let [confirmPasswordError, setConfirmPasswordError] = useState(false)
  let [allErrors, setAllerrors] = useState(false)


  const form = document.getElementById("signupForm")
  //prevent the default behaviour of button
  function handleSubmit(e) {
    e.preventDefault()
    if((fullName!=="") || (email!=="") || (password!=="") || (confirmPassword!=="")){
  setAllerrors(true)
  // e.target.reset()
    }
    else{
  setAllerrors(false)

    }
  }

  // fullname validation
  function fullNameError(e) {
    let fullName = e.target.value

    if (fullName.length < 3) {
      setUserError(true)
    }    
    else {
      setUserError(false)
    }
    setFullName(fullName)

  }

  //email validation
  function emailIdError(e) {
    let email = e.target.value

    console.log(email);
    if ((email.length < 6) || (!email.includes("@")) || (!email.includes("."))) {
      setEmailError(true);
        }
    else {
      setEmailError(false);
    }
    setEmail(email)

  }


  //password Validation
  function passcodeError(e){
    let password = e.target.value

    if((password.length < 8)){
      setPasswordError(true)
    }
    else{
      setPasswordError(false)
    }
    setPassword(password)

  }


  //confirm password validation
  function confirmPassCodeError(e){
    let pInput = document.getElementById("formBasicPassword")

    let p = pInput.value
    let confirmPassword = e.target.value
    if(confirmPassword !== p){
      setConfirmPasswordError(true)
    }
    else{
      setConfirmPasswordError(false)
    }
    setConfirmPassword(confirmPassword)

  }







  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Form className="form" onSubmit={handleSubmit} controlid="signupForm">
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label></Form.Label>
          <Form.Control type="name" placeholder="Full name" onChange={fullNameError} />
          {userError ? <p>Must be morethan 3 characters</p> : ""}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={emailIdError} />
          {emailError ? <p>Invalid email adress</p> : ""}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={passcodeError}/>
          {passwordError ? <p>Password must not be lessthan 8 characters</p> : ""}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label></Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" onChange={confirmPassCodeError}/>
          {confirmPasswordError ? <p>Confirm password and password must match</p> : ""}
        </Form.Group>
        <div className="button">
          <Button variant="light" type="submit">
            Signup
          </Button>
          <div>
          {allErrors ?<p style={{color:"green"}}>Successfully signed Up!</p>: <p>All fields are mandatory</p>}
          </div>
        </div>

      </Form>


    </div>
  );
}

export default App;
