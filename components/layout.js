import Navbar from './navbar.js';

const Layout = ({children}) => {
	return(
		<>
			<Navbar />
			<main className="container">
				{children}
			</main>
		</>
	)
}

export default Layout;
