
// import {preloader} from '../preloader';
import LocomotiveScroll from 'locomotive-scroll';
import Menu from './menu';

// menu (<nav> element)
const menuEl = document.querySelector('.menu');

    // initialize the smooth scroll
    const scroll = new LocomotiveScroll({el: menuEl, smooth: true});

    // initialize custom cursor
    // const cursor = new Cursor(document.querySelector('.cursor'));

    // initialize menu
    new Menu(menuEl);