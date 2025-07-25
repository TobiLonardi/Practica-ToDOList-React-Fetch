import { useState,useEffect } from "react";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const api = "https://playground.4geeks.com/todo"
	const [input,setInput]=useState({
		"label":"",
		"done":false
	})
	const [todos, setTodos] = useState([])
	
	const defaultValue={
		"label":"",
		"done":false
	}

	useEffect(()=>{
		getAllTask()
	},[])

	const handleSubmit=(event) =>{
		event.preventDefault();
		//setTodos([...todos,input])
		postToDo();
		setInput(defaultValue)
	}

	const OnChange=(event)=>{
		setInput({...input,
			[event.target.name] : event.target.value
			}
		)
	}

	//const eliminateTask=(index)=>{
	//	setTodos(todos.filter((tareas,tareaindex)=>tareaindex!==index))
	//	console.log("borro")
	//}

	async function getAllTask() {
		try {
			const response = await fetch(`${api}/users/tobias`)
			const data = await response.json()
			if(response.ok){
				setTodos(data.todos)
			}
			else if(response.status == 404)
				createUser()

		} catch (error) {
			console.log(error)
		}
	}

	async function createUser() {
		try {
			const response = await fetch(`${api}/users/tobias`,{
				method:"POST"
			})
			if(response.ok){
				getAllTask()
			}
		} catch (error) {
			console.log(error)
		}
	}

	async function postToDo(){
		try {
			const response = await fetch(`${api}/todos/tobias`,{
				method:"POST",
				headers:{
					"Content-Type": "application/json"
				},
				body:JSON.stringify(input)
			})
			if(response.ok){
				getAllTask();
			}
		} catch (error) {
			console.log(error)
		}
	}

	async function deleteTask(id) {
		try {
			const response = await fetch(`${api}/todos/${id}`,{
				method:"DELETE"
			})
			if(response.ok)
				getAllTask()

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="body d-flex flex-column justify-content-center align-items-center">
			<h1>ToDoList</h1>
			<form action="" className="w-50 shadow-sm p-1 mb-5 bg-body-tertiary rounded" onSubmit={handleSubmit}>
				<div class="mb-3">
					<input type="text" value={input.label}
					 className="form-control "
					  id="exampleInputEmail1"
					   aria-describedby="emailHelp"
					   name = "label"
					   onChange={OnChange}></input>
					<ul className="">
						{todos.map((item)=>
						<li key={item.id} className="border-bottom m-1">{item.label}
						<span onClick={()=> deleteTask(item.id)}><i className="fa-solid fa-xmark"></i></span>
						</li>)}

					</ul>
				</div>
			</form>
		</div>
	);
};

export default Home;