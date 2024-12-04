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
      <ul className='flex flex-wrap justify-around gap-2 max-w-xl m-auto mt-5'>
        {templates.map(template => (
          <li className='mt-5 max-w-full max-h-full bg-white rounded-xl py-2 px-5 flex justify-between' key={template._id}>
           <div className='text-center'>
           <h3 className='text-xl'>{template.name}</h3>
           <p className='text-xs mt-2 max-w-20'>{template.content}</p>
           <div className='flex flex-col text-center'>
           <button className='bg-green-500 rounded-lg px-2 py-1 mt-10 text-white mr-5 text-sm mx-3' onClick={() => setEditingTemplateId(template._id)}>Edit</button>
            <button className='bg-red-500 rounded-lg px-2 py-1 mt-3 text-white text-sm mb-2' onClick={() => handleDelete(template._id)}>Delete</button>
            </div>
           </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateList;