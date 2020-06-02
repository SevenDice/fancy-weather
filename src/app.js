import './scss/style.scss';

import Main from "./views/pages/Main";
import Error404 from "./views/pages/Error404";
import Login from "./views/pages/Login";
import Register from "./views/pages/Register";
import Start from "./views/pages/Start";
import Statistics from "./views/pages/Statistics";

import Header from "./views/components/Header";
import Footer from "./views/components/Footer"

import Utils from "./services/Utils";

// List of supported routes
const routes = {
  "/": Main,
  "/login": Login,
  "/register": Register,
  "/start": Start,
  "/statistics": Statistics,
};

const router = async () => {
  // Load view element:
  const header = null || document.getElementById("header_container");
  const content = null || document.getElementById("page_container");
  const footer = null || document.getElementById('footer_container');

  // Render the Header and Footer of the page
  header.innerHTML = await Header.render();
  await Header.after_render();

  footer.innerHTML = await Footer.render();
  await Footer.after_render();

  // Get the parsed URl from the addressbar
  const request = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  const parsedURL =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  const page = routes[parsedURL] ? routes[parsedURL] : Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("load", router);
