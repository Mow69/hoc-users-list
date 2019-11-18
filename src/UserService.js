import Axios from "axios";

export const getUsers = () => {
  return Axios.get("https://jsonplaceholder.typicode.com/users").then(
    res => res.data
  );
};