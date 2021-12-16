import React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';

const Directorios = () => {
	return(
		<div className="directorys-container">
			<Navbar />
			<div className="directorys-list">
				<Link href="#"><a>
					<div className="directory-item">
						<h1> <i className="fas fa-folder-open"></i> Matemáticas</h1>
					</div>
				</a></Link>
				<Link href="#"><a>
					<div className="directory-item">
						<h1> <i className="fas fa-folder-open"></i> Estructuras Discretas</h1>
					</div>
				</a></Link>
				<Link href="#"><a>
					<div className="directory-item" >
						<h1> <i className="fas fa-folder-open"></i> Programacion</h1>
					</div>
				</a></Link>

			</div>
		</div>
	)
}

export default Directorios;
