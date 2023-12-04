import product01 from './images/01.jpeg';
import product02 from './images/02.jpeg';
import product03 from './images/03.jpeg';
import product04 from './images/04.jpeg';
import product05 from './images/05.jpeg';
import product06 from './images/06.jpeg';
import product07 from './images/07.jpeg';
import product08 from './images/08.jpeg';
import product09 from './images/09.jpeg';
import product10 from './images/10.jpeg';

export interface IProduct {
    img: string;
    alt: string;
    title: string;
    count: number;
    price: number;
    topOffset: string;
    id: number;
}

 const productsList: IProduct[] = [
    {img: product01, alt:'flowers', title: 'Snowfall', price: 70, count: 1, topOffset: '0px', id: 0},
    {img: product02, alt:'flowers', title: 'Dawn\'s Delight', price: 70, count: 0, topOffset: '-14px', id: 1},
    {img: product03, alt:'flowers', title: 'Pink Elegance', price: 70, count: 0, topOffset: '-55px', id: 2},
    {img: product04, alt:'flowers', title: 'Rustic Charm', price: 70, count: 0, topOffset: '-10px', id: 3},
    {img: product05, alt:'flowers', title: 'Autumn Symphony', price: 70, count: 0, topOffset: '-10px', id: 4},
    {img: product06, alt:'flowers', title: 'Rosy Delight', price: 70, count: 0, topOffset: '-30px', id: 5},
    {img: product07, alt:'flowers', title: 'Serenity', price: 89, count: 0, topOffset: '0px', id: 6},
    {img: product08, alt:'flowers', title: 'Blue Harmony', price: 55, count: 0, topOffset: '-15px', id: 7},
    {img: product09, alt:'flowers', title: 'Mystical Majesty', price: 80, count: 0, topOffset: '-25px', id: 8},
    {img: product10, alt:'flowers', title: 'Blazing Blossoms', price: 70, count: 0, topOffset: '-20px', id: 9},
]

export default productsList;