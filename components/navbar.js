import React from 'react';
import Link from 'next/link';

const Navbar = ()=> {
	return(
		<nav className="menu">
			<div className="menu-links">
				<Link href="/"><a id="menu-logo">DCyT Resources</a></Link>
				<Link href="/directorios"><a>Directorios</a></Link>
			</div>
				
		</nav>
	)
}

export default Navbar;
