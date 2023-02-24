import axios from 'axios';

axios.defaults.baseURL = 'https://back.kapusta.click/api/';
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjhiZDdjNDMzYWRiMTU0ZTRkZmUwYiIsImlhdCI6MTY3NzI0NTg1NiwiZXhwIjoxNjc3Mjg5MDU2fQ.FXXde6gGf-GZfiA0-4TvowczTsTeUXkvmYB_EiCdlpE';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const fetchData = async ({transaction, date}) => {
    try {
        const bodyRequest = {
            type: transaction,
            month: Number(date.mm),
            year: date.yyyy
        }
        const response = await axios.get(
            `finances`, {params: bodyRequest});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const addTransaction = async ({transaction, date, productDescription, selectProduct, culc}) => {
    try {
        const bodyRequest = {
            type: transaction, 
            description: productDescription, 
            category: selectProduct, 
            amount: culc,
            month: Number(date.mm),
            year: date.yyyy
        }
        const response = await axios.post(
            `finances/expenses`, bodyRequest);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

export const deleteTransaction = async (_id) => {
    try {
        const response = await axios.delete(
            `/finances/${_id}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}