import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const TableCell = styled.td`
  border: 1px solid #021e3d;
  padding: 10px;
  text-align: center;
`;

const Select = styled.select`
  background-color: #7A5EAC;
  color: white;
  padding: 5px;
  border: none;
`;

const TestCaseItem = ({ testcase }) => {
  const [status, setStatus] = useState(testcase.status);

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/testcases/${testcase.id}`, { status })
      .then(response => {
        console.log('Test case updated successfully');
      })
      .catch(error => {
        console.error('There was an error updating the test case!', error);
      });
  };

  return (
    <tr>
      <TableCell>{testcase.name}</TableCell>
      <TableCell>{testcase.estimate_time}</TableCell>
      <TableCell>{testcase.module}</TableCell>
      <TableCell>{testcase.priority}</TableCell>
      <TableCell>
        <Select value={status} onChange={(e) => setStatus(e.target.value)} onBlur={handleUpdate}>
          <option value="Select">Select</option>
          <option value="PASS">PASS</option>
          <option value="FAIL">FAIL</option>
        </Select>
      </TableCell>
    </tr>
  );
};

export default TestCaseItem;
