import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext(); // Crée un contexte pour partager l'état

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK': // Reducer gère les modifications d'état via des actions
            return [...state, {
                id: Date.now(),
                title: action.payload,
                completed: false
            }];
        case 'REMOVE_TASK': // Supprime une tâche
            return state.filter(task => task.id !== action.payload);
        case 'TOGGLE_TASK':  // Change l'état completed d'une tâche
            return state.map(task =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            );
        default:
            return state;
    }
};

export const TaskProvider = ({ children }) => {
    // Initialise le state et dispatch
    const [tasks, dispatch] = useReducer(taskReducer, []);

    // Fonctions pour manipuler les tâches
    const addTask = (title) => {
        dispatch({ type: 'ADD_TASK', payload: title });
    };

    const removeTask = (id) => {
        dispatch({ type: 'REMOVE_TASK', payload: id });
    };

    const toggleTask = (id) => {
        dispatch({ type: 'TOGGLE_TASK', payload: id });
    };

    // Fournit les données aux composants enfants
    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};
