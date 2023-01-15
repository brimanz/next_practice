import Link from 'next/link'


const Navigation = () =>{
	return(
		<ul>
			<li>
				<Link href="/">
					Index
				</Link>
			</li>
			<li>
				<Link href="/About">
					About
				</Link>
			</li>
			<li>
				<Link href="/Services">
					Services
				</Link>
			</li>
			
		</ul>
	)	
}


export default Navigation