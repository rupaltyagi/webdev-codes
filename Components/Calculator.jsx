import { useState } from "react"

function Calculator(){
const [value, setValue] = useState('');



return <>
    <div className="container">
        <form>
            <div className="calculator">

                <div className="display">
                <input type="text" value={value}/>
                </div>
            
            <div>
                <input type="button" value="AC" onClick={e=>setValue('')}/>
                <input type="button" value="DE" onClick={e=>setValue(value.slice(0, -1))}/>
                <input type="button" value="." onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="/" onClick={e=>setValue(value + e.target.value)}/>
            </div>
            <div>
                <input type="button" value="7" onClick={e=>setValue(value + e.target.value)} />
                <input type="button" value="8" onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="9" onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="*" onClick={e=>setValue(value + e.target.value)}/>
            </div>
            <div>
                <input type="button" value="4" onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="5" onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="6" onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="+" onClick={e=>setValue(value + e.target.value)}/>
            </div>
            <div>
                <input type="button" value="1" onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="2" onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="3" onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="-" onClick={e=>setValue(value + e.target.value)}/>
            </div>
            <div>
            <input type="button" value="00" onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="0" onClick={e=>setValue(value + e.target.value)}/>
                <input type="button" value="=" onClick={e=>setValue(eval(value))}/>
            </div>
            </div>
        </form>
    </div>
</>
}

export default Calculator