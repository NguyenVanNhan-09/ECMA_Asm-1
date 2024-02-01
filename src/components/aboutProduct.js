import data from '../../db' assert {type: 'json'}
const AboutProduct = function(id){
    const book = data.books.find((item) => item.id == id); 
    return /*html*/ `
    <div class="mt-[20px] rounded-lg bg-white p-3 ">
        <div> 
            <div class="text-[#333333] text-[20px] mb-3">Mô tả sản phẩm</div>
            <div>
                <div class="text-[14px] text-[#242424] mb-5">${book.description}</div>
                <div class="text-[13px] text-[#242424] mb-5">Một vài trích dẫn:</div>
                <div class="text-[14px] text-[#242424] mb-5">${book.short_description}</div>
            </div>
            <div class="flex justify-center">
                <a
                    href="/download"
                    class="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-[#189EFF] focus:outline-none focus:ring active:text-[#189EFF]">
                    <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg
                        class="h-5 w-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                    </span>
                    <span class="text-sm font-medium transition-all group-hover:me-4">Xem thêm nội dung </span>
                </a>
            </div>
        </div>
    </div>
    `
}
export default AboutProduct;