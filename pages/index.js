import Link from "next/link";
import Head from "next/head";

const Home = ()=> {
	return(
		<>
			<Head>
				<title>DCyT Resources</title>
			</Head>
			<div className="home-container">
				<h1>DCyT Resources</h1>
				<h3>El repositorio para el estudiante moderno </h3>
				<Link href="/directorios"><a className="home-cta">Continua aprendiendo </a></Link>
			</div>
		</>
	)
}

export default Home;
