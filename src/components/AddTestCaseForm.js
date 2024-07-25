// src/components/AddTestCaseForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #021e3d;
  border-radius: 5px;
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  width: 100%;
`;

const Select = styled.select`
  padding: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #021e3d;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #023e8a;
  }
`;

const AddTestCaseForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [estimateTime, setEstimateTime] = useState('');
  const [module, setModule] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('Select');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTestCase = { name, estimate_time: estimateTime, module, priority, status };

    try {
      const response = await axios.post('http://localhost:5000/testcases', newTestCase);
      onAdd(response.data); 
    } catch (error) {
      console.error('Error adding test case:', error);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <label>Name</label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </FormField>
        <FormField>
          <label>Estimate Time (in minutes)</label>
          <Input type="text" value={estimateTime} onChange={(e) => setEstimateTime(e.target.value)} required />
        </FormField>
        <FormField>
          <label>Module</label>
          <Input type="text" value={module} onChange={(e) => setModule(e.target.value)} required />
        </FormField>
        <FormField>
          <label>Priority</label>
          <Input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} required />
        </FormField>
        <FormField>
          <label>Status</label>
          <Select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="Select">Select</option>
            <option value="PASS">PASS</option>
            <option value="FAIL">FAIL</option>
          </Select>
        </FormField>
        <Button type="submit">Add Test Case</Button>
      </form>
    </FormContainer>
  );
};

export default AddTestCaseForm;
