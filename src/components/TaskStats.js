const {useTaskContext} = require("../context/TaskContext");

const TaskStats = () => {
    const { tasks } = useTaskContext();

    const stats = {
        total: tasks.length,
        completed: tasks.filter(task => task.completed).length,
        pending: tasks.filter(task => !task.completed).length
    };

    return (
        <div className="task-stats">
            <h3>Statistiques</h3>
            <p>Total: {stats.total}</p>
            <p>Complétées: {stats.completed}</p>
            <p>En attente: {stats.pending}</p>
        </div>
    );
};

export default TaskStats;