import { useState } from "react"

function ColorPicker(){

    const [color, setColor] = useState()

    function handleColorChange(e){
        setColor(c=> c=e.target.value)
    }

return <>
        <input type="color" value={color} onChange={handleColorChange}/>
        <div style={{backgroundColor:color, height: 100, width:500}}></div>
        </>
}
export default ColorPicker