
"use client"
import React,{useState} from "react" 

const Action_row=(props) =>{
	return(
		<div className="Action-row">
			<div className="action_col">
				<div className="like">
					<button onClick={()=>props.sortArray(props.box,props.box.votes+1)}><img src="Like.png"/></button>
				</div>
				<div className="Rating">
					<p className="count"> {props.box.votes}</p>
				</div>
				<div className="dislike">
					<button onClick={()=>props.sortArray(props.box,props.box.votes-1)}><img src="Dislike.png"/></button>
				</div>
			</div>
		</div>
	);
};
export default Action_row;

