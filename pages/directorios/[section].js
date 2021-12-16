import React from 'react';
import Link from 'next/link';
import directories from '../../db/directories';
import { useRouter } from 'next/router';

const Section = () => {
	const section = useRouter().query.section;
	return(
		<div className="section-container">
			<h1>{section}</h1>
			<style jsx>{`
			.section-container {
			color: black;
			}
			`}</style>
		</div>
	)
}

export default Section;
