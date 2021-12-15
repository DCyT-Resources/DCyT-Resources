import React from 'react';
import Link from 'next/link';

const Navbar = ()=> {
	return(
		<navbar className="menu">
			<ul>
				<li><Link href="/"><a id="menu-logo">DCyT Resources</a></Link></li>
				<li><Link href="/directorios"><a>Directorios</a></Link></li>
				<li><Link href="/contacto"><a>Contacto</a></Link></li>
			</ul>
				
		</navbar>
	)
}

export default Navbar;
