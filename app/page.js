"use client";

import React, { useState } from "react";

const page = () => {
	const [task, settask] = useState("");
	const [desc, setdesc] = useState("");
	const [maintask, setmaintask] = useState([]);
	const handleSubmit = (e) => {
		e.preventdefault();
		setmaintask([...maintask, { task, desc }]);
		setdesc("");
		settask("");
		console.log(setmaintask);
	};

	const deleteHandle = (i) => {
		let copytask = [...maintask];
		copytask.splice(i, 1);
		setmaintask(copytask);
	};

	let renderTask = <h2>No record found</h2>;

	if (maintask.length > 0) {
		renderTask = maintask.map((t, i) => {
			return (
				<li>
					<div className="flex justify-between mb-5">
						<h5 className="text-2xl font-semibold">{t.task}</h5>
						<h6 className="text-2xl font-semibold">{t.desc}</h6>
					</div>
					<button
						onClick={() => {
							deleteHandle(i);
						}}
						className="br-red-200 text-white px-4 py-2 rounded">
						DELETE
					</button>
				</li>
			);
		});
	}

	return (
		<>
			<h1 className="m-5 p-5 text-5xl bg-black  text-white font-bold text-center">
				Ashu Todo List
			</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
					type="text"
					placeholder="Enter Your List"
					value={task}
					onChange={(e) => settask(e.target.value)}
				/>
				<input
					className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
					type="text"
					placeholder="Description"
					value={desc}
					onChange={(e) => {
						setdesc(e.target.value);
					}}
				/>
				<button className="bg-black border-2 text-white m-5 text-2xl font-bold rounded px-4 py-3">
					Add Task
				</button>
			</form>
			<hr />
			<div className="p-8 bg-slate-200">
				<ul>{renderTask}</ul>
			</div>
		</>
	);
};

export default page;
