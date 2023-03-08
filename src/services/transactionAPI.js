import { API } from "../API";

export const fetchData = async ({ transaction, date }) => {
  try {
    const response = await API.get("/");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addTransaction = async ({
  transaction,
  date,
  productDescription,
  selectProduct,
  culc,
}) => {
  try {
    const bodyRequest = {
      type: transaction,
      description: productDescription,
      category: selectProduct,
      amount: culc,
      month: date.mm,
      year: date.yyyy,
    };

    const response = await API.post(
      `/api/finances/${transaction}`,
      bodyRequest
    );
    return response.data.results;
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
