import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Backdrop from "../backdrop/Backdrop";
import { AiOutlineClose } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { SiNamecheap } from "react-icons/si";
import { GiScrollUnfurled } from "react-icons/gi";
import { MdPriceChange } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";

import { useContext } from "react";
import { MockContext } from "../../context/Context";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 1,
  },
};
const Modal = () => {
  const { handleSubmit, register, close, selected, onSubmit } =
    useContext(MockContext);


  return (
    <Backdrop onClick={close}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={dropIn}
        className="bg-white modal"
      >
        <div className="flex justify-between py-2 ">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-center text-green-500">
              Category Data
            </h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9, rotate: -90 }}
            className=""
            onClick={close}
          >
            <AiOutlineClose className="text-3xl font-bold text-green-500" />
          </motion.button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col items-center py-4"
        >
          <div className="modal-body">
            <div className="flex items-center h-10 p-3 mb-3 bg-green-500 rounded-md w-80">
              <SiNamecheap className="mr-2 text-white" />
              <input
                {...register("name")}
                name="name"
                type="text"
                className="modal-input"
                placeholder="Enter category name"
              />
            </div>
            <div className="flex items-center h-10 p-3 mb-3 bg-green-500 rounded-md w-80">
              <GiScrollUnfurled className="mr-2 text-white" />
              <input
                {...register("image")}
                name="image"
                type="url"
                className="modal-input"
                placeholder="Enter image url"
              />
            </div>
            <div className="flex items-center h-10 p-3 mb-3 bg-green-500 rounded-md w-80">
              <MdPriceChange className="mr-2 text-white" />
              <input
                {...register("price")}
                name="price"
                type="number"
                className="modal-input"
                placeholder="Enter category price"
              />
            </div>
            <div className="flex p-3 mb-3 bg-green-500 rounded-md h-14 w-80">
              <BiCommentDetail className="mr-2 text-white" />
              <textarea
                {...register("comment")}
                name="comment"
                type="text"
                className="resize-none modal-input"
                placeholder="Enter comment"
              />
            </div>
            <div className="flex items-center h-10 p-3 mb-3 bg-green-500 rounded-md w-80">
              <BsFillCalendarDateFill className="mr-2 text-white" />
              <input
                {...register("data")}
                name="data"
                type="date"
                className="modal-input"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="px-8 py-2 text-green-500 bg-white border-2 border-green-500 rounded-full"
            >
              {selected ? "Save" : "Add"} Category
            </button>
          </div>
        </form>
      </motion.div>
    </Backdrop>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
};
export default Modal;
