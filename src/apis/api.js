import axios from "axios";
import { list } from "../mockData";

export const getEmployeeList = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/allEmployees");
    // console.log(response);
    const { data = [] } = response || {};
    return data;
  } catch (error) {
    console.error(error);
    return list;
  }
};

export const addNewEmployee = async (employee) => {
  try {
    const response = await axios.post("http://localhost:8080/api/add", {
      ...employee,
    });
    // console.log(response);
    const { data = [] } = response || {};
    return data;
  } catch (error) {
    console.error(error);
    return list;
  }
};

export const deleteEmployeeFunc = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/api/deleteEmployee/${id}`
    );
    const { data = [] } = response || {};
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateEmployeeFunc = async (employee) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/update`, {
      ...employee,
    });
    const { data = [] } = response || {};
    return data;
  } catch (error) {
    console.error(error);
  }
};
