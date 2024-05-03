function App() {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="#">RHYNO EV</a>
                </div>
                <ul className="nav-links">
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                    <li><a href="#pre-book">Pre-book</a></li>
                </ul>
            </nav>
        </header>
    );
}

function HomePage() {
    return (
        <section id="home">
            <div className="hero">
                <h1>Welcome to RHYNO EV</h1>
                <p>Let's elevate your ride experience with Rhyno – where superiority meets style.</p>
                <a href="#pre-book" className="btn">Pre-book now</a>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer>
            <div className="footer-links">
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Website Policy</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                    <li><a href="#products">Products</a></li>
                </ul>
            </div>
            <div className="social-links">
                <a href="#" className="instagram-icon">Instagram</a>
                <a href="#" className="linkedin-icon">LinkedIn</a>
            </div>
        </footer>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
