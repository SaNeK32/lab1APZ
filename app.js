const express = require("express");
const app = express();
app.get("/", (request, response) => {
     
    response.send("<h1>Главная страница</h1>");
});
app.get("/about", (request, response) => {
     
    response.send("<h1>О сайте</h1>");
});
app.get("/contact", (request, response) => {
     
    response.send("<h1>Контакты</h1>");
});
app.listen(3000);
