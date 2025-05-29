// imports

import { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

const formInitialData = { author: "", title: "", body: "", public: false };

export default function App() {
  const [formDatas, setFormDatas] = useState(formInitialData);
  return (
    <div className="container">
      <div className="row">
        <div className="custom-col-1-3">
          <form action="">
            <label htmlFor="">
              <input type="text" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
{
}
