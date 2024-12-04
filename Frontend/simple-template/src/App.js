import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import TemplateList from './Components/TemplateList.js';
import TemplateCard from './Components/TemplateCard.js';
// import api from './AxiosConfig/index.js';
import axios from 'axios';
import "./App.css"

const App = () => {
  const [templates, setTemplates] = useState([]);
  const [editingTemplateId, setEditingTemplateId] = useState(null);

  useEffect(() => {
    axios.get('https://simple-template-backend.onrender.com/templates')
      .then(response => setTemplates(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="bg-teal-500 px-40 py-10 text-center max-wh-full">
      <div className=''>
      <h1 className='text-center text-white max-w-full text-2xl sm:text-black'>Template Manager</h1>
      <TemplateCard templateId={editingTemplateId} setTemplates={setTemplates} setEditingTemplateId={setEditingTemplateId} />
      <TemplateList templates={templates} setTemplates={setTemplates} setEditingTemplateId={setEditingTemplateId} />
      </div>
    </div>
  );
};

export default App;
