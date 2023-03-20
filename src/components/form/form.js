import "./form.css";
import { useEffect, useState} from "react";

const defaultFormValues = {
	rows: 5,
	cols: 5
};

const Form = ({onChange}) => {
	const [columnValue, setColumnValue] 	= useState(defaultFormValues.cols);
	const [rowValue, setRowValue] 		= useState(defaultFormValues.rows);

	useEffect(() => {
		console.log("State Updated");
		console.log("Row Value: %o", rowValue);
		console.log("Column Value: %o", columnValue);
		
	}, [columnValue, rowValue, onChange]);

	const columnChangeHandler = (e) => {
		setColumnValue(e.target.value);
		console.log("Column change triggered with value: %o", e.target.value);
	};

	const rowChangeHandler = (e) => {
		setRowValue(e.target.value);
		console.log("Row change triggered with value: %o", e.target.value);
	};

	return (
		<>
			<div className="form-container">
				<form>
					<input 	className="border-2 rounded" id="row-input" 
						type="number" min="5" max="100" placeholder="Rows"
						value={rowValue} 
						onChange={(e) => rowChangeHandler(e) } />
					<input 	className="border-2 rounded" id="col-input" 
						type="number" min="5" max="100" placeholder="Columns"
						value={columnValue} 
						onChange={(e) => columnChangeHandler(e) }/>
					<button className="font-bold border-2 rounded">Set Gameboard Size</button>
				</form>
			</div>
		</>
	);
}

export default Form;
