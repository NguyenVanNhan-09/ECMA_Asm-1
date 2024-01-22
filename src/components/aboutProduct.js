import data from '../../db' assert {type: 'json'}
const AboutProduct = function(){
    return /*html*/ `
    <div class="mt-[20px] rounded-lg bg-white p-3 ">
        <div> 
            <div class="text-[#333333] text-[20px] mb-3">Mô tả sản phẩm</div>
            <div>
                <div class="text-[14px] text-[#242424] mb-5">KỶ LUẬT vốn là ván cờ bạn phải tự đấu với chính mình. Thắng - bạn sẽ có được “bản năng của người mạnh mẽ nhất”, đó là sự tự kiểm soát bản thân. Thua - bạn mãi sống trong cảm giác tạm bợ, nuối tiếc. Càng dễ dàng dung túng cho những thói quen trì hoãn bao nhiêu, cuộc sống của bạn sẽ đi càng nhanh tới sự mất kiểm soát và thiếu quy hoạch bấy nhiêu.</div>
                <div class="text-[14px] text-[#242424] mb-5">Hãy kiên trì đặt ra yêu cầu cao với bản thân, từ chối sự mê hoặc của thói tùy tiện đồng thời thiết lập cho mình những thói quen tốt trong hành vi thường ngày. Sự nỗ lực sẽ luôn được đền đáp xứng đáng nếu bạn biết cách đầu tư công sức và thời gian. Bởi một ngày nào đó trong tương lai, những gì bạn làm sẽ phản chiếu đầy đủ trên chính con người và cuộc đời của bạn.</div>
                <div class="text-[14px] text-[#242424] mb-5">CÀNG KỶ LUẬT, CÀNG TỰ DO - Mong rằng tại thời điểm kết thúc hành trình với cuốn sách, bạn đã là một phiên bản khác kỷ luật hơn, nhưng tự do hơn.</div>
                <div class="text-[13px] text-[#242424] mb-5">Một vài trích dẫn:</div>
                <div class="text-[14px] text-[#242424] mb-5">“Bạn cần phải biết rằng tình yêu là hoa thêu trên gấm. Có thì tốt, không có cũng chẳng sao, thực sự không đáng để bạn vì nó mà từ bỏ sự nghiệp, từ bỏ cơ hội thăng tiến thậm chí là từ bỏ cả cuộc đời vinh hoa sau này.”</div>
                <div class="text-[14px] text-[#242424] mb-5">“Những người trưởng thành như chúng ta nên nhìn cuộc sống rộng hơn một chút, ghen có thể có, tức giận có thể có. Thế nhưng, có những cảm xúc chỉ nên lướt qua trong lòng, ngày hôm sau ngủ dậy hãy để nó rời đi cùng với đêm đen mới là cách lựa chọn tốt nhất.”</div>
                <div class="text-[14px] text-[#242424] mb-5">“Mỗi người đều có kinh nghiệm sống không giống nhau, yêu cầu không giống nhau. Điều giống nhau là chúng ta đều nên tìm mọi cách trau dồi khả năng của bản thân để sống tốt cuộc đời này.”</div>
                <div class="text-[14px] text-[#242424] mb-5">Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</div>
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