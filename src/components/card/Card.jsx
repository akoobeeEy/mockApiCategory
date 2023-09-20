import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineReadMore } from "react-icons/md";

const Card = ({ name, image, description }) => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0, scale: 0.5 }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      animate={{
        scale: [1, 2, 2, 1, 1],
      }}
      transition={{ ease: "easeOut", duration: 1.3 }}
      className="pb-4 overflow-hidden bg-green-500 rounded-md shadow-2xl group"
    >
      <img src={image} alt="" className="mb-3 h-[250px] object-cover w-full" />
      <div className="p-4 ">
        <h2 className="mb-3 text-xl font-bold text-white">{name}</h2>

        <div className="h-28">
          <p className="w-full text-sm font-normal text-white">
            {description}
          </p>
        </div>

        <div className="flex justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center px-6 py-1 text-sm text-blue-600 duration-100 bg-white rounded-full hover:text-white hover:bg-blue-600 c"
          >
            Edit
            <span>
              {" "}
              <AiOutlineEdit className="ml-1 text-sm" />
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center px-6 py-1 text-sm text-red-500 duration-100 bg-white rounded-full hover:bg-red-500 hover:text-white"
          >
            Delete
            <span>
              <AiFillDelete className="ml-1 text-sm " />
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center px-6 py-1 text-sm text-green-500 duration-100 bg-white rounded-full hover:bg-amber-500 hover:text-black"
          >
            More
            <span>
              <MdOutlineReadMore className="ml-1 text-sm" />
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
