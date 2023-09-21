import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import PropTypes from "prop-types";
import request from "../server";
import { toast } from "react-toastify";
export const MockContext = createContext();

const Context = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let { data } = await request("category");
      setData(data);
    } catch (err) {
      toast(err);
    }
  }
  const close = () => setModalOpen(false);
  const open = () => {
    setSelected(null);
    setModalOpen(true);
    reset({
      name: "",
      image: "",
      price: "",
      comment: "",
      data: "",
    });
  };

  const onSubmit = async (data) => {
    try {
      if (selected === null) {
        await request.post("category", data);
      } else {
        await request.put(`category/${selected}`, data);
      }
      getData();
      close();
    } catch (err) {
      toast(err);
    }
  };

  const editData = async (id) => {
    try {
      setSelected(id);
      setModalOpen(true);
      let { data } = await request(`category/${id}`);
      console.log(data);
      reset({
        name: data.name,
        image: data.image,
        price: data.price,
        comment: data.comment,
        data: data.data,
      });
    } catch (err) {
      toast(err);
    }
  };
  const deleteData = async (id) => {
    let check = window.confirm("Do you want to launch this product?");
    try {
      if (check) {
        await request.delete(`category/${id}`);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const state = {
    modalOpen,
    setModalOpen,
    close,
    open,
    data,
    getData,
    selected,
    editData,
    deleteData,
    onSubmit,
    handleSubmit,
    register,
  };
  return <MockContext.Provider value={state}>{children}</MockContext.Provider>;
};

Context.propTypes = {
  children: PropTypes.node,
};
export default Context;
