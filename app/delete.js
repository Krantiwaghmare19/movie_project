"use client"
import React, {useState} from 'react';
const xyz=(props)=>{
	return(
		<div className="delete">
			<button onClick={() => {props.onDelete()}}><img src="delete.png"/></button>
		</div>
	);
};
export default xyz;





