import data from '../../db.json' assert { type:'json' }
const DetailsProduct = function (id) {
    const book = data.books.find((item) => item.id == id);
    return /*html*/ `
    <div class="grid grid-cols-1 gap-4">
        <div class="mt-[20px] rounded-lg bg-gray-200 overflow-hidden">
            <section class="py-10 font-poppins bg-white">
                <div class="max-w-6xl px-4 mx-auto">
                    <div class="flex flex-wrap mb-24 -mx-4">

                        <div class="w-full px-4 mb-8 md:w-1/3 md:mb-0 border-r border-solid border-[#F2F2F2]">
                            <div class="sticky top-0 overflow-hidden">
                                <div class="relative mb-6 lg:mb-10 lg:h-96">
                                    <a class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                                            </path>
                                        </svg>
                                    </a>
                                    <img class="object-contain w-full lg:h-full" src="${book.images[0] ? `${book.images[0].base_url}`:"chưa cập nhật"}" alt="chưa cập nhật">
                                    <a class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="flex-wrap hidden -mx-2 md:flex">
                                    <div class="w-1/2 p-2 sm:w-1/4">
                                        <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                        <img class="object-contain w-full lg:h-28" src="${book.images[0] ? `${book.images[0].base_url}`:"chưa cập nhật"}" alt="chưa cập nhật">
                                        </a>
                                    </div>
                                    <div class="w-1/2 p-2 sm:w-1/4">
                                        <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                        <img class="object-contain w-full lg:h-28" src="${book.images[1] ? `${book.images[1].base_url}`:"chưa cập nhật"}" alt="chưa cập nhật">
                                        </a>
                                    </div>
                                    <div class="w-1/2 p-2 sm:w-1/4">
                                        <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                        <img class="object-contain w-full lg:h-28" src="${book.images[2] ? `${book.images[2].base_url}`:"chưa cập nhật"}" alt="chưa cập nhật">
                                        
                                        </a>
                                    </div>
                                    <div class="w-1/2 p-2 sm:w-1/4">
                                        <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                        <img class="object-contain w-full lg:h-28" src="${book.images[3] ? `${book.images[3].base_url}`:"chưa cập nhật"}" alt="chưa cập nhật">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full px-4 md:w-2/3">
                            <div class="lg:pl-20">
                                <div class="mb-6 ">
                                    <h2 class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-[#242424] md:text-2xl">
                                        ${book.name}
                                    </h2>
                                    <div class="flex flex-wrap items-center mb-6">
                                        <ul class="flex mb-4 mr-2 lg:mb-0">
                                            <li>
                                                <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-black bi bi-star " viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                </path>
                                                </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-black bi bi-star " viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                </path>
                                                </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-black bi bi-star " viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                </path>
                                                </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-black bi bi-star " viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                </path>
                                                </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-black bi bi-star " viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                </path>
                                                </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <a class="mb-4 text-xs hover:text-blue-600 text-[#787878] dark:hover:text-gray-300 lg:mb-0" href="#">
                                            <span class="border-r border-[#C7C7C7] border-solid pr-[17px]"> Xem 2942 đánh giá </span>
                                            <span class="pl-[8px]"> Đã bán 1000+ </span>
                                        </a>
                                    </div>
                                    <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                        <span>${book.list_price}đ</span>
                                        <span class="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">${book.original_price}₫</span>
                                    </p>
                                </div>
                                <div class="flex flex-wrap items-center mb-6">
                                    <div class="mb-4 mr-4 lg:mb-0">
                                        <div class="w-28">
                                            <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                                <button class="w-20 h-full text-gray-600 bg-white border rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                                                    <span class="m-auto text-2xl font-thin">-</span>
                                                </button>
                                                <input type="number" class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 outline-none dark:placeholder-gray-400 bg-white focus:outline-none text-md hover:text-black border border-solid border-[#ECECEC]" placeholder="1">
                                                <button class="w-20 h-full text-[#787878] bg-white border rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                                                    <span class="m-auto text-2xl font-thin">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4 lg:mb-0">
                                    <div class="flex gap-4 mb-6">
                                        <a href="#" class="w-[300px] px-4 py-3 text-center text-white border border-transparent bg-[#FF3945] hover:border-blue-500 hover:text-blue-70 rounded-xl">
                                            Buy now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        </div>
    </div>
    `;
}

export default DetailsProduct;