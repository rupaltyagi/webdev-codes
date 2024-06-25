import { useState } from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const  [newtask, setNewtask] = useState("");
    
function handleTaskChange(e){
    setNewtask(t=>t=e.target.value);
}

function addTask(){
    setTasks(t=>[...t, newtask]);
    setNewtask("");
}
function deleteTask(index){
    setTasks(t=> t.filter((_, i)=>i!==index))
}
 function moveUpTask(index){
    if(index>0){
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index-1]] =[updatedTask[index-1], updatedTask[index]];
        setTasks(updatedTask); 
    }
 }

 function moveDownTask(index){
    if(index<tasks.length-1){
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index+1]] =[updatedTask[index+1], updatedTask[index]];
        setTasks(updatedTask); 
    }
 }
    return<>
                <label>Enter a task: </label>
                <input type="text"  value={newtask} onChange={handleTaskChange}/>
                <button onClick={addTask}>Add</button><br/>
                <ol>
                    {tasks.map((task, index)=> <li key={index} >{task}
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                    <button onClick={()=>moveUpTask(index)}>MoveUp</button>
                    <button onClick={()=>moveDownTask(index)}>MoveDown</button>
                    </li>)}
                    
                </ol>
        </>
}
export default ToDoList