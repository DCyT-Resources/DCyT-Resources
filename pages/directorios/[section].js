import React from 'react';
import Link from 'next/link';
import directories from '../../db/directories';
import { useRouter } from 'next/router';

const Section = () => {
	const section = useRouter().query.section;
  let docs 
	let dir 
	for ( let i = 0; i < directories.length; i++) {
		if ( section === directories[i].href ) {
			dir = directories[i];
			docs = directories[i].documents;
			break
		}
	}

	return(
		<div className="directories-container">
			<div className="section-list">
				{ 
					docs.map((doc,index) => {
						return(
							<div key={index}>
								<Link href={doc.path}><a target="_blank">
									<div className="section-item">
										<h1> <i className={dir.icon}></i> {doc.name}</h1>
									</div>
									<style jsx>{`
									.section-item { 
									background-color: ${dir.color}
									}
									`}</style>
								</a></Link>
							</div>
						)
				})
				}
			</div>
		</div>
	)
}

export default Section;
