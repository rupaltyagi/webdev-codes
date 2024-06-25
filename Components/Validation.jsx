import { useState } from "react";

function Validation(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleEmailChange(e){
    setEmail(e.target.value);
  }
  function handlePasswordChange(e){
    setPassword(e.target.value);
  }
  function check(){
    let formErrors= {};
    if(!name.trim()){
      formErrors.name = "Name required";
    }
    if(!email.trim()){
      formErrors.email = "Email required";
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
      formErrors.email = "invalid email";
    }
    if(!password){
      formErrors.password = "Password required";
    }
    else if(password.length<6){
      formErrors.password="Password too short"; 
    }
    return formErrors;
  }

  function validate(e){
    e.preventDefault();
    const formErrors = check();
    if(Object.keys(formErrors).length>0){
      setErrors(formErrors);
    }
    else{
      alert(`Name: ${name} Email: ${email}`);
      setName('');
      setEmail('');
      setPassword('');
    }
  }
  return (<div>
    <form onSubmit={validate}>
      <label>Name: </label>
      <input type="text" value={name} onChange={handleNameChange}/>
      {errors.name && <span>{errors.name}</span>}<br/>
      <label>Email: </label>
      <input type="email" value={email} onChange={handleEmailChange}/>
      {errors.email && <span>{errors.email}</span>}<br/>
      <label>Password: </label>
      <input type="password" value={password} onChange={handlePasswordChange}/>
      {errors.password && <span>{errors.password}</span>}<br/>
      <button type="submit">Submit</button>
    </form>
  </div>);

}

  export default Validation;