import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen p-5">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                <img src="https://st4.depositphotos.com/1007566/19608/v/450/depositphotos_196086112-stock-illustration-404-error-page-not-found.jpg" alt="" />
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-5">Page not found</h2>
                    <Link to='/'>
                        <button className="bg-blue-500 py-2 px-6  text-white font-bold rounded-md">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;