
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function BookModal({ isOpen, onRequestClose, onSubmit ,data}) {
  const [formData, setFormData] = useState({
    bookName: data.bookName,
    auther: data.auther,
    year: data.year,
    price: data.price,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:4000/api/books/${data._id}`, {
        method: 'PATCH',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    })
    console.log(response)
    onSubmit(formData);
    setFormData({
      bookName: '',
      auther: '',
      year: '',
      price: '',
    });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Update Book : {data.bookName}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book Name:</label>
          <input
            type="text"
            name="bookName"
            placeholder={data.bookName}
            value={formData.bookName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="auther"
            placeholder={data.auther}
            value={formData.auther}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            placeholder={data.year}
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            placeholder={data.price}
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status: {data.status == '1'? 'Active': 'Not Active'}</label>
        </div>
        <button type="submit">Update Book</button>
      </form>
    </Modal>
  );
}

export default BookModal;
