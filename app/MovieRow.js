import Action_row from './Action_row.js'
import {people} from './data.js'
import Delete from './delete.js'
export default function List () {
	const listItems = people.map(file =>
 		<div className="row_movie1">
			<div className="image_col1">
				<img src={file.image}/>
			</div>
			<div className="detail_col2">
				<h2>{file.name}</h2>
				<p>{file.year} | {file.duration} | {file.genre}</p>
				<h3>Description</h3>
				<p>{file.Description}</p>
				<Action_row/>
				<Delete/>
			</div>
		</div>
		

		
		
	);
	return(listItems);
};

