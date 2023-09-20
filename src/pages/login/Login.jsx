import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaKey,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("https://reqres.in/api/login", data).then(() => {
      navigate("/categories");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        <div className="flex w-2/3 max-w-4xl overflow-hidden bg-white shadow-2xl rounded-2xl">
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="w-3/5 p-5 "
          >
            <div className="font-bold text-left">
              <span className="text-green-500">Company</span>Name
            </div>
            <div className="py-10">
              <h2 className="mb-3 text-3xl font-bold text-green-500">
                Sign in to Acoount
              </h2>
              <div className="inline-block w-10 mb-2 border-2 border-green-500"></div>
              <div className="flex justify-center my-2">
                <Link className="p-3 mx-1 duration-200 border-2 border-gray-200 rounded-full hover:bg-green-500 hover:text-white hover:border-white">
                  <FaFacebookF className="text-sm hover:scale-105" />
                </Link>
                <Link className="p-3 mx-1 duration-200 border-2 border-gray-200 rounded-full hover:bg-green-500 hover:text-white hover:border-white">
                  <FaLinkedinIn className="text-sm hover:scale-105 " />
                </Link>
                <Link className="p-3 mx-1 duration-200 border-2 border-gray-200 rounded-full hover:bg-green-500 hover:text-white hover:border-white">
                  <FaGoogle className="text-sm hover:scale-105 " />
                </Link>
              </div>
              <p className="my-3 text-gray-400">or use your email account</p>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center w-64 p-3 bg-green-500 rounded-md">
                  <FaEnvelope className="mr-2 text-white" />
                  <input
                    {...register("email")}
                    name="email"
                    type="email"
                    className="flex-1 text-sm text-white bg-green-500 outline-none placeholder:text-gray-300"
                    placeholder="eve.holt@reqres.in"
                  />
                </div>
                <div className="flex items-center w-64 p-3 bg-green-500 rounded-md">
                  <FaKey className="mr-2 text-white" />
                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    className="flex-1 text-sm text-white bg-green-500 outline-none placeholder:text-gray-300"
                    placeholder="cityslicka"
                  />
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="inline-block px-12 py-2 font-semibold text-green-500 border-2 border-green-500 rounded-full hover:bg-green-500 hover:text-white"
                >
                  Sign In
                </button>
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </motion.div>
          <motion.div
            initial={{ y: -400, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="w-2/5 px-12 text-white bg-green-500 rounded-tr-2xl rounded-br-2xl py-36"
          >
            <h2 className="mb-2 text-3xl font-bold">Hello, Friend!</h2>
            <div className="inline-block w-10 mb-2 border-2 border-white"></div>
            <p className="mb-4">
              Fill up personal information and start journey with us.
            </p>
            <a
              className="inline-block px-12 py-2 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-green-500"
              href="#"
            >
              Sign Up
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Login;
