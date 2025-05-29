import { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

const formInitialData = { author: "", title: "", body: "", public: undefined };

export default function App() {
  const [formDatas, setFormDatas] = useState(formInitialData);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, formDatas)
      .then((response) => {
        const { author, title, body } = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Errore nel recupero dati:", error);
      });
  };
  const handleInputChange = (e) => {
    setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="custom-col-1-3">
          <form action="" onSubmit={handleFormSubmit}>
            <label htmlFor="autore">Autore</label>
            <input
              type="text"
              value={formDatas.author}
              name="author"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="title">Titolo</label>
            <input
              type="text"
              value={formDatas.title}
              name="title"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="body">Descrizione</label>
            <input
              type="text"
              value={formDatas.body}
              name="body"
              required
              onChange={handleInputChange}
            />
            <button type="submit">CreaPost</button>
          </form>
        </div>
      </div>
    </div>
  );
}
{
}
