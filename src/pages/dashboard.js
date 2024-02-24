import { useState, useEffect } from "../ultilities";
const Dashboard = function () {
  const [books, setBooks] = useState([]);
    useEffect(function () {
    fetch("http://localhost:3000/books")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setBooks(data);
      });
    }, []);

    useEffect(function(){
        const deleteBtns = document.querySelectorAll(".delete-btn")
        deleteBtns.forEach(function(btn){
            btn.onclick = function(){
                const cf = confirm("đã chắc chắn xóa chưa");
                if(cf){
                    const id = btn.dataset.id;
                    handleDeleteBook(id);
                }
            }
        })
    });

    const handleDeleteBook = function(id){
        fetch("http://localhost:3000/books/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    };

  return /*html*/ `
        <section class="items-center lg:flex bg-white h-full font-poppins dark:bg-gray-800 ">
            <div class="justify-center flex-1 max-w-7xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <h1 class="text-4xl text-white text-center py-4">Admin</h1>
                <div class="pt-4 rounded shadow bg-stone-100 dark:bg-gray-900">
                    <div class="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
                        <h2 class="mb-4 text-xl font-bold md:mb-0 dark:text-gray-400">Dashboard</h2>
                        <div class="flex px-6 py-2 mb-4 border border-gray-600 rounded-md md:mb-0 dark:border-gray-400">
                            <input type="text"
                                class="outline-0 w-full pr-4 text-sm text-gray-700 bg-stone-100 dark:text-gray-400 dark:bg-gray-900 placeholder-text-100 "
                                placeholder="search...">
                            <button
                                class="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-300 hover:text-blue-600">
                                <span class="mr-2 text-xs ">Go</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="px-8 py-4 overflow-x-auto">
                        <a class="px-2 py-2 bg-cyan-400" href="/addProduct">thêm mới</a>
                        <table class="w-full table-auto mt-4">
                            <thead>
                                <tr class="text-sm text-left text-gray-500 dark:text-gray-400">
                                    <th class="px-6 pb-3 font-medium">Name </th>
                                    <th class="px-6 pb-3 font-medium">Describe</th>
                                    <th class="px-6 pb-3 font-medium">Price</th>
                                    <th class="px-6 pb-3 font-medium">Images </th>
                                    <th class="px-6 pb-3 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${books.map(function (book) {

                                  return /*html*/ `
                                        <tr class="text-sm bg-white dark:text-gray-400 dark:bg-gray-800">
                                            <td class=" px-6 py-5 font-medium">
                                                <p class="">${book.name}</p>
                                            </td>
                                            <td class="px-6 py-5 font-medium self-center">${book.short_description}</td>
                                            <td class="px-6 py-5 font-medium ">${book.price}</td>
                                            <td class="px-6 py-5 font-medium">
                                                <img class="w-[100px] h-[100px]" src="${book.images?.[0].base_url}"/>
                                            </td>
                                            <td class="flex px-6 py-5">  
                                                <a href="/updateProduct/${book.id}"
                                                    class="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="w-4 h-4 mr-3 bi bi-pencil-square"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fill-rule="evenodd"
                                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                    </svg>
                                                </a>
                                                <button
                                                    data-id="${book.id}"
                                                    class="delete-btn font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="w-4 h-4 bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    `;
                                }).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export default Dashboard;
