import Head from 'next/head'
export default function NotFound() {
	return (
		<>
			<Head>
				<title>Not Found</title>
			</Head>
			<div className="home-container">
				<h1>404</h1>
				<h3>Esta página no ha sido encontrada</h3>
			</div>
		</>
	)
}
