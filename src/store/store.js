import { create } from "zustand";

export const useEmployeeStore = create((set) => ({
  fullName: "",
  address: "",
  city: "",
  cellNumber: "",
  zipCode: "",
  resetData: () =>
    set((state) => ({
      fullName: "",
      address: "",
      city: "",
      cellNumber: "",
      zipCode: "",
    })),
  updateFullName: (newFullName) => set((state) => ({ fullName: newFullName })),
  updateAddress: (newAddress) => set((state) => ({ address: newAddress })),
  updateCity: (newCity) => set((state) => ({ city: newCity })),
  updateCellNumber: (newCellNum) =>
    set((state) => ({ cellNumber: newCellNum })),
  updateZipcode: (newZipCode) => set((state) => ({ zipCode: newZipCode })),
}));

export const useEditEmployeeStore = create((set) => ({
  fullName: "",
  address: "",
  city: "",
  cellNumber: "",
  zipCode: "",
  editFullName: (newFullName) => set((state) => ({ fullName: newFullName })),
  editAddress: (newAddress) => set((state) => ({ address: newAddress })),
  editCity: (newCity) => set((state) => ({ city: newCity })),
  editCellNumber: (newCellNum) => set((state) => ({ cellNumber: newCellNum })),
  editZipcode: (newZipCode) => set((state) => ({ zipCode: newZipCode })),
}));
