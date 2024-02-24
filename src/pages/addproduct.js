import { useEffect } from "../ultilities";

const Addproduct = function () {
    useEffect(function(){
        const form = document.getElementById("form-add");
        const productName = document.getElementById("product-name"); // tên
        const productPrice = document.getElementById("product-price"); // giá
        const productListed = document.getElementById("product-listed"); // giá niêm yết
        const productPromotional = document.getElementById("product-promotional"); // giá khuyến mãi
        const productDescribe = document.getElementById("product-describe"); // mô tả
        const productRating = document.getElementById("product-rating"); // xếp hạng
        const productActive = document.getElementById("product-active"); // tích cực

        form.addEventListener("submit", function(e){
            e.preventDefault();
            const newProduct = {
                name: productName.value,
                price: productPrice.value,
                listed: productListed.value,
                promotional: productPromotional.value,
                short_description: productDescribe.value,
                rating: productRating.value,
                active: productActive.value,
            };
            fetch('http://localhost:3000/books', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });
        }, [])
    })

    return /*html*/ `
        <section class="py-16 bg-stone-100 font-poppins dark:bg-gray-800">
            <div class="max-w-4xl px-4 py-4 mx-auto bg-white border shadow-sm dark:border-gray-900 dark:bg-gray-900 lg:py-4 md:px-6">
                <div class="mb-10 ">
                    <h2 class="pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
                        Thêm mới sản phẩm
                    </h2>
                </div>
                <form id="form-add">
                    <div class="mb-6">
                        <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Tên sách</label>
                        <input type="text" id="product-name"
                            class="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                            placeholder="...." required>
                    </div>
                    <div class="mb-6">
                        <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Giá</label>
                        <input type="text" id="product-price"
                            placeholder="..." required
                            class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 ">
                    </div>
                    <div class="mb-6">
                        <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Giá niêm yết</label>
                        <input type="text" id="product-listed"
                            placeholder="..." required
                            class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 ">
                    </div>
                    <div class="mb-6">
                        <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Giá khuyến mãi</label>
                        <input type="text" id="product-promotional"
                            placeholder="..." required
                            class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 ">
                    </div>
                    <div class="mb-6">
                        <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Mô tả</label>
                        <input type="text" id="product-describe"
                            placeholder="..." required
                            class="block w-full px-4 py-6 leading-tight placeholder-gray-400 bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 ">
                    </div>
                    <div class="mb-6">
                        <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Xếp hạng</label>
                        <input type="text" id="product-rating"
                            placeholder="..." required
                            class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 ">
                    </div>
                    <div class="mb-6">
                        <label for="" class="block mb-2 text-sm font-medium dark:text-gray-400">Tích cực</label>
                        <input type="text" id="product-active"
                            placeholder="..." required
                            class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 ">
                    </div>
                    <button class="px-4 py-2 text-base text-gray-100 bg-blue-600 rounded hover:bg-blue-500">Thêm</button>
                    <a class="px-[16px] py-[12px] text-base text-gray-100 bg-blue-600 rounded hover:bg-blue-500" href="/admin">admin</a>
                    </div>
                </form>
            </div>
        </section>
    `;
};
export default Addproduct;

// const productListed = document.getElementById("product-listed"); // giá niêm yết
// const productPromotional = document.getElementById("product-promotional"); // giá khuyến mãi
// const productRating = document.getElementById("product-rating"); // xếp hạng
// const productDescribe = document.getElementById("product-describe"); // mô tả
// const productActive = document.getElementById("product-active"); // tích cực