"use client";
import { Dispatch, FormEvent, HTMLProps, SetStateAction, useState } from "react";

interface TaskProps extends HTMLProps<HTMLDivElement> {
    tasks: string[],
    setTasks: Dispatch<SetStateAction<string[]>>,
    index: number
}

function Task({tasks, setTasks, index, ...props}: TaskProps) {
    // Update
    const changeTask = (ev: FormEvent<HTMLInputElement>) => {
        const content = ev.currentTarget.value;
        setTasks([...tasks.slice(0, index), content, ...tasks.slice(index+1, tasks.length)]);
    };
    // Remove
    const removeTask = () => setTasks([...tasks.slice(0, index), ...tasks.slice(index+1, tasks.length)]);
    return <div {...props}>
        <input type="text" onInput={changeTask} value={tasks[index]} />
        <button onClick={removeTask}>X</button>
    </div>;
}

export default function Home() {
    const [tasks, setTasks] = useState([] as string[]);
    return <>
        <h1>Lista de tarefas React</h1>
        {/*Create*/}
        <button onClick={() => setTasks([...tasks, `Tarefa ${tasks.length+1}`])}>+</button>
        {/*Read*/}
        {tasks.map((_, i) => <Task tasks={tasks} setTasks={setTasks} index={i} key={i} />)}
    </>;
}
