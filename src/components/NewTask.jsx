import { useState, useRef } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {

    const dialog = useRef();

    const [enteredTask, setEnteredTask] = useState('');
    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask === '') {
            dialog.current.open();
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return <>
        <Modal buttonCaption="Close" ref={dialog} >
            <span className="text-xl">Can't add an empty task</span>
        </Modal>
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
            />
            <button
                className="text-stone-700 hover:text-stone-950"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    </>;
}