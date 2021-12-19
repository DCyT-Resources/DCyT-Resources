import Link from 'next/link';

const Navbar = ()=> {
	return(
		<nav className="menu">
			<div className="menu-links">
				<Link href="/"><a id="menu-logo">DCyT Resources</a></Link>
				<Link href="/directorios"><a> <i className="fas fa-folder-open"></i> Directorios</a></Link>
				<Link href="https://github.com/DCyT-Resources/DCyT-Resources" ><a target="_blank"> <i className="fab fa-github"></i> Proyecto</a></Link>
			</div>
				
		</nav>
	)
}

export default Navbar;
