import React from "react";
import { useState } from "react";

export default function App() {
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
    },
    {
      "id": 10,
      "name": "Emma Moore",
      "image": "url_to_image_10.jpg",
      "email": "emma.moore@example.com"
    },
    {
      "id": 11,
      "name": "Daniel Anderson",
      "image": "url_to_image_11.jpg",
      "email": "daniel.anderson@example.com"
    },
    {
      "id": 12,
      "name": "Ava Thomas",
      "image": "url_to_image_12.jpg",
      "email": "ava.thomas@example.com"
    },
    {
      "id": 13,
      "name": "Jackson Harris",
      "image": "url_to_image_13.jpg",
      "email": "jackson.harris@example.com"
    },
    {
      "id": 14,
      "name": "Mia Martinez",
      "image": "url_to_image_14.jpg",
      "email": "mia.martinez@example.com"
    },
    {
      "id": 15,
      "name": "Ethan Clark",
      "image": "url_to_image_15.jpg",
      "email": "ethan.clark@example.com"
    },
    {
      "id": 16,
      "name": "Avery Adams",
      "image": "url_to_image_16.jpg",
      "email": "avery.adams@example.com"
    },
    {
      "id": 17,
      "name": "Madison Baker",
      "image": "url_to_image_17.jpg",
      "email": "madison.baker@example.com"
    },
    {
      "id": 18,
      "name": "James Turner",
      "image": "url_to_image_18.jpg",
      "email": "james.turner@example.com"
    },
    {
      "id": 19,
      "name": "Scarlett Garcia",
      "image": "url_to_image_19.jpg",
      "email": "scarlett.garcia@example.com"
    },
    {
      "id": 20,
      "name": "Logan Foster",
      "image": "url_to_image_20.jpg",
      "email": "logan.foster@example.com"
    }
  ]
  const [tagValue, setTagValue] = useState("");
  const [tags, setTags] = useState([]);
  const [showList, setShowList] = useState(false)

  const addTags = (e) => {
    if (e.key === "Enter" && tagValue) {
      console.log(tagValue);
      setTags([...tags, tagValue]);
      setTagValue("");
    }
  };

  const handleDelete = (index) => {
    const updatedTags=[...tags.slice(0, index), ...tags.slice(index + 1)];
    setTags(updatedTags);
  }

  const handleItemClick = (item) => {
      const updatedTags=[...tags, item];
      setTags(updatedTags);
      setTagValue('');
      setShowList(false);
  }

  const handleInputChange = (e) => {
    setTagValue(e.target.value);
    setShowList(true);
  }

  const handleClick = () => {
    setShowList(true);
  }

  return (
    <div className="main flex justify-center">
      <div className="content">
        <div className="tagInput">
          <ul>
            {tags.map((tag, index) => {
              return <li key={index}>{tag}<span onClick={()=>handleDelete(index)}>X</span></li>;
            })}
          </ul>
          <input
            type="text"
            placeholder="type something"
            value={tagValue}
            onChange={handleInputChange}
            onKeyDown={addTags}
            onClick={handleClick}
          />
          {showList && 
          <div className="list">
            {tagValue===''
            ?users.map((item, index) => (
              <div key={index} onClick={() => handleItemClick(item.name)}>
                {item.name}
              </div>))
            :
            users
              .filter((item) => item.name.toLowerCase().includes(tagValue.toLowerCase()))
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
