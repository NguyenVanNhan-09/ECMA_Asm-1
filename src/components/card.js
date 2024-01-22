const Card = function (book) {
  return /*html*/`
  <div class = "overflow-hidden ">
    <a href="/details" class="group block overflow-hidden h-full">
      <img
        class="h-[180px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[200px] "
        src="${book.images[0].base_url}"
        alt=""
      />
      <div class="relative bg-white pt-6 p-2 flex flex-col">
        <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
          ${book.name}
        </h3>

        <div class="mt-2 flex">
          <span class="tracking-wider text-gray-900 flex pr-[7px] border-r border-[#C7C7C7] border-solid"> 
            <img src="../../public/Star.png" alt="star" class="h-3 w-3"/>
            <img src="../../public/Star.png" alt="star" class="h-3 w-3"/>
            <img src="../../public/Star.png" alt="star" class="h-3 w-3"/>
            <img src="../../public/Star.png" alt="star" class="h-3 w-3"/>
            <img src="../../public/Star.png" alt="star" class="h-3 w-3"/>
          </span>
          <span class="sold flex text-[11px] text-[#787878] pl-[7px]"> 
              <p class="pr-[4px]">Đã bán</p>
              <div>999+</div> 
          </span>
        </div>
        <p class="mt-2 ">
          <span class="tracking-wider text-[16px] text-[#FF424E]">${book.original_price} đ</span>
        </p>
      </div>
    </a>
  </div>
  `
}

export default Card;