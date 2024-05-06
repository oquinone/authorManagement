import { create } from "zustand";

export const useAuthorStore = create((set) => ({
  firstName: "",
  lastName: "",
  located: "",
  phoneNumber: "",
  books: [],
  resetData: () =>
    set((state) => ({
      firstName: "",
      lastName: "",
      located: "",
      phoneNumber: "",
      books: [],
    })),
  updateFirstName: (newFirstName) =>
    set((state) => ({ firstName: newFirstName })),
  updateLastName: (newLastName) => set((state) => ({ lastName: newLastName })),
  updateLocated: (newLocated) => set((state) => ({ located: newLocated })),
  updatePhoneNumber: (phoneNumber) =>
    set((state) => ({ phoneNumber: phoneNumber })),
  // updateZipcode: (newZipCode) => set((state) => ({ zipCode: newZipCode })),
}));

export const useEditAuthorStore = create((set) => ({
  firstName: "",
  lastName: "",
  located: "",
  phoneNumber: "",
  editFirstName: (newFirstName) =>
    set((state) => ({ firstName: newFirstName })),
  editLastName: (newLastName) => set((state) => ({ lastName: newLastName })),
  editLocated: (newLocated) => set((state) => ({ located: newLocated })),
  editPhoneNumber: (newNum) => set((state) => ({ phoneNumber: newNum })),
}));

export const useAddBookStore = create((set) => ({
  isbn: "",
  bookName: "",
  copyrightDate: "",
  publishedDate: "",

  resetBookStore: () =>
    set((state) => ({
      isbn: "",
      bookName: "",
      copyrightDate: "",
      publishedDate: "",
    })),

  enterIsbn: (newIsbn) => set((state) => ({ isbn: newIsbn })),
  enterBookName: (name) => set((state) => ({ bookName: name })),
  enterCopyRightDate: (date) => set((state) => ({ copyrightDate: date })),
  enterPublishedDate: (date) => set((state) => ({ publishedDate: date })),
}));
