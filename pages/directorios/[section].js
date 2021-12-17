import React from 'react';
import Link from 'next/link';
import directories from '../../db/directories';
import { useRouter } from 'next/router';

export const getStaticPaths = async () => {

	let paths = [];
	for ( let i of directories ) {
		paths.push({
			params: {
				section: i.href
			}
		})
	}

	return {
		paths,
		fallback: false
	}
};


export const	getStaticProps = async () => {
	return {
		props: {
			directories
		}
	}
}

const Section = () => {

	const section = useRouter().query.section;

	let docs 
	let dir 
	for ( let i = 0; i < directories.length; i++) {
		if ( section === directories[i].href ) {
			dir = directories[i];
			docs = directories[i].documents;
			break
		} else {
			docs = [];
			dir = {};
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
										<h1> <i className={doc.icon}></i> {doc.name}</h1>
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
