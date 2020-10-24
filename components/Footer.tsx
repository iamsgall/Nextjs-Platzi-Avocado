import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-light my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ">
                        <h4>About us</h4>
                        <p>Lorem, ipsum.</p>
                    </div>
                    <div className="col-md-4 ">
                        <h4>Services</h4>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="col-md-4 ">
                        <h4>Done for</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, voluptatibus.</p>
                        <p>Lorem, ipsum.</p>
                        <div>
                            <a href="#">
                                <span className="mx-2 ">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </span>
                            </a>
                            <a href="#">
                                <span className="mx-2 ">
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
