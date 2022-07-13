import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
      const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    console.log(newItem)
    
  }

  const newItems = [...items, newItem];

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = newItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const [search, setSearchChange] = useState('Search...')

  function handleSearchChange (event) {
    setSearchChange(event.target.value)
  }
  
  const newItemsToDisplay = itemsToDisplay.filter((item)=> {

    if (search === "" || item.name.toLowerCase().includes(search.toLowerCase())) {
      return item
    }})

  return (
    <div className="ShoppingList">
      <ItemForm handleSubmit={handleSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {newItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
