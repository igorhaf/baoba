//require('./bootstrap');
import { createApp } from 'vue';
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ColumnOne from "./components/ColumnOne.vue";
import ColumnTwo from "./components/ColumnTwo.vue";
import ColumnThree from "./components/ColumnThree.vue";

const app = createApp({});

app.component('header-component', HeaderComponent);
app.component('footer-component', FooterComponent);
app.component('column-one', ColumnOne);
app.component('column-two', ColumnTwo);
app.component('column-three', ColumnThree);

app.mount('#app');
