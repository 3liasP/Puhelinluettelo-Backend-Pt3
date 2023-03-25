import React from 'react';
// Uuden henkilön lisäävä lomake
const PersonForm = (props) => {
	return (
		<form onSubmit={props.addPerson}>
			<div>
				name: <input
					value={props.newName}
					onChange={props.handleAddName}
				/>
			</div>
			<div>
				number: <input
					value={props.newNumber}
					onChange={props.handleAddNumber}
				/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm