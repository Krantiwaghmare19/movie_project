"use client"
import React,{useState} from "react" 
const Action_row=() =>{
	const [Rating, setRating] = useState (0);
	const handleLike = () => {
    	setRating(Rating + 1);
  };
  	const handleDislike = () => {
  		setRating(Rating - 1);
  };
	return(
		<div className="Action-row">
			<div className="action_col">
				<div className="like">
					<button onClick={handleLike}><img src="Like.png"/></button>
				</div>
				<div className="Rating">
					<p className="count"> {Rating}</p>
				</div>
				<div className="dislike">
					<button onClick={handleDislike}><img src="Dislike.png"/></button>
				</div>
				
			</div>	
		</div>
	
	);
};
export default Action_row;

