import { useEffect, useState } from "react";
import { useEditAuthorStore, useAddBookStore } from "../store/store";
import {
  getAuthorListApi,
  deleteAuthorApi,
  updateAuthorApi,
  addBookApi,
  removeBookApi,
} from "../apis/api";
import { useAuthorStore } from "../store/store";

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

export function useAddAuthorHook() {
  const [snackBar, setSnackBar] = useState(false);
  const firstName = useAuthorStore((state) => state.firstName);
  const lastName = useAuthorStore((state) => state.lastName);
  const located = useAuthorStore((state) => state.located);
  const phoneNumber = useAuthorStore((state) => state.phoneNumber);

  const updateFirstName = useAuthorStore((state) => state.updateFirstName);
  const updateLastName = useAuthorStore((state) => state.updateLastName);
  const updateLocated = useAuthorStore((state) => state.updateLocated);
  const updatePhoneNumber = useAuthorStore((state) => state.updatePhoneNumber);
  const resetData = useAuthorStore((state) => state.resetData);

  const handleCloseSnackbar = () => {
    setSnackBar(false);
  };

  return {
    snackBar,
    setSnackBar,
    handleCloseSnackbar,
    firstName,
    lastName,
    located,
    phoneNumber,
    updateFirstName,
    updateLastName,
    updateLocated,
    updatePhoneNumber,
    resetData,
  };
}

export function useAddBookHook() {
  const isbn = useAddBookStore((state) => state.isbn);
  const bookName = useAddBookStore((state) => state.bookName);
  const copyrightDate = useAddBookStore((state) => state.copyrightDate);
  const publishedDate = useAddBookStore((state) => state.publishedDate);

  const setIsbn = useAddBookStore((state) => state.enterIsbn);
  const setBookName = useAddBookStore((state) => state.enterBookName);
  const setPublishedDate = useAddBookStore((state) => state.enterPublishedDate);
  const setCopyrightDate = useAddBookStore((state) => state.enterCopyRightDate);

  return {
    isbn,
    bookName,
    copyrightDate,
    publishedDate,
    setIsbn,
    setBookName,
    setPublishedDate,
    setCopyrightDate,
  };
}
