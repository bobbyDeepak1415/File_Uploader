import { useState } from "react";

const Demo = () => {

    const [newTask,setNewTask]=useState("")

    return (

        <div className="h-[100vh] bg-gray-400 ">
            <div>
                <form>
                    <input></input>
                    <button className="bg-teal-300">Add Task</button>
                </form>
            </div>
            <div>

            </div>
        </div>

    )
};

export default Demo;
