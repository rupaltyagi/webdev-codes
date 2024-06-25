import { useState } from "react"

function Form(){
const [name, setName] = useState();
const [gender, setGender] = useState();
const [payment, setPayment] = useState();
const [feedback, setFeedback] = useState();

function handleNameChange(e){
    setName(n=> n=e.target.value)
}
function handleGenderChange(e){
 setGender(e.target.value)
}
function handlePaymentChange(e){
    setPayment(p=>p = e.target.value)
}
function handleFeedbackChange(e){
    setFeedback(f=> f= e.target.value)
}


return  <>
        <div className="form">
        <label>Name: </label>
        <input type="text" value={name} onChange={handleNameChange}/><br/>
        <label>Gender: </label>

        <input type="radio" name="gender" value="Male" onChange={handleGenderChange}/>Male
        <input type="radio" name="gender" value="Female" onChange={handleGenderChange}/>Female<br/>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="" >Select any one</option>
        <option value="Master Card">Master Card</option>
        <option value="Visa">Visa</option>
        </select>
        <textarea placeholder="Enter feedback..." value={feedback} onChange={handleFeedbackChange}></textarea>
        <p>{name}  {gender}  {feedback}  {payment}</p>
        </div>
        </>
}

export default Form

