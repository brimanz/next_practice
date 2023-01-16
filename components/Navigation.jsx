import Link from 'next/link'


const Navigation = () =>{
	return(
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
		  <div className="container-fluid">
		    	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		      		<span className="navbar-toggler-icon" />
		    	</button>
		    	<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		      		<div className="navbar-nav">
		        		<Link className="nav-link active" aria-current="page" href="/">Home</Link>
		        		<Link className="nav-link" href="/About">About</Link>
		        		<Link className="nav-link" href="/Services">Services</Link>
		      		</div>
		    	</div>
		  	</div>
		</nav>
	)	
}

{/*tutorial 38:43*/}

export default Navigation