import { useState } from "react";
import {useTodoContext} from "../context";

function TodoForm() {
	const [todoMsg,setTodoMsg]=useState('');
	const {addTodo}=useTodoContext();

	const submitForm=(e)=>{
		e.preventDefault();
		if(!todoMsg) return;
		const todo={
			todo:todoMsg,
			completed:false
		}
		addTodo(todo);
		setTodoMsg('')
	}
	return (
		<form onSubmit={submitForm} className="flex">
			<input
				type="text"
				placeholder="Write Todo..."
				value={todoMsg} 
				onChange={e=>setTodoMsg(e.target.value)} 
				className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
			/>
			<button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
				Add
			</button>
		</form>
	);
}

export default TodoForm;

