import axios from "axios";
import { list } from "../mockData";

export const getAuthorListApi = async () => {
  try {
    const response = await axios.get(
      "https://protected-dawn-22742-5815f7097b83.herokuapp.com/author"
    );
    // console.log(response);
    const { data = [] } = response || {};
    return data;
  } catch (error) {
    console.error(error);
    return list;
  }
};

export const addNewAuthorApi = async (author) => {
  try {
    const response = await axios.post(
      "https://protected-dawn-22742-5815f7097b83.herokuapp.com/author/addAuthor",
      {
        ...author,
      }
    );
    const { data = [] } = response || {};
    return data;
  } catch (error) {
    console.error(error);
    return list;
  }
};

export const deleteAuthorApi = async (id) => {
  try {
    const response = await axios.delete(
      `https://protected-dawn-22742-5815f7097b83.herokuapp.com/author/delete/${id}`
    );
    const { data = [] } = response || {};
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateAuthorApi = async (id, author) => {
  try {
    const response = await axios.put(
      `https://protected-dawn-22742-5815f7097b83.herokuapp.com/author/updateAuthor/${id}`,
      {
        ...author,
      }
    );
    const { data = [] } = response || {};
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addBookApi = async (authorId, book) => {
  try {
    const response = await axios.patch(
      `https://protected-dawn-22742-5815f7097b83.herokuapp.com/author/addBook/${authorId}`,
      {
        ...book,
      }
    );
    const { data = [] } = response || {};
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const removeBookApi = async (authorId, book) => {
  try {
    const response = await axios.patch(
      `https://protected-dawn-22742-5815f7097b83.herokuapp.com/author/removeBook/${authorId}`,
      {
        ...book,
      }
    );
    const { data = [] } = response || {};
    return data;
  } catch (error) {
    console.error(error);
  }
};
