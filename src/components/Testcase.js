import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestCase = ({ testcase, updateTestCase }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedTestCase, setUpdatedTestCase] = useState(testcase);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTestCase({ ...updatedTestCase, [name]: value });
  };

  const handleSave = () => {
    updateTestCase(updatedTestCase);
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input type="text" name="name" value={updatedTestCase.name} onChange={handleChange} />
          <input type="text" name="description" value={updatedTestCase.description} onChange={handleChange} />
          <select name="status" value={updatedTestCase.status} onChange={handleChange}>
            <option value="passed">Passed</option>
            <option value="failed">Failed</option>
            <option value="in-progress">In Progress</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{testcase.name}</h3>
          <p>{testcase.description}</p>
          <p>{testcase.status}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TestCase;
