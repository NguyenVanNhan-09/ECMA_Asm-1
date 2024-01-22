import Header from "../components/header"
import Card from "../components/card"
import Footer from "../components/footer"
// import Advertisement from "../components/advertisement"

// Data
import data from '../../db' assert {type: 'json'}
// Pages
const HomePage = function () {
  return /*html*/`
      ${Header()}


      <div class="w-[1200px] max-w-full my-0 mx-auto"> 
        <div class ="mx-auto max-w-screen-xl ml-[-5px] mr-[-5px] mt-[16px]">  
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            <div class="rounded-lg bg-white">
                <div class="flex h-full flex-col justify-between border-e bg-white">
                <div class="px-4 pt-0 pb-0">
                  <ul class="space-y-1">
                    <li>
                      <a href="" class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                      Danh Mục Sản Phẩm
                      </a>
                    </li>
              
                    <li>
                      <details class="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                          class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <span class="text-sm font-medium"> English Books </span>
              
                          
                        </summary>
                      </details>
                    </li>
              
                    <li>
                      <a
                        href=""
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                      Sách tiếng Việt
                      </a>
                    </li>
              
                    <li>
                      <a
                        href=""
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                      Văn phòng phẩm
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                      Quà lưu niệm
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="rounded-lg bg-white lg:col-span-3">
              <h1 class="text-2xl text-black mb-[6px]">Nhà Sách Tiki</h1>
              <section
                class="
                relative bg-[url(../../../../public/banner.png)] bg-cover bg-center bg-no-repeat h-[285px]
                ">
              </section>
              <div class = "mt-5 border-b border-[#F2F2F2] border-solid">
                <div class="sm:hidden">
                  <label for="Tab" class="sr-only">Tab</label>

                  <select id="Tab" class="w-full rounded-md border-gray-200">
                    <option>details</option>
                    <option>Messages</option>
                    <option>Archive</option>
                    <option select>Notifications</option>
                  </select>
                </div>

                <div class="hidden sm:block">
                  <div class="border-b border-gray-200">
                    <nav class="-mb-px flex gap-6" aria-label="Tabs">
                      <a
                        href="/details"
                        class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      >
                        details
                      </a>

                      <a
                        href="#"
                        class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      >
                        Messages
                      </a>

                      <a
                        href="#"
                        class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      >
                        Archive
                      </a>

                      <a
                        href="#"
                        class="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
                        aria-current="page"
                      >
                        Notifications
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                ${data.books.map(function (book) {
                  return Card(book)
                }).join("")}
              </div>
            </div>

          </div>
        </div>
      </div>


      ${Footer()}
    `
}

export default HomePage;

