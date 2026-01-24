import { useState } from "react";

const Demo = () => {
  const [newTask, setNewTask] = useState("");

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

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
