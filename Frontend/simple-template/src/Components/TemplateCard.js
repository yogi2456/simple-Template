import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import api from '../AxiosConfig';

const TemplateCard = ({ templateId, setTemplates, setEditingTemplateId }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (templateId) {
      axios.get(`simple-template-two.vercel.app/templates/${templateId}`)
        .then(response => {
          setName(response.data.name);
          setContent(response.data.content);
        })
        .catch(error => console.log(error));
    }
  }, [templateId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateData = { name, content };

    if (templateId) {
      // Update existing template
      axios.put(`simple-template-two.vercel.app/templates/${templateId}`, templateData)
        .then(response => {
          setTemplates(prevTemplates => prevTemplates.map(t => t._id === templateId ? response.data : t));
          setEditingTemplateId(null);
        })
        .catch(error => console.log(error));
    } else {
      // Create new template
      axios.post('simple-template-two.vercel.app/templates', templateData)
        .then(response => {
          setTemplates(prevTemplates => [...prevTemplates, response.data]);
        })
        .catch(error => console.log(error));
    }

    setName('');
    setContent('');
  };

  return (
    <div className='flex items-center justify-center '>
      <form className='max-w-80 border-2 border-white rounded-xl pb-5 px-5 mt-5' onSubmit={handleSubmit}>
      <input className='mt-5 border-2 border-black rounded-md px-3 max-w-screen-2xl' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Template Name" required /> <br/>
      <textarea className='mt-3 border-2 border-black rounded-md max-w-90 px-3' value={content} onChange={(e) => setContent(e.target.value)} placeholder="Template Content" required /> <br/>
      <button className='bg-blue-500 rounded-xl px-4 py-1.5 mt-1 text-white' type="submit">{templateId ? 'Update' : 'Create'} Template</button>
    </form>
    </div>
  );
};

export default TemplateCard;
