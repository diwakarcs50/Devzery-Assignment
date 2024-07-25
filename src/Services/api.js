import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getTestCases = async () => {
  const response = await axios.get(`${API_URL}/testcases`);
  return response.data;
};

export const updateTestCase = async (testcase) => {
  const response = await axios.put(`${API_URL}/testcases/${testcase.id}`, testcase);
  return response.data;
};
