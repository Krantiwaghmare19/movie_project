
import Action_row from './Action_row.js'
import Data from './data.js'
import Delete from './delete.js'

const List= (props) =>{
	return(
 		<div className="row_movie1">
			<div className="image_col1">
				<img src={props.box.image}/>
			</div>
			<div className="detail_col2">
				<h2>{props.box.name}</h2>
				<p>{props.box.year} | {props.box.duration} | {props.box.genre}</p>
				<h3>Description</h3>
				<p>{props.box.Description}</p>
				<Action_row {...props}/>
				<Delete {...props}/>

			</div>
		</div>




	);
};
export default List;



