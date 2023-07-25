"use client"
import {useState} from "react" 
import Header from './Header.js'
import css from './globals.css';
import Movie_row from './movie_row.js'
import Footer from './Footer.js'
import Data from './data.js'

const abc =()=>{	
	const [movies, setMovies] = useState(Data);
    const handleDelete = (name) => {
    const updatedMovies = movies.filter((movie_object) =>name!== movie_object.name);
    setMovies(updatedMovies);
    };
    const sortArray=(movies_data,vote)=>{
		movies_data.votes=vote    
		const newSortarray=[...movies];
		
		setMovies(newSortarray);
    }
	return(
		<>
		    <Header />
		    {movies.map((movie)=>(
		    	<Movie_row
		    		box={movie}
		    		onDelete={()=>handleDelete(movie.name)}
		    		sortArray={sortArray}
		    	/>
		    ))};
		    <Footer/>
	    </>
	    
		    
	);		    
};
export default abc;
