/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import logo from '../../assets/elite-care-logo.png'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import GoogleSigning from "../Shared/socialSignings/GoogleSigning";
const Register = () => {

    const navigate = useNavigate()

    const {createUser, updateUserProfile, logOut} = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        if(!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]).{6,}$/.test(data?.password)){
            return toast.error('Password have to be minimum 6 characters . It should include capital letter and special character')
        }
        createUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            updateUserProfile(data.name, data.email)
            logOut()
            toast.success('User Created Successfully')

            navigate('/login')

        })
        .catch(error => {
            console.log(error);
            toast.error(`${error.message}`)
        })
    }

    return (
        <div className=' min-h-screen md:p-16 lg:p-0 lg:pt-16 bg-[#f0ead2]'>
            <div className="flex flex-col-reverse lg:flex-row max-w-7xl mx-auto bg-[#b7e4c7] rounded-lg">
                <div className="lg:w-2/3">
                    <img className='rounded-l-lg h-full hidden md:block' src="https://www.froedtert.com/sites/default/files/styles/one_column/public/image/2018-09/be-an-engaged-health-care-consumer.jpg" alt="" />
                </div>
                <div className='lg:w-1/3 p-10'>
                    <div className='flex gap-3 items-center justify-center'>
                        <img src={logo} className='w-20 h-20  rounded-full' alt="" />
                        <h2 className='text-3xl font-bold italic text-[#52b788]'>Elite Care</h2>
                    </div>
                    <div className=''>
                        <h2 className='text-3xl font-bold my-10 text-green-600'>Register</h2>

                        {/* Register form */}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mt-4'>
                                <h4 className='text-xl font-semibold'>Name</h4>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder='Your name' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-xl font-semibold'>Email</h4>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder='Email' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-xl font-semibold'>Password</h4>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder='Enter your password' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.password && <span className='text-red-500'>Password is required</span>}
                            </div>
                            <div className='text-center mt-10'>
                                <button className='hover:bg-[#52b788] bg-green-800 w-full p-2 text-white font-bold rounded-full'>
                                    Register
                                </button>
                            </div>
                        </form>
                        <p className='text-center mt-4'>Already have an account ? <span className='text-red-600'><Link to={'/login'}>Login</Link> </span>now</p>
                        <div>
                            <GoogleSigning></GoogleSigning>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;