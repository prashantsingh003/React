import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"

const readFromLocal=()=>{
	return {todos:JSON.parse(localStorage.getItem('todos')) || []}
}
const initialState = readFromLocal()

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, actions) => {
			console.log(actions)
			const todo = {
				todo: actions.payload,
				id: nanoid(),
				completed: false
			}
			state.todos.push(todo);
			localStorage.setItem('todos',JSON.stringify(state.todos))
		},
		updateTodo: (state, actions) => {
			const newTodo = actions.payload.id;
			state.todos = state.todos.map(todo => todo.id == newTodo.id ? { ...todo, ...newTodo } : todo);
			localStorage.setItem('todos',JSON.stringify(state.todos))
		},
		deleteTodo: (state, actions) => {
			const id = actions.payload;
			state.todos = state.todos.filter(todo => todo.id !== id);
		},
		toggleCompleted: (state, actions) => {
			const id = actions.payload;
			state.todos = state.todos.map(todo => todo.id == id ? { ...todo, completed: !todo.completed } : todo);
		}
	},
	// extraReducers:(builder)=>{
	// 	builder
	// 	.addCase(delayedAddtionOfTodo.pending,()=>[console.log('adding todo')])
	// 	.addCase(delayedAddtionOfTodo.fulfilled,(state,actions)=>{
	// 		console.log(actions)
	// 		const todo = {
	// 			todo: actions.payload,
	// 			id: nanoid(),
	// 			completed: false
	// 		}
	// 		console.log(todo)
	// 		// state.todos.push(todo);
	// 	})
	// }
})

export const delayedAddtionOfTodo=createAsyncThunk(
	'todo/delayedAddTodo',
	async (text)=>{
		await new Promise(resolve=>setTimeout(resolve,3000));
		return text
	}
)

export const { toggleCompleted, deleteTodo, updateTodo, addTodo } = todoSlice.actions;

export default todoSlice.reducer;