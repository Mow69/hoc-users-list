
import Axios from "axios";
import url from "./constants";

export const getUser = async id => {
  const res = await Axios.get(`${url}/${id}`);
  return res.data;
};

export const getUsers = () => {
  return Axios.get(`${url}`).then(
      res => res.data
  );
};