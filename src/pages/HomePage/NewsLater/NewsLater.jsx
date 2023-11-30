import { useRef } from "react";
import Swal from "sweetalert2";


const NewsLetter = () => {

    const inputRef = useRef(null);

    const handleSubscribe = () =>{

        const email = inputRef.current.value;
        if(email){
            Swal.fire({
                title: 'Thank you for subscribing to our newsletter',
                icon: 'success',
                confirmButtonText: 'Close'
            })
        }

    }

    return (
        <div className="max-w-7xl text-white min-h-[90vh] p-4 md:p-0 mx-auto">
            <h2 className="text-3xl font-bold text-center text-black mb-6">Newsletter</h2>
            <div className=" flex  justify-center mt-5 ">
                <div className="lg:w-[900px] md:w-[700px]">
                    <div className="h-[48vh] " style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/16/47/34/360_F_216473491_cKqbnrABQUxVY5CVk9MJiBKatAOIFfHh.jpg)', backgroundRepeat: 'no-repeat' }}>
                        <div className=" text-neutral-content">
                            <div className="max-w-md p-5 text-left">
                                <h3 className="text-xl font-semibold mb-2 uppercase">Newsletter</h3>
                                <h1 className="mb-5 text-4xl font-bold uppercase text-red-500 italic">Subscribe for Updates</h1>
                                <p className="mb-5 text-lg font-bold">Get regular camp updates by subscribing to our newsletter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="bg-red-600 w-full lg:w-[900px] md:w-[700px] ">
                    <div className="p-4 flex gap-4 md:gap-0 flex-col md:flex-row justify-between">
                        <h4 className="uppercase text-white text-center">Join over 100,000 Adventures <br />Getting the Latest News</h4>
                        <div className="md:w-1/2 flex  rounded-lg">
                            <input name="email" type="email" required ref={inputRef} placeholder="Enter Your Email" className=" border-gray-500  pl-5 text-lg rounded-l-md w-full " />
                            <button onClick={handleSubscribe} className="bg-black py-3 px-6 rounded-r-lg rounded-l-none btn text-white hover:text-black">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;