import logo from "../assets/img/logo.svg";
import Nav from "../components/Nav";

export default function Header() {
	return (
		<header className="headerWrap">
			<a href="/">
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</a>
			<Nav className="nav-header" />
		</header>
	);
}