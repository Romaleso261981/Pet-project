import { API } from "../API";

export const fetchData = async ({ transaction, date }) => {
  try {
    const bodyRequest = {
      type: transaction,
      month: date.mm,
      year: date.yyyy,
    };
    const response = await API.get("/api/finances/", { params: bodyRequest });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addTransaction = async (credentials) => {
  try {
    const response = await API.post("/api/finances/add", credentials);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTransaction = async (_id) => {
  try {
    const response = await API.delete(`/${_id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const summaryTransaction = async ({ transaction }) => {
  try {
    const bodyRequest = {
      type: transaction,
      countmonth: 6,
    };
    const response = await API.get("/api/finances/summary", {
      params: bodyRequest,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
