import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";
export function Todos() {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos);
	return (
		<>
			<div>
				<div>Todos</div>
				<ul className="list-none">
					{todos.map((todo) => (
						<li
							className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
							key={todo.id}
						>
							<div className='text-white'>
								{todo.todo}
							</div>
							<button
								onClick={() => dispatch(deleteTodo(todo.id))}
								className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}