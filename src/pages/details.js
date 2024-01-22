import Header from "../components/header"
import DetailsProduct from "../components/detailsProduct"
import Card from "../components/card"
import AboutProduct from "../components/aboutProduct"
import Footer from "../components/footer"
// Data
import data from '../../db' assert {type: 'json'}
const Details = function() {
    return /*html*/`
    ${Header()}
    <div class="w-[1200px] max-w-full my-0 mx-auto"> 

        ${DetailsProduct()}

        <div class="grid grid-cols-1 gap-4">
            <h1 class="text-[20px]">Sản phẩm tương tự</h1>
            <div class="rounded-lg overflow-hidden">
                <div class=" grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    ${data.books.map(function (book) {
                    return Card(book)
                    }).join("")}
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 mt-11">
            ${AboutProduct()}
        </div>
    </div>


    ${Footer()}
    `


}

export default Details;

