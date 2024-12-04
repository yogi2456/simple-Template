import axios from 'axios';
import React from 'react';
// import api from '../AxiosConfig';

const TemplateList = ({ templates, setTemplates, setEditingTemplateId }) => {
  const handleDelete = (id) => {
    axios.delete(`https://simple-template-backend.onrender.com/templates/${id}`)
      .then(() => {
        setTemplates(templates.filter(template => template._id !== id));
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='max-w-full text-center mt-10 max-h-full'>
      <h2 className='text-3xl text-white'>Templates Lists</h2>
      <ul>
        {templates.map(template => (
          <li className='mt-5 max-w-80 m-auto max-h-full bg-white rounded-xl py-2 px-5 flex justify-between' key={template._id}>
           <div className='text-left'>
           <h3 className='text-xl'>{template.name}</h3>
           <p className='text-xs'>{template.content}</p>
           </div>
            <div className=''>
            <button className='bg-green-500 rounded-lg px-2 py-1 mt-1 text-white mr-5 text-sm' onClick={() => setEditingTemplateId(template._id)}>Edit</button>
            <button className='bg-red-500 rounded-lg px-2 py-1 mt-1 text-white text-sm' onClick={() => handleDelete(template._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateList;