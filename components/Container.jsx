import Head from 'next/head'
import Navigation from './Navigation'


const Container = (props) =>{
	return(
		<div>
			<Head>
				<title>NextJS Project</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css" integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN" crossorigin="anonymous"/>
			</Head>


			<Navigation/>
			<div>
				{props.children}
			</div>
		</div>
	)
}


export default Container