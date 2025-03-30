import React, { useState } from 'react';
import './App.css';


const items = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Carrot', category: 'Vegetable' },
  { id: 3, name: 'Banana', category: 'Fruit' },
  { id: 4, name: 'Broccoli', category: 'Vegetable' },
  { id: 5, name: 'Strawberry', category: 'Fruit' }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const filteredItems = items.filter(item => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'All' || item.category === category)
    );
  });

  return (
    <div className="app-container">
      <h1>Search and Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <select onChange={(e) => setCategory(e.target.value)} className="filter-select">
        <option value="All">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
      </select>
      <ul className="item-list">
        {filteredItems.map(item => (
          <li key={item.id} className="item">
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  
  );
}
