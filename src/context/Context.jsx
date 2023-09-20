import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import request from "../server";
import { toast } from "react-toastify";
export const MockContext = createContext();

const Context = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  async function getData() {
    try {
      let { data } = await request("category");
      setData(data);
    } catch (err) {
      toast(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const state = { modalOpen, setModalOpen, close, open, data, getData };
  return <MockContext.Provider value={state}>{children}</MockContext.Provider>;
};

Context.propTypes = {
  children: PropTypes.node,
};
export default Context;
