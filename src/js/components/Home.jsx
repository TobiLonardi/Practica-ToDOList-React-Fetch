import { useState } from "react";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [input,setInput]=useState("")
	const handleSubmit=(event) =>{
		event.preventDefault();
		console.log(input)
		setInput("")
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
					<div className="">
						<p className="border-bottom m-1">cojerme a tu madre</p>
						<p className="border-bottom m-1">cojerme a tu padre</p>

					</div>
				</div>
			</form>
		</div>
	);
};

export default Home;