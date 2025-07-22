import { useState } from "react";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [input,setInput]=useState("")
	const [todos, setTodos] = useState([])
	const handleSubmit=(event) =>{
		event.preventDefault();
		setTodos([...todos,input])
		setInput("")
	}
	const eliminateTask=(index)=>{
		setTodos(todos.filter((tareas,tareaindex)=>tareaindex!==index))
		console.log("borro")
	}
	return (
		<div className="body d-flex flex-column justify-content-center align-items-center">
			<h1>ToDoList</h1>
			<form action="" className="w-50 shadow-sm p-1 mb-5 bg-body-tertiary rounded" onSubmit={handleSubmit}>
				<div class="mb-3">
					<input type="text" value={input}
					 className="form-control "
					  id="exampleInputEmail1"
					   aria-describedby="emailHelp"
					   onChange={(e) => setInput(e.target.value)}></input>
					<ul className="">
						{todos.map((tarea,index)=>
						<li key={index} className="border-bottom m-1">{tarea}
						<span onClick={()=> eliminateTask(index)}><i className="fa-solid fa-xmark"></i></span>
						</li>)}

					</ul>
				</div>
			</form>
		</div>
	);
};

export default Home;