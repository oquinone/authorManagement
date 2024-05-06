import axios from "axios";
import { list } from "../mockData";

export const getAuthorListApi = async () => {
  try {
    const response = await axios.get("http://localhost:8080/author");
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
      "http://localhost:8080/author/addAuthor",
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
      `http://localhost:8080/author/delete/${id}`
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
      `http://localhost:8080/author/updateAuthor/${id}`,
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
      `http://localhost:8080/author/addBook/${authorId}`,
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
      `http://localhost:8080/author/removeBook/${authorId}`,
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
