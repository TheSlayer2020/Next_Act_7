import React, { useState } from 'react';
import styles from '../styles/Crude.css'; // Adjust the path as needed

const CrudeApp = () => {
  const [items, setItems] = useState([]);
  const [newName, setNewName] = useState('');
  const [newColor, setNewColor] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEditItem = (index) => {
    // Set the newName and newColor to the values of the item being edited
    const [name, color] = items[index].split(' - ');
    setNewName(name);
    setNewColor(color);
    setEditingIndex(index);
  };
  
  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    setEditingIndex(null);
  };

  const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleAddItem = () => {
    const newItem = `${newName.trim()} - ${newColor.trim()}`;
    if (editingIndex !== null) {
      // Update existing item
      const updatedItems = [...items];
      updatedItems[editingIndex] = newItem;
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      // Add new item
      setItems([...items, newItem]);
    }
    setNewName('');
    setNewColor('');
  };


  return (
    
    <div>
      
      <nav id="Search" >
        <input id="txtname"
          placeholder="Enter fruit name"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input id="txtcolor"
          placeholder="Enter fruit color"
          type="text"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
        />
        <button  onClick={handleAddItem}>{editingIndex !== null ? 'Update Item' : 'Add Item'}</button>
      </nav>

      <input  id="SearchBar"
        placeholder="Search for a fruit"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div id="Ela">
        {filteredItems.map((item, index) => (
          <div key={index} id="row">
            <div id="op1" >{item.split('-')[0]} - </div>
            <div id="op2" >{item.split('-')[1].trim()} - </div>
            
           
            <div id="cell">
              <button id="edit" onClick={() => handleEditItem(index)}> Edit </button>
              <button id="delete" onClick={() => handleDeleteItem(index)}> Delete </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudeApp;
