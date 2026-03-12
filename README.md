# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Additional Resources
//background-color: gray-50
//button-bg: blue-600
//button-hover-bg: blue-700
//card-bg: white
//card-shadow: shadow-md
//maintext-color: text-gray-900
//secondarytext-color: text-gray-500
//border-color: border-gray-200
//border-hover-color: border-gray-300
//input-bg: white
//input-border: border-gray-300
//input-focus-border: border-blue-500
//input-placeholder-color: text-gray-400
//input-focus-placeholder-color: text-gray-400
//input-focus-bg: white
//discount-color: text-red-500


ecommerce-app/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│
├── src/
│
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   │
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.css
│   │   │
│   │   ├── CartItem/
│   │   │   └── CartItem.jsx
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── Product/
│   │   │   └── ProductDetails.jsx
│   │   │
│   │   ├── Cart/
│   │   │   └── Cart.jsx
│   │   │
│   │   ├── Checkout/
│   │   │   └── Checkout.jsx
│   │   │
│   │   ├── Login/
│   │   │   └── Login.jsx
│   │   │
│   │   ├── Register/
│   │   │   └── Register.jsx
│
│   ├── context/
│   │   └── CartContext.jsx
│
│   ├── hooks/
│   │   └── useCart.js
│
│   ├── services/
│   │   └── api.js
│
│   ├── utils/
│   │   └── helpers.js
│
│   ├── routes/
│   │   └── AppRoutes.jsx
│
│   ├── styles/
│   │   └── global.css
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md