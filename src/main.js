// Library - Thư viện
import { render, router } from "./ultilities";
// Components page
import HomePage from "./pages/homepage"
import NotFound from "./pages/notFound";
import Details from "./pages/details";
import "../style.css" 

router.on('/', function () {
  render("#app", HomePage)
});

router.on('/contact', function () {
  render("#app", Contact)
});

router.on('/book/:id', function ({ data }) {
  render("#app", () => Details(data.id));
})

router.notFound(function () {
  render("#app", NotFound)
});
router.resolve();
// 