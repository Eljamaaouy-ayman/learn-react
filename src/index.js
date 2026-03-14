import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloWorld from './helloworld/helloworld';
// import Textfield from './forms/textfield';
// import Fruit from './fruits/fruit';
// import Counter from './counter/counter';
// import Event from './events/event';
import Form from './Formss/Form';
// import Toggle from './toggle/toggleName';
import ProductList from './tps/store/productList';
// import Page from './LanguageSwitcher/Page';
// import FormValidationBeginner from './tps/FormValidation/FormValidationBeginner';
import CarList from './Car/CarList'
import Maths from './UseMemo/Maths';
import UsersApp from './tps/Users/UsersApp';
// import FormValidation from './tps/FormValidation/FormValidation';
// import App from './Router/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const fruitsArray = [
//   'strawberry',
//   'banana',
//   'orange',
//   'Apple',
//   'lemon',
//   'water melon'
// ]
root.render(
    <UsersApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
