import { Link } from "react-router-dom";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <footer className="bg-gray-100 py-10 lg:px-20 exo-text">
            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <Link to="/" className="flex items-center space-x-2 mb-4">
                        <img src="/images/logo.svg" alt="EduPress Logo" className="h-8" />
                        <span className="text-2xl font-bold">EduPress</span>
                    </Link>
                    <p className="text-sm text-gray-600">
                        Empowering your learning experience with premium content and resources.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">GET HELP</h3>
                    <ul className="space-y-5 text-sm font-semibold text-gray-600">
                        <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
                        <li><Link to="/blog" className="hover:text-orange-500">Latest Articles</Link></li>
                        <li><Link to="/FAQ" className="hover:text-orange-500">FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">PROGRAMS</h3>
                    <ul className="space-y-5 text-sm font-semibold text-gray-600">
                        <li><a href="#" className="hover:text-orange-500">Art & Design</a></li>
                        <li><a href="#" className="hover:text-orange-500">Business</a></li>
                        <li><a href="#" className="hover:text-orange-500">IT & Software</a></li>
                        <li><a href="#" className="hover:text-orange-500">Languages</a></li>
                        <li><a href="#" className="hover:text-orange-500">Programming</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">CONTACT US</h3>
                    <p className="text-sm text-gray-600 mb-4">Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</p>
                    <p className="text-sm text-gray-600">Tel: + (123) 2500-567-8988</p>
                    <p className="text-sm text-gray-600 mb-4">Mail: supportlms@gmail.com</p>
                    <div className="flex space-x-4 text-orange-500">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

            </div>
            <div className="w-full h-20 relative ">
                <button
                    onClick={scrollToTop}
                    className="rounded-full scale-75 shadow-md overflow-hidden w-fit fixed z-50 bottom-24 right-4 "
                >
                    <img className="hover:scale-125 transition-all duration-300" src="/images/top.svg" alt="Back to Top" />
                </button>
            </div>

            <div className="text-center text-gray-500 text-sm mt-4 border-t border-gray-200 pt-4">
                Copyright © {new Date().getFullYear()} LearnPress LMS | Powered by ThimPress
            </div>
        </footer>
    );
}
