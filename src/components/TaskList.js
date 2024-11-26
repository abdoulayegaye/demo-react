const {useTaskContext} = require("../context/TaskContext");

const TaskList = () => {
    const { tasks, removeTask, toggleTask } = useTaskContext();

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div key={task.id} className="task-item">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
                    <button onClick={() => removeTask(task.id)}>Supprimer</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;