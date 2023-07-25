
const Delete=({onDelete})=>{
	return(
		<div className="delete">
			<button onClick={onDelete}><img src="delete.png"/></button>
		</div>
	);
};
export default Delete;
