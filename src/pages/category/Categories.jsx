import { useContext } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";
import { MockContext } from "../../context/Context";
import { MdOutline3GMobiledata, MdOutline4GMobiledata } from "react-icons/md";

const Categories = () => {
  const { modalOpen, open, close } = useContext(MockContext);
  const { data } = useContext(MockContext);
  return (
    <div className="py-10">
      <div className="container mx-auto">
        
        <div className="flex justify-center w-full gap-10 mb-20">
        <span>
          {data.length < 29 ? (
            <div className="flex flex-col items-center">
              <MdOutline3GMobiledata className="text-xl text-green-500"/>
              <span className="text-red-500">{data.length}</span>
            </div>
          ) : (
           (<div><MdOutline4GMobiledata className="text-xl text-green-500"/> <span className="text-red-500">{data.length}</span></div>)
          )}
        </span>
          <div className="w-[500px] h-10">
            <input
              type="text"
              className="w-full h-full px-4 bg-white rounded-md shadow-2xl outline-none shadow-green-300"
              placeholder="Search..."
            />
          </div>
          <motion.button
            onClick={() => (modalOpen ? close() : open())}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-12 py-2 text-white bg-green-500 rounded-md shadow-2xl shadow-white"
          >
            Add
          </motion.button>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {data.map((el) => (
            <Card key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
