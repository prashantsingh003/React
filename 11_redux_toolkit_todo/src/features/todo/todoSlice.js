import { createSlice,nanoid } from "@reduxjs/toolkit"

const initialState={
	todos:[
		{todo:'first todo', id:Date.now(), completed:false}
	]
}

export const todoSlice=createSlice({
	name:'todo',
	initialState,
	reducers:{
		addTodo:(state,actions)=>{
			console.log(actions)
			const todo={
				todo:actions.payload,
				id:nanoid(),
				completed:false
			}
			state.todos.push(todo);
		},
		updateTodo:(state,actions)=>{
			const newTodo=actions.payload.id;
			state.todos=state.todos.map(todo=>todo.id==newTodo.id?{...todo,...newTodo}:todo);
		},
		deleteTodo:(state,actions)=>{
			const id=actions.payload;
			state.todos=state.todos.filter(todo=>todo.id!==id);
		},
		toggleCompleted:(state,actions)=>{
			const id=actions.payload;
			state.todos=state.todos.map(todo=>todo.id==id?{...todo,completed:!todo.completed}:todo);
		}
	}
})

export const {toggleCompleted,deleteTodo,updateTodo,addTodo} = todoSlice.actions;

export default todoSlice.reducer;