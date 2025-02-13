import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="w-full border-t border-gray-200 lg:h-80 flex justify-center bg-black">
            <div className="w-full max-w-screen-xl flex flex-col lg:flex-row md:flex-row justify-between items-start lg:items-start  py-10 m-8">

                {/* Logo Section */}
                <div className="lg:ml-10 mb-6 lg:mb-0 w-full">
                    <Link to="/" className="font-semibold text-2xl text-white flex gap-2">
                        <img src="/Logo/Atelier_logo.png" className="h-9" alt="Company logo" />
                        ATELIER
                    </Link>
                </div>

                {/* Right side: Contact, Social, and Links in 3 separate columns */}
                <div className="flex flex-col lg:flex-row md:flex-row md:gap-16 gap-6 lg:gap-20 text-left w-full">

                    {/* Contact Section */}
                    <div className="flex flex-col w-full mb-3">
                        <a
                            href="mailto:Atelier.dev2@gmail.com"
                            className="text-gray-500 hover:text-white"
                        >
                            atelier.dev2@gmail.com
                        </a>
                        <p className="text-gray-500 pt-4">+91 0000000000</p>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col gap-3 w-full text-gray-500 mb-2">
                        <Link to="/about" className="hover:text-white">About</Link>
                        <Link to="/services" className="hover:text-white">Our Services</Link>
                        {/* <Link to="/components" className="hover:text-white">Components</Link> */}
                        {/* <Link to="/socials" className="hover:text-white">Socials</Link> */}
                        <Link to="/work" className="hover:text-white">Work with us</Link>
                    </div>

                    {/* Social Section */}
                    <div className="flex flex-col w-full">
                        <a
                            href="https://github.com/Harsh-9818"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.instagram.com/atelier_official_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white pt-4"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://www.linkedin.com/in/harshtanwar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white pt-4"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://x.com/ezharsh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white pt-4"
                        >
                            Twitter / X
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
