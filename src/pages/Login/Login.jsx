import logo from '../../assets/elite-care-logo.png'

const Login = () => {
    return (
        <div className=' min-h-screen bg-[#f0ead2]'>
            <div className="flex max-w-7xl mx-auto">
                <div className="w-1/2">
                    <img src="https://www.froedtert.com/sites/default/files/styles/one_column/public/image/2018-09/be-an-engaged-health-care-consumer.jpg" alt="" />
                </div>
                <div>
                    <div className='flex gap-3 items-center'>
                        <img src={logo} className='w-12 h-12 rounded-full' alt="" />
                        <h2 className='text-2xl font-bold italic'>Elite Care</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;