// Library - Thư viện
import { render, router } from "./ultilities";
// Components
import Contact from "./pages/contact";
import HomePage from "./pages/homepage"
import Details from "./pages/details"
import NotFound from "./pages/notFound";
import "../style.css" 

router.on('/', function () {
  render("#app", HomePage)
});

router.on('/contact', function () {
  render("#app", Contact)
});

router.notFound(function () {
  render("#app", NotFound)
})

router.on('/details', function(){
  render("#app", Details)
})


router.resolve();
// 