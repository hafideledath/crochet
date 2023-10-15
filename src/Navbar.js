import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <div className="sticky-note"><a href="/" style={{backgroundColor: "#edd968"}}>Home</a></div>
                <div className="sticky-note"><a href="/about" style={{backgroundColor: "#cc96ff"}}>About us</a></div>
                <div className="sticky-note"><a href="/contact" style={{backgroundColor: "#e68677"}}>Contact</a></div>
                <div className="sticky-note"><a href="/selling" style={{backgroundColor: "#fc914e"}}>Selling</a></div>
            </nav>
        </div>
    );
}

export default Navbar;