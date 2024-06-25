import { useRef, useState, useEffect } from "react"

function StopWatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setTimeElapsed(Date.now()-startTimeRef.current);
            }, 10);
        }
        return()=>{
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now()-timeElapsed;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setTimeElapsed(0);
        setIsRunning(false);
    }
    function formatTime(){
        let hours = (timeElapsed/(1000*60*60));
        let minutes = Math.floor(timeElapsed/(1000*60)%60);
        let seconds = Math.floor(timeElapsed/(1000)%60);
        let miliseconds = Math.floor(timeElapsed%1000/10);
        return `${minutes}:${seconds}:${miliseconds}`;
    }
    return <>
    <div className="stopwatch">
        <div className="display" >{formatTime()}</div>
        <div className="controls">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        </div>
    </div>
        </>


}

export default StopWatch