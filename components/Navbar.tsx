
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success mb-4 py-3">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand text-white">Avo Store</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link href="/product/">
                            <a className="nav-link active text-white font-weight-bold">
                                <FontAwesomeIcon className="mx-2 text-white" icon="cart-plus" />
                            Cart <span className="sr-only">(current)</span></a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
