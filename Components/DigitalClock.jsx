import { useEffect, useState } from "react"

function DigitalClock(){

    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1)
    }, []);

function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}

    return <>
    <div>
        <span>{formatTime()}</span>
    </div>
    </>
}

export default DigitalClock