// import React, { useState, useEffect } from 'react';
// import { getTestCases,updateTestCase } from './Services/api.js';
// import TestCase from './components/Testcase.js';
// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import TestCaseList from './components/TestCaseList';
import AddTestCaseForm from './components/AddTestCaseForm';
import axios from 'axios';

const App = () => {
  const [testCases, setTestCases] = useState([]);

  const fetchTestCases = async () => {
    try {
      const response = await axios.get('http://localhost:5000/testcases');
      setTestCases(response.data);
    } catch (error) {
      console.error('Error fetching test cases:', error);
    }
  };

  useEffect(() => {
    fetchTestCases();
  }, []);

  const handleAddTestCase = (newTestCase) => {
    setTestCases([...testCases, newTestCase]);
  };

  return (
    <div>
      <Header />
      <SearchBar />
      <Filter />
      <AddTestCaseForm onAdd={handleAddTestCase} />
      <TestCaseList testCases={testCases} />
    </div>
  );
};

export default App;
