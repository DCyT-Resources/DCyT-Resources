import React from 'react';
import Link from 'next/link';

const Navbar = ()=> {
	return(
		<navbar className="menu">
			<div className="menu-links">
				<Link href="/"><a id="menu-logo">DCyT Resources</a></Link>
				<Link href="#"><a>Directorios</a></Link>
				<Link href="#"><a>Contacto</a></Link>
			</div>
				
		</navbar>
	)
}

export default Navbar;
