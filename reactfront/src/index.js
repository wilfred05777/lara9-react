// https://www.youtube.com/watch?v=dyQLsQm1EtI

// SQL:
// INSERT INTO `products` (`id`, `description`, `price`, `stock`, `created_at`, `updated_at`) VALUES
// (1, 'Monitor LG 24', 25000.00, 12, '2021-07-27 01:18:57', '2021-07-27 01:18:57'),
// (2, 'Teclado Gamer RGB Redragon', 2700.00, 30, '2021-07-27 01:24:33', '2021-07-27 01:24:54'),
// (4, 'Consola PS4 1TB', 68000.00, 20, '2021-07-27 01:37:26', '2021-07-27 01:37:26'),
// (5, 'Webcam Logitech Pro', 10500.00, 15, '2021-07-27 01:38:44', '2021-07-27 01:38:44'),
// (6, 'Gabinete Gamer Sentey x10 RGB', 4500.00, 60, '2021-07-27 01:39:16', '2021-07-27 01:39:16');

// https://www.youtube.com/watch?v=_aj_adg1jeI

//https://github.com/infodp/API_Laravel_9_REACT/blob/main/api/app/Http/Controllers/Api/ProductController.php

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
