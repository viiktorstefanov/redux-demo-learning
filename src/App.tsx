import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { log } from "console";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data , setData ] = useState<any>([]);

  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSearch(inputValue);
  };

  const onSearch = async (query: string) => {

    const url = `https://jsonplaceholder.typicode.com/posts?q=${query}`;

    const options = {
      method: 'GET',
      headers: {
        'Content-type' : 'application-json'
      }
    };

    const response = await fetch(url, options);

    if(!response.ok) {
      throw new Error ('')
    }

    const data = await response.json();
    
    setData(data);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleEvent}
        />
        <button type="submit">SUBMIT</button>
        <p>{data.length > 0 ? data.map((item: any ) => <span key={item.id}>{item.title}</span>) : null}</p>
      </form>
    </div>
  );
}

export default App;
