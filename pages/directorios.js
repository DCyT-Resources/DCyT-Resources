import React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';
import directories from '../db/directories';

const Directorios = () => {
	return(
		<div className="directories-container">
			<Navbar />
			<div className="directories-list">
				{directories.map( (directory, index) => {
					return(
					<div key={index}>
					<Link href="#"><a>
						<div className="directory-item" id={directory.id} >
							<h1> <i className="fas fa-folder-open"></i> {directory.name}</h1>
						</div>
						<style jsx>{`
						.directory-item { 
						background-color: ${directory.color}
						}
						`}</style>
					</a></Link>
					</div>
					)
				})}
			</div>
		</div>
	)
}

export default Directorios;
