const {useState} = require("react");
const {useTaskContext} = require("../context/TaskContext");

const AddTask = () => {
    const [title, setTitle] = useState('');
    const { addTask } = useTaskContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTask(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nouvelle tâche..."
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AddTask;
