import { motion } from 'framer-motion';
import React from 'react'
import { Oval, ThreeDots } from 'react-loader-spinner';
export default function Login() {
    const [loading, setLoading] = React.useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, x: '100vh' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 }
            }}
            className='w-full flex justify-center sm:justify-between items-center h-[100vh]'
        >
            <div className='h-full w-[40%] hidden sm:flex bg-slate-200' />
            <div className='h-full sm:w-[60%] flex flex-col justify-center items-center'>
                <div className=' fixed top-5 right-10'>
                    <p
                        className=' font-poppins text-gray-500 text-base text-start w-full'
                    >
                        Don't have an account? <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href='/auth/register'
                            className=' text-green-600 font-bold'>Register</motion.a>
                    </p>
                </div>
                <div className=' h-[75%]  w-[88%]  sm:w-[50%] flex flex-col items-center justify-evenly'>
                    <p
                        className=' font-poppins text-4xl text-black font-black text-start w-full'
                    >
                        Welcome Back!
                    </p>
                    <p
                        className=' font-poppins text-gray-500 text-base text-start w-full'
                    >
                        Please log in to access your Kitchen dashboard
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                        className="flex justify-center tracking-widest items-center w-full p-5 font-poppins font-bold  border-2 py-1.5 text-gray-900 "
                    >
                        <img
                            className=" mr-5 h-5 w-5"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABIFBMVEX////qQzU0qFNChfT7vAUwffPY5Pw9g/Rpmvb7ugAwp1AppUzpNSTqPi/pOCf7uADL2/tunfYfo0bpLBfubWX8wwD2vbr1tbHpMh/qRzr++vr97u3+9uT80XFflfXl8uhCrF612r3J5M/T6dj75uT50c74ycb629nwgXrsV0vynZf0qqbsXVPudm7oJAjwjIXtZVz94aLygwfpNDj3pBn+577sVTL8yFHwdyr/+vD1lx/947H5rxLvay3ziiL5u2Lz9v4WdPO5zvr91YWgvfn8zGH7xDyMsPd7pvfbyGydsj9vr0+n1LGtxfneuSW4tjqEr0bvvB3NtyxxvYOfry2ExZMynYw5p2dCks0zqz9AnKY7pHlGj91Al7mCwaJbtXFYly4pAAADKklEQVRYhdXVa3vSMBQH8K60Y72ypVwK27izAdtgc84554XpVFSmTmSKt37/b2EKvSQhTUPxedT/yzbPj5PTkyAI/1tKzdZevpDP7+1vJ0eahXZHt2xbh7Etay3bbZUSKN2OpRvGGhLDtIz23nJMK2uZGBJgdvGAv6zWoUVV5tHNAz6mdMRiZlSxxeHk4xg3vX6s07biGRizwx6H7Y7J5cCu6/sMp7nGsS0vepbhGPyOyXC2l3GOo51Ske4YhmmSP8FyhCylz6bd6xz1u93+sQ0PDJ9zYC+UYhv9cPKahWN/wlj9EZo90rE7eXJNe0YxHaFDdMHQC5RV+3DO2E6B2Jh5GDG57R7TEYh67KPon2Q6J/dOUUdvM1czIuXuo/uKricmZxlJyjzwizKKSR3hXJEkKffQk6xmUucCFuRKj2aS2U1c0OUcknKPZztL8J/j5aUi+Xlyynu10yKFUO6pnvwvdScjIXm2uGCwzo6/7gyFMpeL0OaVzMqVL51g0A4FklOsyM+9dS8UBFIoe4+Drr11yEeTlFfLQ+nX3rpzFNpNAA3/FLT1z0IrN9uHVv38QbNXHcjg88cfETlNBoXkG2/dBQopbyhQeYMMKgVHRLgNmqQobwGlSQsZoJuVg+O/60OK9E4EIw7oBoXSwWP/qlXei6KoihxQGdlauhw89pqkfBDdcJS0ju3sOnzhjqSifBTnAZU4aIj1ejN8AQdAuRX9qNVlCkJaJLjX/ycxjDZmQ/RxnOXys4gGTFjOFj6O69hLTcQlRk1DfGNl/G0N4JLmRHR8sIEfvHCsvVRVXFLpU1C7k7GNpVPkigpREtxetUYuqlcB+FLGhmiTXCOMFiQVaJMGokw0oLpPv4ZScKehcTRSgq0CoDqewDgiAP776bdAkge0/ZNt8urS3GCvpt9T6aiNzdqkUSVKNPGHTJyyhJI6/Smn5GGEAyWVVxKndwwHSlVKxyOkXwwHZrwwBfTE31o1wFGUBhpxzqyomE6p7NshTMNhURpweMqZp+4A+iioGhjzM24qI3hAcQwiwBnFXugUqzaGWBDNmdQSKIHWqNdg6o0VjL+T37LOV58YHsy6AAAAAElFTkSuQmCC"
                        />
                        Sign In
                    </motion.button>
                    <div className="flex flex-row justify-between w-full items-center text-gray-500">
                        <div>--------------</div>
                        <p className="text-center text-[15px]  tracking-wider font-poppins text-gray-500">
                            Or sign in with
                        </p>
                        <div>--------------</div>
                    </div>
                    <div className="space-y-8 sm:mx-auto w-full sm:w-full">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm text-left font-bold font-poppins text-gray-900"
                            >
                                Email <span className="text-red-600">*</span>
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    // value={data.email}
                                    onChange={(e) => {
                                        // setData({ ...data, email: e.target.value });
                                    }}
                                    required
                                    className="block w-full p-5 border-2 py-1.5 text-gray-900"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm text-left font-bold font-poppins text-gray-900"
                                >
                                    Password <span className="text-red-600">*</span>
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#/forgot"
                                        className=" underline underline-offset-4 font-poppins text-green-600 hover:text-grey-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    // value={data.password}
                                    onChange={(e) => {
                                        // setData({ ...data, password: e.target.value });
                                    }}
                                    required
                                    className="block w-full p-5 border-2 py-1.5 text-gray-900 "
                                />
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                            onClick={() => {
                            }}
                            className="flex w-full justify-center  bg-green-600 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins font-bold  leading-6 text-white"
                        >
                            {
                                loading ?
                                    <ThreeDots
                                        visible={true}
                                        height="20"
                                        width="20"
                                        color="#fff"
                                        radius="9"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                    :
                                    'Login'
                            }
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
