import Swal from "sweetalert2";



const ContactUs = () => {

    const handleSend = e =>{
        e.preventDefault();
        const form = e.target;
        form.reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for your message. We will reply to you soon",
            showConfirmButton: false,
            timer: 2500
          });
          
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-around items-center mb-16">
                {/* form */}
                <div className="md:w-1/3 w-3/4 my-10">
                    <h2 className="text-2xl font-semibold mb-8">Contact Us</h2>
                    <form onSubmit={handleSend}>
                        <p>Name <span className="text-red-500 font-medium text-xl">*</span></p>
                        <input required type="text" className="border border-black rounded-md py-1 w-full" />
                        <p className="mt-3">Email <span className="text-red-500 font-medium text-xl">*</span></p>
                        <input required type="text" className="border border-black rounded-md py-1 w-full" />
                        <p className="mt-3">Phone <span className="text-red-500 font-medium text-xl">*</span></p>
                        <input required type="text" className="border border-black rounded-md py-1 w-full" />
                        <p className="mt-3">Subject <span className="text-red-500 font-medium text-xl">*</span></p>
                        <input required type="text" className="border border-black rounded-md py-1 w-full" />
                        <p className="mt-3">Message</p>
                        <textarea required name="" id="" cols="15" rows="5" className="border border-purple-500 rounded-md  w-full" ></textarea>
                        <button className="text-center w-full bg-blue-600 py-2 text-white font-bold rounded-full hover:bg-blue-800 mt-2">Send</button>
                    </form>
                </div>

                {/* contact info */}
                <div>
                    <div className="text-center space-y-2">
                        <h3 className="text-xl mb-5 font-semibold text-purple-500">Get In Touch</h3>
                        <h2 className="text-lg font-semibold">Head Office Location :</h2>
                        <p>KA 31/6A Joar Sahara , vatara, Dhaka</p>
                        <p>1229, Bangladesh</p>
                    </div>
                    <div className="text-center mt-10 space-y-2">
                        <h2 className="text-lg font-semibold">Email  :</h2>
                        <p>Email 1 : abc@gmail.com</p>
                        <p>Email 2 : xysfs@gmail.com</p>
                        <p>Email 2 : lmh@gmail.com</p>
                    </div>
                    <div className="text-center mt-10 space-y-2">
                        <h2 className="text-lg font-semibold">Contact Info  :</h2>
                        <p>Mobile 1 : +880123456789</p>
                        <p>Mobile 2 : +880123456789</p>
                        <p>Mobile 3 : +880123456789</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;