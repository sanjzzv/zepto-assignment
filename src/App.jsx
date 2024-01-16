import React from "react";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [showList, setShowList] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const users = [
    {
      "id": 1,
      "name": "John Doe",
      "image": "url_to_image_1.jpg",
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "image": "url_to_image_2.jpg",
      "email": "jane.smith@example.com"
    },
    {
      "id": 3,
      "name": "Robert Johnson",
      "image": "url_to_image_3.jpg",
      "email": "robert.johnson@example.com"
    },
    {
      "id": 4,
      "name": "Emily White",
      "image": "url_to_image_4.jpg",
      "email": "emily.white@example.com"
    },
    {
      "id": 5,
      "name": "Michael Brown",
      "image": "url_to_image_5.jpg",
      "email": "michael.brown@example.com"
    },
    {
      "id": 6,
      "name": "Olivia Davis",
      "image": "url_to_image_6.jpg",
      "email": "olivia.davis@example.com"
    },
    {
      "id": 7,
      "name": "William Miller",
      "image": "url_to_image_7.jpg",
      "email": "william.miller@example.com"
    },
    {
      "id": 8,
      "name": "Sophia Wilson",
      "image": "url_to_image_8.jpg",
      "email": "sophia.wilson@example.com"
    },
    {
      "id": 9,
      "name": "Liam Taylor",
      "image": "url_to_image_9.jpg",
      "email": "liam.taylor@example.com"
    }
  ]

  const filteredItemList = users.filter((item)=>!chips.includes(item.name));

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowList(true);
    setHighlightedIndex(null);
  }

  const handleInputKeyDown = (e) => {
    if (e.key === "Backspace" && inputValue==='' && chips.length>0) {
      //handle backspace to delete last chip
      const lastChip=chips[chips.length-1];
      const updatedChips=[chips.slice(0, -1)];
      setChips(updatedChips);
      setInputValue('');
      filteredItemList.push(lastChip);
    }

    else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      //handle arrow navigation
      e.preventDefault();
      const direction = e.key === "ArrowUp" ? -1 : 1;
      const newIndex = 
        highlightedIndex === null
        ? direction === 1
          ? 0
          : filteredItemList.length-1
        : (highlightedIndex + direction + filteredItemList.length) % filteredItemList.length;
      setHighlightedIndex(newIndex);
    }

    else if(e.key === "Enter" && highlightedIndex !== null){
      //handle enter to select item from list
      handleItemClick(filteredItemList[highlightedIndex].name);
    }
  };

  const handleInputClick = () => {
    setShowList(true);
    setHighlightedIndex(null);
  }

  const handleChipDelete = (index) => {
    const deletedChip=chips[index];
    const updatedChips=[...chips.slice(0, index), ...chips.slice(index + 1)];
    setChips(updatedChips);
    setInputValue('');
    filteredItemList.push(deletedChip);
  }

  const handleItemClick = (item) => {
      const updatedChips=[...chips, item];
      setChips(updatedChips);
      setInputValue('');
      setShowList(false);
  }


 
  return (
    <div className="main flex justify-center">
      <div className="content">
        <div className="chipInput">
          <ul>
            {chips.map((chip, index) => {
              return <li key={index}>{chip}<span onClick={()=>handleChipDelete(index)}>X</span></li>;
            })}
          </ul>
          <input
            type="text"
            placeholder="type something"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onClick={handleInputClick}
          />
          {showList && 
          <div className="list">
            {inputValue===''
            ?filteredItemList.map((item, index) => (
              <div key={index} onClick={() => handleItemClick(item.name)}>
                {item.name}
              </div>))
            :
            filteredItemList
              .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
              .map((filteredItem, index) => (
                <div key={index} onClick={() => handleItemClick(filteredItem.name)}>
                  {filteredItem.name}
                </div>
              ))}
          </div>}
        </div>
      </div>
    </div>
  );
}
