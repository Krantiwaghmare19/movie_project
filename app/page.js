
import Header from './Header.js'
import './globals.css';
import MovieRow from './MovieRow.js'
import Footer from './Footer.js'

const abc =()=>{
	const [movies,setMovies] = useState(Movie_data);
	const handleDelete = (name) =>{
	const updatedMovies = movies.filter((movie_object) =>name!==Movies_object.name);
	setMovies(updatedMovies);
	};
	
	return(
		<>
		    <Header />
    
      		{movies.map((movie) => (
        		<movie_row
          			key={movie.id}
          			box={movie}
          			onDelete={() => handleDelete(movie.name)}
        		/>
     		 ))};
    
		    <Movie_row/>
		    <Footer/>
		</>
	);
}
export default abc;




