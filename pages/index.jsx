import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Container from '../components/Container'
import Users from '../components/Users'


const Index = (props) => {
	return(
		<Container>
			<Head>
				<title>NextJS Project - Home</title>
			</Head>
			<h2>Index</h2>
			<Users
				users={props.users}
			/>
		</Container>
	);
}

Index.getInitialProps = async (ctx) => {
	const res = await fetch('https://reqres.in/api/users');
	const resJSON = await res.json();
	return {
		users: resJSON.data
	}
}


export default Index