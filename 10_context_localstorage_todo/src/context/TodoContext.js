import { createContext, useContext } from "react";

export const TodoContext=createContext({
	todos:[],
	addTodo:(todo)=>{},
	updateTodo:(id,todo)=>{},
	deleteTodo:(id)=>{},
	toggleCompleted:(id)=>{},

});

export const TodoConTextProvider=TodoContext.Provider;
// export const TodoConTextProvider=({children})=>{
// 	return(
// 		<TodoContext.provider>
// 			{children}
// 		</TodoContext.provider>
// 	)
// }

export const useTodoContext=()=>{
	return useContext(TodoContext);
}