import { useState } from "react";

const Demo = () => {
  const [newTask, setNewTask] = useState("");

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [dragData,setDragData]=useState("")

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const updatedStages = structuredClone(taskStages);

    const task = { name: newTask.trim(), stage: 0 };

    updatedStages[0].push(task);
    setTaskStages(updatedStages);
    setNewTask("");
  };

  const handleDelete = (stageIndex, taskIndex) => {
    const updatedStages = taskStages.map((taskStage) => [...taskStage]);

    updatedStages[stageIndex].splice(taskIndex, 1);
    setTaskStages(updatedStages);
  };

  const moveTask = (stageIndex, taskIndex, direction) => {
    const updatedStages = taskStages.map((taskStage) => [...taskStage]);
    
    const movedTask = updatedStages[stageIndex][taskIndex];
    
    updatedStages[stageIndex].splice(taskIndex, 1);
    updatedStages[stageIndex + direction].push(movedTask);
    
    setTaskStages(updatedStages);
};

const handleDragStart=(stageIndex,taskIndex)=>{
    setDragData({stageIndex,taskIndex})
}

const handleDrop=(stageIndex)=>{

    if(!dragData) return
      const updatedStages = taskStages.map((taskStage) => [...taskStage]);

    const {stageIndex:fromStage,taskIndex}=dragData

    if(fromStage===stageIndex) return

    const [movedTask]=updatedStages[fromStage].splice(taskIndex,1)

    updatedStages[stageIndex].push(movedTask)
    setTaskStages(updatedStages)

    setDragData(null)



  }

  return (
    <div className="h-[100vh] bg-gray-400 flex flex-col">
      <div className="p-4 mb-8">
        <form>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <button className="bg-teal-300" onClick={handleAddTask}>
            Add Task
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        {stages.map((stage, stageIndex) => {
          return (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={()=>handleDrop(stageIndex)}

              className="h-[70vh] border-2 w-[20vw] m-auto border-black flex flex-col"
              key={stageIndex}
            >
              <h1 className="text-lg">{stage}</h1>
              <ul>
                {taskStages[stageIndex].map((task, taskIndex) => {
                  return (
                    <li
                      className="flex justify-center gap-2"
                      draggable
                      onDragStart={()=>handleDragStart(stageIndex,taskIndex)}
                      key={taskIndex}
                    >
                      <span>{task.name}</span>
                      <span>
                        <button
                          onClick={() => moveTask(stageIndex, taskIndex, -1)}
                        >
                          ⬅️
                        </button>
                        <button
                          onClick={() => moveTask(stageIndex, taskIndex, 1)}
                        >
                          ➡️
                        </button>
                        <button
                          onClick={() => handleDelete(stageIndex, taskIndex)}
                        >
                          ❌
                        </button>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Demo;
