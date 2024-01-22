import Header from "../components/header"
import Footer from "../components/footer"

const Details = function() {
    return /*html*/`
    ${Header()}
    <div class="w-[1200px] max-w-full my-0 mx-auto"> 
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div class="h-32 rounded-lg bg-gray-200"></div>
            <div class="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
        </div>
        <div class="grid grid-cols-1 gap-4">
            <div class="mt-[20px] rounded-lg bg-gray-200 overflow-hidden">
                <section>
                    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <li>
                        <a href="#" class="group block overflow-hidden">
                            <img
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt=""
                            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />
                
                            <div class="relative bg-white pt-3">
                            <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Basic Tee
                            </h3>
                
                            <p class="mt-2">
                                <span class="sr-only"> Regular Price </span>
                
                                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                            </p>
                            </div>
                        </a>
                        </li>
                
                        <li>
                        <a href="#" class="group block overflow-hidden">
                            <img
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt=""
                            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />
                
                            <div class="relative bg-white pt-3">
                            <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Basic Tee
                            </h3>
                
                            <p class="mt-2">
                                <span class="sr-only"> Regular Price </span>
                
                                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                            </p>
                            </div>
                        </a>
                        </li>
                
                        <li>
                        <a href="#" class="group block overflow-hidden">
                            <img
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt=""
                            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />
                
                            <div class="relative bg-white pt-3">
                            <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Basic Tee
                            </h3>
                
                            <p class="mt-2">
                                <span class="sr-only"> Regular Price </span>
                
                                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                            </p>
                            </div>
                        </a>
                        </li>
                
                        <li>
                        <a href="#" class="group block overflow-hidden">
                            <img
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt=""
                            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />
                
                            <div class="relative bg-white pt-3">
                            <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Basic Tee
                            </h3>
                
                            <p class="mt-2">
                                <span class="sr-only"> Regular Price </span>
                
                                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                            </p>
                            </div>
                        </a>
                        </li>
                    </ul>
                    </div>
                </section>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4">
            <div class="h-32 mt-[20px] rounded-lg bg-gray-200"></div>
        </div>
    </div>


    ${Footer()}
    `


}

export default Details;

