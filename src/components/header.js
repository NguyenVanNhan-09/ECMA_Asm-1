import "../../style.css"
const Header = function () {
  // Backticks - string interpolation
  return /*html*/`
    <header class="bg-[#1a94ff]">
      <div class="gird">
        <div class="gird__row px-0 py-4 items-center">
          <div class="flex grow justify-start">
            <div class="">
               <a href="/"><img src="../public/logo_tiki.png" alt="" class=" w-[83px] h-[63px]"></a>
            </div>
          </div>
          <div class="flex grow-[6]">
            <div class="flex-1 flex h-[40px] items-center justify-center">
              <input type="text" class=" text-sm p-2.5 w-4/5 h-full outline-0 border-none rounded-l-sm">
              <div class=" flex justify-center items-center w-[120px] h-full relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute left-2 w-[20px] h-[20px] text-white mr-2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <button class="text-xs text-white h-full w-full bg-[#0D5CB6] outline-0 border-none rounded-r-sm">Tìm kiếm</button>
              </div>
            </div>
          </div>
          <div class=" flex grow justify-end">
            <div class=" flex justify-center items-center">
              <img class="w-[32px] h-[32px]" src="../public/icons/user.png" alt="">
              <div class=" text-white pl-2">
                <div class="text-[11px] leading-loose">đăng nhập/đăng ký</div>
                <div class=" text-[13px]">tài khoản</div>
              </div>
            </div>
            <div class=" flex justify-center items-center ml-8">
              <img class=" w-[32px] h-[32px]" src="../public/icons/cart.png" alt="">
              <div class="text-[11px] text-white pl-2">Giỏ hàng</div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full py-5 px-0 bg-[#F5F5FA]"></div>
    </header>
  `
}

export default Header