import Navigo from 'navigo'
// Configure - Cấu hình
const router = new Navigo('/', { linksSelector: "a", hash: true});

function render(container, component) {
    document.querySelector(container).innerHTML = component()
}

export {
    router,
    render
}