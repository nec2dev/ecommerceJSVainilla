const PATHS = {
    home: {
        path: "/",
        template: `
        <div class="frame-container">
        <iframe class="responsive-iframe" src="./pages/home.html"></iframe>
        </div>
        `,
    },
    checkout: {
        path: "/comprar",
        template: `
        <div class="frame-container">
            <iframe class="responsive-iframe" src="./pages/checkout.html" frameborder="0"></iframe>
        </div>
        `,
    },
    error404: {
        path: "/*",
        template: `
        <div class="frame-container">
            <iframe class="responsive-iframe" src="./pages/error404.html" frameborder="0"></iframe>
        </div>
        `,
    },
    login: {
        path: "/iniciar-sesion",
        template: `
        <div class="frame-container">
            <iframe class="responsive-iframe" src="./pages/login.html" frameborder="0"></iframe>
        </div>
        `,
    },
    signup: {
        path: "/darse-de-alta",
        template: `
        <div class="frame-container">
            <iframe class="responsive-iframe" src="./pages/signup.html" frameborder="0"></iframe>
        </div>
        `,
    },
    shop: {
        path: "/tienda",
        template: `
        <div class="frame-container">
            <iframe class="responsive-iframe" src="./pages/shop.html" frameborder="0"></iframe>
        </div>
        `,
    },
    contact: {
        path: "/contactos",
        template: `
        <div class="frame-container">
            <iframe class="responsive-iframe" src="./pages/contact.html" frameborder="0"></iframe>
        </div>
        `,
    },
    cart: {
        path: "/carrito",
        template: `
        <div class="frame-container">
            <iframe class="responsive-iframe" src="./pages/cart.html" frameborder="0"></iframe>
        </div>
        `,
    },
    whish: {
        path: "/lista-de-deseos",
        template: `
        <div class="frame-container">
            <iframe class="responsive-iframe" src="./pages/whish.html" frameborder="0"></iframe>
        </div>
        `,
    }
}