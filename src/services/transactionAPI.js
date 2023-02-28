import axios from "axios";

axios.defaults.baseURL = "https://back.kapusta.click/api/finances";

export const fetchData = async ({ transaction, date }) => {
  try {
    const bodyRequest = {
      type: transaction,
      month: date.mm,
      year: date.yyyy,
    };
    const response = await axios.get(`/`, { params: bodyRequest });
    return response.data;
  } catch (error) {
    // console.log(error);
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
    const response = await axios.post(`/${transaction}`, bodyRequest);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTransaction = async (_id) => {
  try {
    const response = await axios.delete(`/${_id}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const summaryTransaction = async ({ transaction }) => {
  try {
    const bodyRequest = {
      type: transaction,
      countmonth: 6,
    };
    const response = await axios.get(`/summary`, { params: bodyRequest });
    return response.data;
  } catch (error) {
    // console.log(error);
  }
};