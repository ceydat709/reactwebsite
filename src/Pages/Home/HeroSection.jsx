import { Link } from 'react-scroll';

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="fast-flicker">
                        Hello, I'm Ceyda.
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Aspiring
                        </span>{" "}
                        <br />
                        Software Engineer
                        
                    </h1>
                </div>
                
                <Link
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    
                    <button className="btn btn-primary">Get In Touch</button>
                </Link>
            </div>
            <div className="hero--section--img">
                <img src="./img/Screen_Shot_2024-03-19_at_9.19.29_PM-removebg-preview.png" />
            </div>
        </section>
    );
}
