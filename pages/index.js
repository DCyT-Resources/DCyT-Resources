import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";

const Home = ()=> {
	return(
		<div className="home-container">
		<Navbar	/>
			<h1>DCyT Resources</h1>
			<h3>El repositorio para el estudiante moderno </h3>
			<Link href="/directorios"><a className="home-cta">Continua aprendiendo </a></Link>
		</div>
	)
}

export default Home;
