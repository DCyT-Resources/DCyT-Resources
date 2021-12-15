import React from "react";
import Link from "next/link";

const Home = ()=> {
	return(
		<div className="home-container">
			<h1>DCyT Resources</h1>
			<h3>El repositorio para el estudiante moderno </h3>
			<Link href="/directorios"><a className="home-cta">Continua aprendiendo </a></Link>
		</div>
	)
}

export default Home;
