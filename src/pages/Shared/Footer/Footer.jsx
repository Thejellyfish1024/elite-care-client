

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <footer className="grid lg:grid-cols-3 grid-cols-2 gap-5 p-10 bg-neutral text-neutral-content text-center justify-center">
                <nav>
                    <header className="mb-3">Company</header>
                    <div className="flex flex-col">

                        <a className="hover:text-blue-500 text-sm">About us</a>
                        <a className="hover:text-blue-500 text-sm">Contact</a>
                        <a className="hover:text-blue-500 text-sm">Jobs</a>
                    </div>
                </nav>
                <nav>
                    <header className="mb-3">Legal</header>
                    <div className="flex flex-col">

                        <a className="hover:text-blue-500 text-sm">Terms of use</a>
                        <a className="hover:text-blue-500 text-sm">Privacy policy</a>
                        <a className="hover:text-blue-500 text-sm">Cookie policy</a>
                    </div>
                </nav>
                <nav>
                    <header className="mb-3">Social</header>
                    <div className="flex flex-col">

                        <a className="hover:text-blue-500 text-sm">Twitter</a>
                        <a className="hover:text-blue-500 text-sm">Instagram</a>
                        <a className="hover:text-blue-500 text-sm">Facebook</a>
                    </div>
                </nav>
                <nav className="">
                    <header className="mb-3">Explore</header>
                    <div className="flex flex-col">

                        <a className="hover:text-blue-500 text-sm">Features</a>
                        <a className="hover:text-blue-500 text-sm">Enterprise</a>
                        <a className="hover:text-blue-500 text-sm">Security</a>
                    </div>
                </nav>
                <nav className="">
                    <header className="mb-3">Apps</header>
                    <div className="flex flex-col">

                        <a className="hover:text-blue-500 text-sm">Mac</a>
                        <a className="hover:text-blue-500 text-sm">Windows</a>
                        <a className="hover:text-blue-500 text-sm">iPhone</a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;