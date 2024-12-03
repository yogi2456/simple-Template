import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TemplateList from './Components/TemplateList.js';
import TemplateCard from './Components/TemplateCard.js';

const App = () => {
  const [templates, setTemplates] = useState([]);
  const [editingTemplateId, setEditingTemplateId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/templates')
      .then(response => setTemplates(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='bg-teal-400 py-10 px-40 text-center max-h-full'>
      <div className=''>
      <h1 className='text-white font-medium text-3xl max-w-full text-center'>Template Manager</h1>
      <TemplateCard templateId={editingTemplateId} setTemplates={setTemplates} setEditingTemplateId={setEditingTemplateId} />
      <TemplateList templates={templates} setTemplates={setTemplates} setEditingTemplateId={setEditingTemplateId} />
      </div>
    </div>
  );
};

export default App;
