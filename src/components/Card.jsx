import profilePic from './assets/IMG_8955.jpg'
import "../index.css"

function Card(){
   return(
	<div className="card">
	     <img className="card-image" src={profilePic} alt="profile photo"></img>
             <h2 className="card-title">Chef</h2>
             <p className="card-text">Bespoke catering for functions and private events</p>
	</div>
   );

}

export default Card
