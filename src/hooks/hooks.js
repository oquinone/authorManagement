import { useEffect, useState } from "react";
import { useEditAuthorStore, useAddBookStore } from "../store/store";
import {
  getAuthorListApi,
  deleteAuthorApi,
  updateAuthorApi,
  addBookApi,
  removeBookApi,
} from "../apis/api";

export function useAuthorListHook() {
  const [authors, setAuthors] = useState([]);
  const [deleteAuthor, setDeleteAuthor] = useState(false);
  const [editAuthor, setEditAuthor] = useState(false);
  const [book, setAddBook] = useState(false);
  const [selectedIdx, setSelectedIndex] = useState({});
  const [loading, setLoading] = useState(true);

  const { editFirstName, editLastName, editPhoneNumber, editLocated } =
    useEditAuthorStore();

  const storeFirstName = useEditAuthorStore((state) => state.firstName);
  const storeLastName = useEditAuthorStore((state) => state.lastName);
  const storePhoneNumber = useEditAuthorStore((state) => state.phoneNumber);
  const storeLocated = useEditAuthorStore((state) => state.located);

  const bookStore = useAddBookStore();

  useEffect(() => {
    const getData = async () => {
      const data = await getAuthorListApi();
      setAuthors(data);
      setLoading(false);
    };
    getData();
  }, []);

  const cancelBtnToDeleteAuthor = () => {
    setDeleteAuthor(false);
  };

  const callDeleteAuthor = async () => {
    setDeleteAuthor(false);
    const item = authors[selectedIdx.index];
    await deleteAuthorApi(item.id);
    const data = await getAuthorListApi();
    setAuthors(data);
  };

  const openModalToEditAuthor = (id, index) => {
    const row = authors[index];
    editFirstName(row.firstName);
    editLastName(row.lastName);
    editPhoneNumber(row.phoneNumber);
    editLocated(row.located);
    setSelectedIndex({ id, index });
    setEditAuthor(true);
  };

  const closeEditAuthorModal = () => {
    setEditAuthor(false);
  };

  const callUpdateAuthor = async () => {
    let currentAuthor = {
      firstName: storeFirstName,
      lastName: storeLastName,
      phoneNumber: storePhoneNumber,
      located: storeLocated,
      id: selectedIdx.id,
    };
    await updateAuthorApi(selectedIdx.id, currentAuthor);
    const data = await getAuthorListApi();
    setAuthors(data);
    setEditAuthor(false);
  };

  const openBookModal = (id, index) => {
    setSelectedIndex({ id: id, index: index });
    bookStore.resetBookStore();
    setAddBook(true);
  };

  const closeBook = () => {
    setAddBook(false);
  };

  const callAddBook = async () => {
    closeBook();
    const book = {
      isbn: bookStore.isbn,
      bookName: bookStore.bookName,
      copyrightDate: bookStore.copyrightDate,
      publishedDate: bookStore.publishedDate,
    };
    await addBookApi(selectedIdx.id, book);
    const data = await getAuthorListApi();
    setAuthors(data);
  };

  const callDeleteBook = async (authorId, book) => {
    await removeBookApi(authorId, book);
    const data = await getAuthorListApi();
    setAuthors(data);
  };

  return {
    editAuthor,
    book,
    authors,
    loading,
    deleteAuthor,
    cancelBtnToDeleteAuthor,
    callDeleteAuthor,
    setSelectedIndex,
    setDeleteAuthor,
    openModalToEditAuthor,
    closeEditAuthorModal,
    callUpdateAuthor,
    openBookModal,
    closeBook,
    callAddBook,
    callDeleteBook,
  };
}

export function useTableHook() {
  const [openCollapse, setCollapse] = useState(false);
  return { openCollapse, setCollapse };
}
