// Library - Thư viện
import { render, router } from "./ultilities";
// Components page
import "../style.css" ;
import HomePage from "./pages/homepage";
import NotFound from "./pages/notFound";
import Details from "./pages/details";
import Dashboard from "./pages/dashboard";
import Addproduct from "./pages/addproduct";
import Updateproduct from "./pages/updateproduct";

router.on('/', function () {
  render("#app", HomePage)
});

router.on('/book/:id', function ({ data }) {
  render("#app", () => Details(data.id));
})
// admin
router.on('/admin', function(){
  render('#app', Dashboard)
});

router.on('/addProduct', function(){
  render('#app', Addproduct)
})

router.on('/updateProduct/:id', function({ data }){
  render('#app', () => Updateproduct(data.id));
})

// router.on('/updateProduct/')

router.notFound(function () {
  render("#app", NotFound)
});
router.resolve();
//