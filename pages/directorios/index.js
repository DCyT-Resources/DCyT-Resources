import Link from 'next/link';
import Head from 'next/head';
import directories from '../../db/directories';

const Directorios = () => {
	return(
		<>
			<Head>
				<title>Directorios</title>
			</Head>
			<div className="directories-container">
				<div className="directories-list">
					{directories.map( (directory, index) => {
						return(
						<div key={index}>
						<Link href={'directorios/' + directory.href}><a>
							<div className="directory-item" id={directory.id} >
								<h1> <i className={directory.icon}></i> {directory.name}</h1>
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
		</>
	)
}

export default Directorios;
