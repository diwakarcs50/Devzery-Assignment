import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TestCaseItem from './TestCaseitem';
import styled from 'styled-components';

const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #021e3d;
  color: #fff;
  padding: 10px;
`;

const TableCell = styled.td`
  border: 1px solid #021e3d;
  padding: 10px;
  text-align: center;
`;

const TestCaseList = () => {
  const [testcases, setTestCases] = useState([]);

  useEffect(() => {
    const fetchTestCases = async () => {
      try {
        // const response = await axios.get('http://localhost:5000/testcases');
        const data = [];

        // Check if the response data is empty, set default test cases if it is
        if (data.length === 0) {
          setTestCases([
            {
              id: 1,
              name: 'Test Case 1',
              estimate_time: '5 Minutes',
              module: 'Onboarding',
              priority: 'Low',
              status: 'Select',
            },
            {
              id: 2,
              name: 'Test Case 2',
              estimate_time: '5 Minutes',
              module: 'User Log In',
              priority: 'Medium',
              status: 'Select',
            },
            {
              id: 3,
              name: 'Test Case 3',
              estimate_time: '5 Minutes',
              module: 'Password',
              priority: 'High',
              status: 'Select',
            },
          ]);
        } else {
          setTestCases(data);
        }
      } catch (error) {
        console.error('Error fetching test cases:', error);
      }
    };

    fetchTestCases();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Test Case Name</TableHeader>
          <TableHeader>Estimate Time</TableHeader>
          <TableHeader>Module</TableHeader>
          <TableHeader>Priority</TableHeader>
          <TableHeader>Status</TableHeader>
        </tr>
      </thead>
      <tbody>
        {testcases.map(testcase => (
          <TestCaseItem key={testcase.id} testcase={testcase} />
        ))}
      </tbody>
    </Table>
  );
};

export default TestCaseList;
