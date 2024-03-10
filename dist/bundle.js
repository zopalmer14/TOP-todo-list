/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/* CSS Style Reset */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Variable Declaration */

:root {
    --white-accent: white;
    --gray-accent: whitesmoke;
    --blue-accent: #318CE7;
    --low-accent: green;
    --medium-accent: orange;
    --high-accent: red;
}

/* Base Styling */

body {
    font-size: 16px;
    font-family: Garamond, sans-serif;
}

.showing {
    display: block !important;
    transform-origin: top;
    animation: 0.5s ease-in-out fadeIn;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    
    to {
        opacity: 1;
        transform: scaleY(1);
    }
}

.content {
    display: grid;
    grid-template: 75px 1fr / minmax(250px, 1fr) 4fr;
    height: 100vh;
}

.content ul[data-title]::before {
    content: attr(data-title);
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
}

.content span.material-icons.delete:hover {
    color: #E30000;
    /* transform: scale(1.05, 1.05);
    backface-visibility: hidden; */
    cursor: pointer;
    transition: 0.5s;
}

.content span.material-icons.edit:hover {
    color: var(--low-accent);
    cursor: pointer;
    transition: 0.5s;
}

/* HEADER STYLING */

.content .header {
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-left: 1rem;

    background-color: var(--blue-accent);
    color: var(--white-accent);
    font-size: 2rem;
    font-weight: bold;
}

.content .header .material-icons {
    font-size: 36px;
}

/* SIDEBAR STYLING */

.content #sidebar {
    padding: 2rem 1rem;
}

.content #sidebar #nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.content #sidebar #nav ul {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.content #sidebar #nav li {
    display: flex;
    justify-content: space-between;

    background-color: var(--white-accent);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--white-accent);
    border-radius: 0.25rem;
}

.content #sidebar #nav li:hover {
    background-color: var(--gray-accent);
    border-color: var(--blue-accent);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: 0.5s;
}

.content #sidebar #nav li.active {
    background-color: rgba(49, 140, 231, 0.8);
    border-color: rgba(49, 140, 231, 0.5);
    color: var(--white-accent);
    font-weight: bold;
}

.content #sidebar #nav li.active:hover {
    box-shadow: none;
}

.content #sidebar #nav li > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.content #sidebar #nav li .material-icons.md-18 {
    margin-right: 0.25rem;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 50%;
} 

.content #sidebar #nav li.add-project {
    order: 1;
} 

/* MAIN PANEL STYLING */

.content .main-panel {
    background-color: var(--gray-accent);
    padding: 2rem;
}

.content .main-panel .todo-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.content .main-panel .todo-list .todo-item {
    border-radius: 0.25rem;
}

.content .main-panel .todo-item:has(.item-complete.finished) {
    opacity: 0.5;
    transition: 0.5s;
}

.content .main-panel .todo-item .banner {
    background-color: var(--white-accent);
    border: 1.5px solid var(--white-accent);
    border-radius: 0.25rem;
    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
    padding: 0.5rem 1rem;

    display: flex;
    justify-content: space-between;
    z-index: 2;
}

.content .main-panel .todo-item .banner.ext-showing {
    border-bottom: 1.5px solid lightgray;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: 0.5s ease-in-out;
}

.content .main-panel .todo-item .banner > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.content .main-panel .todo-item .banner .item-complete {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
    border-radius: 0.25rem;
    width: 1rem;
    height: 1rem;

    color: transparent;
    user-select: none;
    font-weight: bold;
}

.content .main-panel .todo-item .banner .item-complete:hover {
    background-color: rgba(49, 140, 231, 0.3);
    cursor: pointer;
    transition: 0.5s;
}

.content .main-panel .todo-item .banner .item-complete.finished {
    border-color: var(--blue-accent);
    background-color: var(--blue-accent);
    color: var(--white-accent);
    transition: 0.25s;
}

.content .main-panel .todo-item .banner .item-title {
    font-weight: bold;
}

.content .main-panel .todo-item:has(.item-complete.finished) .item-title {
    text-decoration: line-through;
    transition: 0.5s;
}

.content .main-panel .todo-item .banner .item-desc {
    color: var(--blue-accent);
    font-size: 0.75rem;
    text-transform: uppercase;
    user-select: none;

    padding: 0.3rem 0.6rem;
    border: 1px solid var(--blue-accent);
    border-radius: 0.25rem;
}

.content .main-panel .todo-item .banner .item-desc:hover {
    color: var(--white-accent);
    background-color: var(--blue-accent);
    cursor: pointer;
    transition: 0.5s;
}

.content .main-panel .todo-item .banner .item-prio {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin: 0 0.25rem;
}

.content .main-panel .todo-item .banner .item-prio.low {
    background-color: var(--low-accent);
}

.content .main-panel .todo-item .banner .item-prio.medium {
    background-color: var(--medium-accent);
}

.content .main-panel .todo-item .banner .item-prio.high {
    background-color: var(--high-accent);
}

.content .main-panel .todo-item .desc-extension {
    display: none;

    background-color: var(--white-accent);
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
    padding: 0.75rem calc(2.5rem + 18px);
}

.content .main-panel .todo-item:has(.item-complete.finished) .desc-extension {
    text-decoration: line-through;
    transition: 0.5s;
}

/* ADD TO-DO ITEM */

.content .main-panel .add-item {
    font-weight: bold;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;

    display: flex;
    align-items: center;
    order: 1;
} 

.content .main-panel .add-item:hover {
    background-color: var(--white-accent);
    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all 0.5s;
} 

.content .main-panel .add-item span {
    margin-right: 22px;
    border: 1px solid black;
    border-radius: 50%;
} 

.content .main-panel .add-item .material-icons.md-18 { 
    font-size: 18px; 
}

/* DIALOG / FORM STYLING */

.project-form .main-panel button {
    align-self: flex-end;
}

dialog {
    padding: 0;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
}

dialog::backdrop {
    backdrop-filter: blur(0.25rem);
}

form {
    display: grid;
    grid-template-rows: 50px 1fr;

    background-color: var(--gray-accent);
    width: clamp(300px, 50vw, 600px);
    min-height: 40vh;
}

form .banner, .main-panel {
    padding: 1rem;
}

form .banner {
    display: flex;
    align-items: center;

    background-color: var(--blue-accent);
    color: var(--white-accent);
    font-size: 1.5rem;
    font-weight: bold;
}

form .main-panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.task-form .main-panel > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

form .main-panel input, textarea {
    padding: 0.5rem;
    background-color: var(--gray-accent);
    border: 1px solid var(--gray-accent);
    border-radius: 0.25rem;
}

.task-form .main-panel textarea {
    min-height: 5rem;
    resize: none;
}

form .main-panel input:focus, textarea:focus {
    border: 1px solid var(--blue-accent);
    outline: none;
}

.task-form .main-panel .label-float {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.task-form .main-panel legend, label[for='dueDate'] {
    font-weight: bold;
}

.task-form .main-panel input[type='date'] {
    color: var(--blue-accent);
    border: 1px solid var(--blue-accent);
}

.task-form .main-panel #last-row {
    display: flex;
    justify-content: space-between;
}

.task-form .main-panel fieldset {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.task-form .main-panel fieldset legend {
    float: left;
}

.task-form .main-panel fieldset input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    margin: 0;
}

.task-form .main-panel fieldset .container {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
}

.task-form .main-panel fieldset .container.low {
    color: var(--low-accent);
    border: 1px solid var(--low-accent);
}

.task-form .main-panel fieldset .container.medium {
    color: var(--medium-accent);
    border: 1px solid var(--medium-accent);
}

.task-form .main-panel fieldset .container.high {
    color: var(--high-accent);
    border: 1px solid var(--high-accent);
}

.task-form .main-panel fieldset .container:hover {
    color: var(--white-accent);
    cursor: pointer;
    transition: 0.5s;
}

.task-form .main-panel fieldset .container.low:hover {
    background-color: var(--low-accent);
}

.task-form .main-panel fieldset .container.medium:hover {
    background-color: var(--medium-accent);
}

.task-form .main-panel fieldset .container.high:hover {
    background-color: var(--high-accent);
}

.task-form .main-panel fieldset .container:has(input:checked) {
    color: var(--white-accent);
    transition: 0.5s;
}

.task-form .main-panel fieldset .container.low:has(input:checked) {
    background-color: var(--low-accent);
}

.task-form .main-panel fieldset .container.medium:has(input:checked) {
    background-color: var(--medium-accent);
}

.task-form .main-panel fieldset .container.high:has(input:checked) {
    background-color: var(--high-accent);
}

form .main-panel button {
    padding: 0.5rem 1rem;
    background-color: var(--gray-accent);
    color: var(--blue-accent);
    border: 1px solid var(--blue-accent);
    border-radius: 0.25rem;
}

form .main-panel button:hover {
    background-color: var(--blue-accent);
    color: var(--white-accent);
    cursor: pointer;
    transition: 0.5s;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["\n/* CSS Style Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Variable Declaration */\n\n:root {\n    --white-accent: white;\n    --gray-accent: whitesmoke;\n    --blue-accent: #318CE7;\n    --low-accent: green;\n    --medium-accent: orange;\n    --high-accent: red;\n}\n\n/* Base Styling */\n\nbody {\n    font-size: 16px;\n    font-family: Garamond, sans-serif;\n}\n\n.showing {\n    display: block !important;\n    transform-origin: top;\n    animation: 0.5s ease-in-out fadeIn;\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n        transform: scaleY(0);\n    }\n    \n    to {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n}\n\n.content {\n    display: grid;\n    grid-template: 75px 1fr / minmax(250px, 1fr) 4fr;\n    height: 100vh;\n}\n\n.content ul[data-title]::before {\n    content: attr(data-title);\n    display: block;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.content span.material-icons.delete:hover {\n    color: #E30000;\n    /* transform: scale(1.05, 1.05);\n    backface-visibility: hidden; */\n    cursor: pointer;\n    transition: 0.5s;\n}\n\n.content span.material-icons.edit:hover {\n    color: var(--low-accent);\n    cursor: pointer;\n    transition: 0.5s;\n}\n\n/* HEADER STYLING */\n\n.content .header {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding-left: 1rem;\n\n    background-color: var(--blue-accent);\n    color: var(--white-accent);\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.content .header .material-icons {\n    font-size: 36px;\n}\n\n/* SIDEBAR STYLING */\n\n.content #sidebar {\n    padding: 2rem 1rem;\n}\n\n.content #sidebar #nav {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.content #sidebar #nav ul {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\n.content #sidebar #nav li {\n    display: flex;\n    justify-content: space-between;\n\n    background-color: var(--white-accent);\n    font-size: 1rem;\n    padding: 0.5rem 1rem;\n    border: 1px solid var(--white-accent);\n    border-radius: 0.25rem;\n}\n\n.content #sidebar #nav li:hover {\n    background-color: var(--gray-accent);\n    border-color: var(--blue-accent);\n    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);\n    cursor: pointer;\n    transition: 0.5s;\n}\n\n.content #sidebar #nav li.active {\n    background-color: rgba(49, 140, 231, 0.8);\n    border-color: rgba(49, 140, 231, 0.5);\n    color: var(--white-accent);\n    font-weight: bold;\n}\n\n.content #sidebar #nav li.active:hover {\n    box-shadow: none;\n}\n\n.content #sidebar #nav li > div {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n}\n\n.content #sidebar #nav li .material-icons.md-18 {\n    margin-right: 0.25rem;\n    font-size: 18px;\n    border: 1px solid black;\n    border-radius: 50%;\n} \n\n.content #sidebar #nav li.add-project {\n    order: 1;\n} \n\n/* MAIN PANEL STYLING */\n\n.content .main-panel {\n    background-color: var(--gray-accent);\n    padding: 2rem;\n}\n\n.content .main-panel .todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.content .main-panel .todo-list .todo-item {\n    border-radius: 0.25rem;\n}\n\n.content .main-panel .todo-item:has(.item-complete.finished) {\n    opacity: 0.5;\n    transition: 0.5s;\n}\n\n.content .main-panel .todo-item .banner {\n    background-color: var(--white-accent);\n    border: 1.5px solid var(--white-accent);\n    border-radius: 0.25rem;\n    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.4);\n    padding: 0.5rem 1rem;\n\n    display: flex;\n    justify-content: space-between;\n    z-index: 2;\n}\n\n.content .main-panel .todo-item .banner.ext-showing {\n    border-bottom: 1.5px solid lightgray;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    transition: 0.5s ease-in-out;\n}\n\n.content .main-panel .todo-item .banner > div {\n    display: flex;\n    align-items: center;\n    gap: 1.5rem;\n}\n\n.content .main-panel .todo-item .banner .item-complete {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid black;\n    border-radius: 0.25rem;\n    width: 1rem;\n    height: 1rem;\n\n    color: transparent;\n    user-select: none;\n    font-weight: bold;\n}\n\n.content .main-panel .todo-item .banner .item-complete:hover {\n    background-color: rgba(49, 140, 231, 0.3);\n    cursor: pointer;\n    transition: 0.5s;\n}\n\n.content .main-panel .todo-item .banner .item-complete.finished {\n    border-color: var(--blue-accent);\n    background-color: var(--blue-accent);\n    color: var(--white-accent);\n    transition: 0.25s;\n}\n\n.content .main-panel .todo-item .banner .item-title {\n    font-weight: bold;\n}\n\n.content .main-panel .todo-item:has(.item-complete.finished) .item-title {\n    text-decoration: line-through;\n    transition: 0.5s;\n}\n\n.content .main-panel .todo-item .banner .item-desc {\n    color: var(--blue-accent);\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    user-select: none;\n\n    padding: 0.3rem 0.6rem;\n    border: 1px solid var(--blue-accent);\n    border-radius: 0.25rem;\n}\n\n.content .main-panel .todo-item .banner .item-desc:hover {\n    color: var(--white-accent);\n    background-color: var(--blue-accent);\n    cursor: pointer;\n    transition: 0.5s;\n}\n\n.content .main-panel .todo-item .banner .item-prio {\n    border-radius: 50%;\n    width: 1rem;\n    height: 1rem;\n    margin: 0 0.25rem;\n}\n\n.content .main-panel .todo-item .banner .item-prio.low {\n    background-color: var(--low-accent);\n}\n\n.content .main-panel .todo-item .banner .item-prio.medium {\n    background-color: var(--medium-accent);\n}\n\n.content .main-panel .todo-item .banner .item-prio.high {\n    background-color: var(--high-accent);\n}\n\n.content .main-panel .todo-item .desc-extension {\n    display: none;\n\n    background-color: var(--white-accent);\n    border-bottom-left-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.4);\n    padding: 0.75rem calc(2.5rem + 18px);\n}\n\n.content .main-panel .todo-item:has(.item-complete.finished) .desc-extension {\n    text-decoration: line-through;\n    transition: 0.5s;\n}\n\n/* ADD TO-DO ITEM */\n\n.content .main-panel .add-item {\n    font-weight: bold;\n    border-radius: 0.25rem;\n    padding: 0.5rem 1rem;\n\n    display: flex;\n    align-items: center;\n    order: 1;\n} \n\n.content .main-panel .add-item:hover {\n    background-color: var(--white-accent);\n    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.4);\n    cursor: pointer;\n    transition: all 0.5s;\n} \n\n.content .main-panel .add-item span {\n    margin-right: 22px;\n    border: 1px solid black;\n    border-radius: 50%;\n} \n\n.content .main-panel .add-item .material-icons.md-18 { \n    font-size: 18px; \n}\n\n/* DIALOG / FORM STYLING */\n\n.project-form .main-panel button {\n    align-self: flex-end;\n}\n\ndialog {\n    padding: 0;\n    border: none;\n    border-radius: 0.25rem;\n    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.4);\n}\n\ndialog::backdrop {\n    backdrop-filter: blur(0.25rem);\n}\n\nform {\n    display: grid;\n    grid-template-rows: 50px 1fr;\n\n    background-color: var(--gray-accent);\n    width: clamp(300px, 50vw, 600px);\n    min-height: 40vh;\n}\n\nform .banner, .main-panel {\n    padding: 1rem;\n}\n\nform .banner {\n    display: flex;\n    align-items: center;\n\n    background-color: var(--blue-accent);\n    color: var(--white-accent);\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\nform .main-panel {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.task-form .main-panel > div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\nform .main-panel input, textarea {\n    padding: 0.5rem;\n    background-color: var(--gray-accent);\n    border: 1px solid var(--gray-accent);\n    border-radius: 0.25rem;\n}\n\n.task-form .main-panel textarea {\n    min-height: 5rem;\n    resize: none;\n}\n\nform .main-panel input:focus, textarea:focus {\n    border: 1px solid var(--blue-accent);\n    outline: none;\n}\n\n.task-form .main-panel .label-float {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.task-form .main-panel legend, label[for='dueDate'] {\n    font-weight: bold;\n}\n\n.task-form .main-panel input[type='date'] {\n    color: var(--blue-accent);\n    border: 1px solid var(--blue-accent);\n}\n\n.task-form .main-panel #last-row {\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-form .main-panel fieldset {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.task-form .main-panel fieldset legend {\n    float: left;\n}\n\n.task-form .main-panel fieldset input {\n    position: absolute;\n    opacity: 0;\n    height: 0;\n    width: 0;\n    margin: 0;\n}\n\n.task-form .main-panel fieldset .container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    padding: 0.5rem 1rem;\n    border-radius: 0.25rem;\n}\n\n.task-form .main-panel fieldset .container.low {\n    color: var(--low-accent);\n    border: 1px solid var(--low-accent);\n}\n\n.task-form .main-panel fieldset .container.medium {\n    color: var(--medium-accent);\n    border: 1px solid var(--medium-accent);\n}\n\n.task-form .main-panel fieldset .container.high {\n    color: var(--high-accent);\n    border: 1px solid var(--high-accent);\n}\n\n.task-form .main-panel fieldset .container:hover {\n    color: var(--white-accent);\n    cursor: pointer;\n    transition: 0.5s;\n}\n\n.task-form .main-panel fieldset .container.low:hover {\n    background-color: var(--low-accent);\n}\n\n.task-form .main-panel fieldset .container.medium:hover {\n    background-color: var(--medium-accent);\n}\n\n.task-form .main-panel fieldset .container.high:hover {\n    background-color: var(--high-accent);\n}\n\n.task-form .main-panel fieldset .container:has(input:checked) {\n    color: var(--white-accent);\n    transition: 0.5s;\n}\n\n.task-form .main-panel fieldset .container.low:has(input:checked) {\n    background-color: var(--low-accent);\n}\n\n.task-form .main-panel fieldset .container.medium:has(input:checked) {\n    background-color: var(--medium-accent);\n}\n\n.task-form .main-panel fieldset .container.high:has(input:checked) {\n    background-color: var(--high-accent);\n}\n\nform .main-panel button {\n    padding: 0.5rem 1rem;\n    background-color: var(--gray-accent);\n    color: var(--blue-accent);\n    border: 1px solid var(--blue-accent);\n    border-radius: 0.25rem;\n}\n\nform .main-panel button:hover {\n    background-color: var(--blue-accent);\n    color: var(--white-accent);\n    cursor: pointer;\n    transition: 0.5s;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/dynamic.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



// back-end SCHEDULE CONTROLLER
const scheduleController = function scheduleController() {
    // list of projects
    const projectList = [];
    const active_project = 0;

    const getProjects = () => projectList;
    const getActiveProject = () => projectList[active_project];
    const setActiveProject = (index) => active_project = index;

    // Project Factory Function (i.e. a list of to-do items)
    function projectItem(title) {
        const toDoList = [];
        const getList = () => toDoList;

        let project_title = title;
        const getTitle = () => project_title;
        const setTitle = (new_title) => project_title = new_title;

        // Task Item Factory Function 
        function toDoItem(title, desc, dueDate, prio) {
            let task_title = title;
            const getTitle = () => task_title;
            const setTitle = (new_title) => task_title = new_title;

            let task_desc = desc;
            const getDesc = () => task_desc;
            const setDesc = (new_desc) => task_desc = new_desc;

            let task_due = dueDate;
            const getDueDate = () => task_due;
            const setDueDate = (new_date) => task_due = new_date;

            let task_prio = prio;
            const getPrio = () => task_prio;
            const setPrio = (new_prio) => task_prio = new_prio;

            return { getTitle, setTitle, getDesc, setDesc, getDueDate, setDueDate, getPrio, setPrio };
        };

        // add to-do item to project
        const addItem = function addItem(title, desc, dueDate, prio) {
            const new_item = toDoItem(title, desc, dueDate, prio);
            toDoList.push(new_item);
        };

        // delete to-do item from project
        const deleteItem = function deleteItem(index) {
            if (index > -1 && index < toDoList.length) {
                toDoList.splice(index, 1); 
            } else {
                console.log(`Error: index out of bounds ${index}`);
            }
        };

        return { getList, getTitle, setTitle, addItem, deleteItem }
    };

    // add project to list
    const addProject = function addProject(title) {
        const new_project = projectItem(title);
        projectList.push(new_project);
    };

    // delete project from list
    const deleteProject = function deleteProject(index) {
        if (index > -1 && index < projectList.length) { 
            projectList.splice(index, 1); 
        } else {
            console.log(`Error: index out of bounds ${index}`);
        }
    };

    return { getProjects, getActiveProject, setActiveProject, addProject, deleteProject };
}();

// DOM MANIPULATION

const DOMController = function DOMController() {
    // creates a list of the personal projects in the sidebar
    const displayProjects = function displayProjects(projects) {
        // dom references
        const personal_projects = document.querySelector('#personal-projects');
        const add_project = document.querySelector('li.add-project');

        // reset the project list and re-add the 'add project' option
        personal_projects.replaceChildren(add_project);

        for (let i = 0; i < projects.length; i++) {
            // create a list item to represent each project
            const curr_project = projects[i];
            const project_item = createProjectItem(curr_project, i);

            // append the list item to the list of personal projects
            personal_projects.appendChild(project_item);
        }

        // helper function which handles creating the project item's
        function createProjectItem(project, projectIndex) {
            // create a list item and assign it the project's index
            const list_item = document.createElement('li');
            list_item.dataset.index = projectIndex;
    
            // create the left side, which contains the logo and project title 
            const item_left_side = createProjectLeftSide();
    
            // create the right side, which contains the edit and delete options
            const item_right_side = createProjectRightSide(); 
    
            // append the left and right sides to the list item
            list_item.appendChild(item_left_side);
            list_item.appendChild(item_right_side);
    
            return list_item;
            
            function createProjectLeftSide() {
                const left_side = document.createElement('div');
    
                // create the logo 
                const logo = document.createElement('span');
                logo.classList.add('material-icons');
                logo.textContent = 'list';
    
                // create a div to hold the title
                const title = document.createElement('div');
                title.textContent = project.getTitle();
    
                // append both to the left side
                left_side.appendChild(logo);
                left_side.appendChild(title);
    
                return left_side;
            }
            
            function createProjectRightSide() {
                const right_side = document.createElement('div');
    
                // create the edit option
                const item_edit = document.createElement('span');
                item_edit.classList.add('material-icons');
                item_edit.classList.add('edit');
                item_edit.textContent = 'edit_note';
                pageInterface.setupEditProject(item_edit);
    
                // create the delete option
                const item_delete = document.createElement('span');
                item_delete.classList.add('material-icons');
                item_delete.classList.add('delete');
                item_delete.textContent = 'delete';
                pageInterface.setupDeleteProject(item_delete);
    
                // append both to the right side
                right_side.appendChild(item_edit);
                right_side.appendChild(item_delete);
    
                return right_side;
            }
        }
    };

    // displays the tasks associated with a given project
    const displayTasks = function displayTasks(project) {
        // dom references
        const task_list = document.querySelector('ul.todo-list');
        const add_task = document.querySelector('li.add-item');

        // set the title of the list to the project title 
        task_list.dataset.title = project.getTitle(); 

        // reset the current task_list and re-add the 'add task' option
        task_list.replaceChildren(add_task);
        
        // grab the task / to-do list
        const tasks = project.getList();

        for (let i = 0; i < tasks.length; i++) {
            // create a list item to represent each task
            const task = tasks[i];
            const task_item = createTaskItem(task, i); 

            // append the item to the task list
            task_list.appendChild(task_item);
        }

        // helper function to create a task item
        function createTaskItem(task, taskIndex) {
            const task_item = document.createElement('li');
            task_item.classList.add('todo-item');
            task_item.dataset.index = taskIndex;

            // create a banner for the task item 
            const task_banner = createBanner();

            // create the desc-extension 
            const task_desc_ext = document.createElement('div');
            task_desc_ext.textContent = task.getDesc();
            task_desc_ext.classList.add('desc-extension');

            // append the banner and desc extension to the task item
            task_item.appendChild(task_banner);
            task_item.appendChild(task_desc_ext);

            return task_item;

            function createBanner() {
                const task_banner = document.createElement('div');
                task_banner.classList.add('banner');

                // build the left side of the banner
                const left_side = createBannerLeft(); 

                // build the left side of the banner
                const right_side = createBannerRight();

                // append both to the banner
                task_banner.appendChild(left_side);
                task_banner.appendChild(right_side);

                return task_banner;
                
                function createBannerLeft() {
                    const left_side = document.createElement('div');

                    // completion status indicator
                    const complete_status = document.createElement('div');
                    complete_status.textContent = 'X';
                    complete_status.classList.add('item-complete');

                    // reactively change the completion status of the item (changes appearance only, nothing in back-end)
                    complete_status.addEventListener('click', (event) => {
                        event.target.classList.toggle('finished');
                    })

                    // task title
                    const task_title = document.createElement('div');
                    task_title.textContent = task.getTitle();
                    task_title.classList.add('item-title');

                    left_side.appendChild(complete_status);
                    left_side.appendChild(task_title);

                    return left_side;
                }

                function createBannerRight() {
                    const right_side = document.createElement('div');

                    // task desc button
                    const task_desc = document.createElement('div');
                    task_desc.textContent = 'Desc';
                    task_desc.classList.add('item-desc');

                    // reactively show the desc-extension when the user clicks the 'desc' div
                    task_desc.addEventListener('click', () => {
                        task_desc_ext.classList.toggle('showing');
                        task_banner.classList.toggle('ext-showing');
                    });

                    // task due date
                    const task_date = document.createElement('div');
                    task_date.textContent = task.getDueDate();
                    task_date.classList.add('item-date');

                    // task prio indicator
                    const task_prio = document.createElement('div');
                    task_prio.classList.add('item-prio');
                    task_prio.classList.add(task.getPrio());

                    // edit task symbol
                    const task_edit = document.createElement('span');
                    task_edit.textContent = 'edit_note';
                    task_edit.classList.add('material-icons');
                    task_edit.classList.add('edit');
                    pageInterface.setupEditTask(task_edit);

                    // delete task symbol
                    const task_delete = document.createElement('span');
                    task_delete.textContent = 'delete';
                    task_delete.classList.add('material-icons');
                    task_delete.classList.add('delete');
                    pageInterface.setupDeleteTask(task_delete);

                    // only append 'desc' div if the task has a description
                    if (task.getDesc() !== '') {
                        right_side.appendChild(task_desc);
                    }

                    right_side.appendChild(task_date);
                    right_side.appendChild(task_prio);
                    right_side.appendChild(task_edit);
                    right_side.appendChild(task_delete);

                    return right_side;
                }
            }
        }
    };

    return { displayProjects, displayTasks };
}();

// abstract layer outside of the controllers that facilitates their communication
const pageInterface = function pageInterface() {
    const initializePage = function initializePage() {
        // to initialize the page:
        // - setup the sidebar 
        // - setup the main panel
        setupSidebar();
        setupMainPanel();

        function setupSidebar() {
            // to setup the sidebar:
            // - display the list of projects 
            // - make the project list dynamic and clickable (.active toggling) 
            // - make the 'add project' option dynamic by setting up the click and form logic
            // - setup the edit project form 
            const projects = scheduleController.getProjects();
            DOMController.displayProjects(projects);
            setupInboxToggle();
            setupAddProject();
            setupEditProjectForm();
    
            function setupAddProject() {
                // dom references
                const add_project = document.querySelector('.add-project');
                const add_project_dialog = document.querySelector('#add-project-dialog');
                const add_project_form = document.querySelector('#add-project-form'); 
        
                // open the add project form when the user clicks the button
                add_project.addEventListener('click', () => {
                    add_project_dialog.showModal();
                });
        
                // create a new project when the user submits the form
                add_project_form.addEventListener('submit', (event) => {
                    // create a new project with the form info and add it to the project list
                    scheduleController.addProject(event.target.title.value);

                    // reset the form inputs
                    add_project_form.reset(); 
        
                    // re-render the list of projects to reflect the change
                    const projects = scheduleController.getProjects();
                    DOMController.displayProjects(projects);
                });
            }
    
            function setupEditProjectForm() {
                // dom references
                const edit_project_form = document.querySelector('#edit-project-form'); 
    
                // edit the project when the user submits the form
                edit_project_form.addEventListener('submit', (event) => {
                    // grab the project index
                    const index = edit_project_form.dataset.projectIndex;
    
                    // edit the associated project with the form info
                    const projects = scheduleController.getProjects();
                    const assoc_project = projects[index];
                    assoc_project.setTitle(event.target.title.value);
    
                    // re-render the list of projects to reflect the change
                    DOMController.displayProjects(projects);
                });
            }
    
            // NEED TO FIX
            // function that handles the user choosing a different project to display
            function setupInboxToggle() {
                // dom references
                const nav_home_items = document.querySelectorAll('#default-options li');
                nav_home_items.forEach((home_item) => {
                    home_item.addEventListener('click', (event) => {
                        // grab the currently active list item and toggle the class
                        const curr_active = document.querySelector('#nav li.active');
                        curr_active.classList.toggle('active');
            
                        // now make the targeted list item the active one
                        event.currentTarget.classList.add('active');
                    });
                });
            }
        }
    
        function setupMainPanel() {
            // to setup the main panel:
            // - display the tasks associated with the active project
            // - make the 'add_task' option dynamic by setting up the click and form logic
            const active_project = scheduleController.getActiveProject();
            DOMController.displayTasks(active_project);
            setupAddTask();
            setupEditTaskForm();
    
            function setupAddTask() {
                // dom references
                const add_task = document.querySelector('.add-item');
                const add_task_dialog = document.querySelector('#add-task-dialog');
                const add_task_form = document.querySelector('#add-task-form'); 
        
                // open the add task form when the user clicks the button
                add_task.addEventListener('click', () => {
                    add_task_dialog.showModal();
                });
        
                // create a new task when the user submits the form
                add_task_form.addEventListener('submit', (event) => {
                    // grab the active project
                    const active_project = scheduleController.getActiveProject();
    
                    // create a new task with the form info and add it to the active project
                    active_project.addItem (
                        event.target.title.value, 
                        event.target.desc.value, 
                        event.target.dueDate.value, 
                        event.target.prio.value
                    );

                    // reset the form inputs
                    add_task_form.reset(); 
        
                    // re-render the list of tasks for the active project to reflect the change
                    DOMController.displayTasks(active_project);
                });
            }

            function setupEditTaskForm() {
                // dom references
                const edit_task_form = document.querySelector('#edit-task-form'); 
    
                // edit the task when the user submits the form
                edit_task_form.addEventListener('submit', (event) => {
                    // grab the task index
                    const index = edit_task_form.dataset.taskIndex;
    
                    // grab the active project
                    const active_project = scheduleController.getActiveProject();

                    // edit the associated task with the form info
                    const tasks = active_project.getList();
                    const assoc_task = tasks[index];

                    assoc_task.setTitle(edit_task_form.title.value);
                    assoc_task.setDesc(edit_task_form.desc.value);
                    assoc_task.setDueDate(edit_task_form.dueDate.value);
                    assoc_task.setPrio(edit_task_form.prio.value);
    
                    // re-render the list of tasks for the active project to reflect the change
                    DOMController.displayTasks(active_project);
                });
            }
        }
    };

    const setupDeleteProject = function setupDeleteProject(delete_icon) {
        // delete the associated project when the user clicks the delete material-icon 
        delete_icon.addEventListener('click', (event) => {
            // grab the project that the delete icon belongs to -- two levels up the DOM tree 
            const project_item = event.target.parentNode.parentNode;

            // remove the associated project from the project list
            const index = project_item.dataset.index;
            scheduleController.deleteProject(index);

            // re-render the list of projects to reflect the change
            const projects = scheduleController.getProjects();
            DOMController.displayProjects(projects);
        });
    };

    const setupEditProject = function setupEditProject(edit_icon) {
        // dom references
        const edit_project_dialog = document.querySelector('#edit-project-dialog');
        const edit_project_form = document.querySelector('#edit-project-form'); 

        // open the edit project form when the icon is clicked
        edit_icon.addEventListener('click', (event) => {
            // transmit the project index through the interaction
            const index = event.target.parentNode.parentNode.dataset.index;
            edit_project_form.dataset.projectIndex = index;

            // also prefill the title input with the current project title
            const projects = scheduleController.getProjects();
            const assoc_project = projects[index];
            edit_project_form.title.value = assoc_project.getTitle();

            edit_project_dialog.showModal();
        });
    };

    const setupDeleteTask = function setupDeleteTask(delete_icon) {
        // delete the associated list item when the user click the delete material-icon 
        delete_icon.addEventListener('click', (event) => {
            // grab the list item the delete icon belongs to -- three levels up the DOM tree 
            const list_item = event.target.parentNode.parentNode.parentNode;

            // remove the associated task from the active project
            const active_project = scheduleController.getActiveProject();
            const index = list_item.dataset.index;
            active_project.deleteItem(index);

            // re-render the list of tasks for the active project to reflect the change
            DOMController.displayTasks(active_project);
        });
    };

    const setupEditTask = function setupEditTask(edit_icon) {
        // dom references
        const edit_task_dialog = document.querySelector('#edit-task-dialog');
        const edit_task_form = document.querySelector('#edit-task-form'); 

        // open the edit task form when the icon is clicked
        edit_icon.addEventListener('click', (event) => {
            // grab the list item the edit icon belongs to -- three levels up the DOM tree 
            const list_item = event.target.parentNode.parentNode.parentNode;

            // transmit the task index through the interaction
            const index = list_item.dataset.index;
            edit_task_form.dataset.taskIndex = index;

            // also prefill the inputs with the current values from the assoc task
            const active_project = scheduleController.getActiveProject();
            const tasks = active_project.getList();
            const assoc_task = tasks[index];

            edit_task_form.title.value = assoc_task.getTitle();
            edit_task_form.desc.value = assoc_task.getDesc();
            edit_task_form.dueDate.value = assoc_task.getDueDate();
            edit_task_form.prio.value = assoc_task.getPrio();

            edit_task_dialog.showModal();
        });
    };

    return { initializePage, setupDeleteProject, setupEditProject, setupDeleteTask, setupEditTask }
}();

function debug() {
    // add test project
    scheduleController.addProject('Test Project');

    // grab the test project
    const projects = scheduleController.getProjects();
    const test_project = projects[0];

    // create and add a test task to the project
    test_project.addItem (
        'To-Do Website Back-End', 
        'Finish setting up the back-end handling of tasks and projects, then link up with front-end display',
        'Feb 21st',
        'medium'
    );

    // front-end setup
    pageInterface.initializePage();
}

debug();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNkVBQTZFLGFBQWEsUUFBUSxNQUFNLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssT0FBTyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFP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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9keW5hbWljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbi8qIENTUyBTdHlsZSBSZXNldCAqL1xuXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogVmFyaWFibGUgRGVjbGFyYXRpb24gKi9cblxuOnJvb3Qge1xuICAgIC0td2hpdGUtYWNjZW50OiB3aGl0ZTtcbiAgICAtLWdyYXktYWNjZW50OiB3aGl0ZXNtb2tlO1xuICAgIC0tYmx1ZS1hY2NlbnQ6ICMzMThDRTc7XG4gICAgLS1sb3ctYWNjZW50OiBncmVlbjtcbiAgICAtLW1lZGl1bS1hY2NlbnQ6IG9yYW5nZTtcbiAgICAtLWhpZ2gtYWNjZW50OiByZWQ7XG59XG5cbi8qIEJhc2UgU3R5bGluZyAqL1xuXG5ib2R5IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IEdhcmFtb25kLCBzYW5zLXNlcmlmO1xufVxuXG4uc2hvd2luZyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgYW5pbWF0aW9uOiAwLjVzIGVhc2UtaW4tb3V0IGZhZGVJbjtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICB9XG4gICAgXG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDc1cHggMWZyIC8gbWlubWF4KDI1MHB4LCAxZnIpIDRmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGVudCB1bFtkYXRhLXRpdGxlXTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGVudCBzcGFuLm1hdGVyaWFsLWljb25zLmRlbGV0ZTpob3ZlciB7XG4gICAgY29sb3I6ICNFMzAwMDA7XG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5jb250ZW50IHNwYW4ubWF0ZXJpYWwtaWNvbnMuZWRpdDpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWxvdy1hY2NlbnQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vKiBIRUFERVIgU1RZTElORyAqL1xuXG4uY29udGVudCAuaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50IC5oZWFkZXIgLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG59XG5cbi8qIFNJREVCQVIgU1RZTElORyAqL1xuXG4uY29udGVudCAjc2lkZWJhciB7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xufVxuXG4uY29udGVudCAjc2lkZWJhciAjbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycmVtO1xufVxuXG4uY29udGVudCAjc2lkZWJhciAjbmF2IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjI1cmVtO1xufVxuXG4uY29udGVudCAjc2lkZWJhciAjbmF2IGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWFjY2VudCk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmNvbnRlbnQgI3NpZGViYXIgI25hdiBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1hY2NlbnQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZS1hY2NlbnQpO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmNvbnRlbnQgI3NpZGViYXIgI25hdiBsaS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDE0MCwgMjMxLCAwLjgpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg0OSwgMTQwLCAyMzEsIDAuNSk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWFjY2VudCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50ICNzaWRlYmFyICNuYXYgbGkuYWN0aXZlOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY29udGVudCAjc2lkZWJhciAjbmF2IGxpID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjI1cmVtO1xufVxuXG4uY29udGVudCAjc2lkZWJhciAjbmF2IGxpIC5tYXRlcmlhbC1pY29ucy5tZC0xOCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59IFxuXG4uY29udGVudCAjc2lkZWJhciAjbmF2IGxpLmFkZC1wcm9qZWN0IHtcbiAgICBvcmRlcjogMTtcbn0gXG5cbi8qIE1BSU4gUEFORUwgU1RZTElORyAqL1xuXG4uY29udGVudCAubWFpbi1wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1hY2NlbnQpO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWxpc3QgLnRvZG8taXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbTpoYXMoLml0ZW0tY29tcGxldGUuZmluaXNoZWQpIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1hY2NlbnQpO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0td2hpdGUtYWNjZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgei1pbmRleDogMjtcbn1cblxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyLmV4dC1zaG93aW5nIHtcbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtIC5iYW5uZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEuNXJlbTtcbn1cblxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyIC5pdGVtLWNvbXBsZXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcblxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyIC5pdGVtLWNvbXBsZXRlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCAxNDAsIDIzMSwgMC4zKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyIC5pdGVtLWNvbXBsZXRlLmZpbmlzaGVkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUtYWNjZW50KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWFjY2VudCk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWFjY2VudCk7XG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XG59XG5cbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWl0ZW0gLmJhbm5lciAuaXRlbS10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWl0ZW06aGFzKC5pdGVtLWNvbXBsZXRlLmZpbmlzaGVkKSAuaXRlbS10aXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyIC5pdGVtLWRlc2Mge1xuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWFjY2VudCk7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBwYWRkaW5nOiAwLjNyZW0gMC42cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUtYWNjZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtIC5iYW5uZXIgLml0ZW0tZGVzYzpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWFjY2VudCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1hY2NlbnQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtIC5iYW5uZXIgLml0ZW0tcHJpbyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBtYXJnaW46IDAgMC4yNXJlbTtcbn1cblxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyIC5pdGVtLXByaW8ubG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctYWNjZW50KTtcbn1cblxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyIC5pdGVtLXByaW8ubWVkaXVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tYWNjZW50KTtcbn1cblxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyIC5pdGVtLXByaW8uaGlnaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1hY2NlbnQpO1xufVxuXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtIC5kZXNjLWV4dGVuc2lvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWFjY2VudCk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3gtc2hhZG93OiAwLjEyNXJlbSAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIGNhbGMoMi41cmVtICsgMThweCk7XG59XG5cbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWl0ZW06aGFzKC5pdGVtLWNvbXBsZXRlLmZpbmlzaGVkKSAuZGVzYy1leHRlbnNpb24ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi8qIEFERCBUTy1ETyBJVEVNICovXG5cbi5jb250ZW50IC5tYWluLXBhbmVsIC5hZGQtaXRlbSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvcmRlcjogMTtcbn0gXG5cbi5jb250ZW50IC5tYWluLXBhbmVsIC5hZGQtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcbiAgICBib3gtc2hhZG93OiAwLjEyNXJlbSAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59IFxuXG4uY29udGVudCAubWFpbi1wYW5lbCAuYWRkLWl0ZW0gc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0gXG5cbi5jb250ZW50IC5tYWluLXBhbmVsIC5hZGQtaXRlbSAubWF0ZXJpYWwtaWNvbnMubWQtMTggeyBcbiAgICBmb250LXNpemU6IDE4cHg7IFxufVxuXG4vKiBESUFMT0cgLyBGT1JNIFNUWUxJTkcgKi9cblxuLnByb2plY3QtZm9ybSAubWFpbi1wYW5lbCBidXR0b24ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG5kaWFsb2cge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuMjVyZW0pO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWFjY2VudCk7XG4gICAgd2lkdGg6IGNsYW1wKDMwMHB4LCA1MHZ3LCA2MDBweCk7XG4gICAgbWluLWhlaWdodDogNDB2aDtcbn1cblxuZm9ybSAuYmFubmVyLCAubWFpbi1wYW5lbCB7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuZm9ybSAuYmFubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWFjY2VudCk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWFjY2VudCk7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmZvcm0gLm1haW4tcGFuZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuZm9ybSAubWFpbi1wYW5lbCBpbnB1dCwgdGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWFjY2VudCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS1hY2NlbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgdGV4dGFyZWEge1xuICAgIG1pbi1oZWlnaHQ6IDVyZW07XG4gICAgcmVzaXplOiBub25lO1xufVxuXG5mb3JtIC5tYWluLXBhbmVsIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZS1hY2NlbnQpO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgLmxhYmVsLWZsb2F0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgbGVnZW5kLCBsYWJlbFtmb3I9J2R1ZURhdGUnXSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgaW5wdXRbdHlwZT0nZGF0ZSddIHtcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1hY2NlbnQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUtYWNjZW50KTtcbn1cblxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCAjbGFzdC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFzay1mb3JtIC5tYWluLXBhbmVsIGZpZWxkc2V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4udGFzay1mb3JtIC5tYWluLXBhbmVsIGZpZWxkc2V0IGxlZ2VuZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCBmaWVsZHNldCAuY29udGFpbmVyLmxvdyB7XG4gICAgY29sb3I6IHZhcigtLWxvdy1hY2NlbnQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1hY2NlbnQpO1xufVxuXG4udGFzay1mb3JtIC5tYWluLXBhbmVsIGZpZWxkc2V0IC5jb250YWluZXIubWVkaXVtIHtcbiAgICBjb2xvcjogdmFyKC0tbWVkaXVtLWFjY2VudCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWFjY2VudCk7XG59XG5cbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQgLmNvbnRhaW5lci5oaWdoIHtcbiAgICBjb2xvcjogdmFyKC0taGlnaC1hY2NlbnQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtYWNjZW50KTtcbn1cblxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCBmaWVsZHNldCAuY29udGFpbmVyOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCBmaWVsZHNldCAuY29udGFpbmVyLmxvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LWFjY2VudCk7XG59XG5cbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQgLmNvbnRhaW5lci5tZWRpdW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1hY2NlbnQpO1xufVxuXG4udGFzay1mb3JtIC5tYWluLXBhbmVsIGZpZWxkc2V0IC5jb250YWluZXIuaGlnaDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1hY2NlbnQpO1xufVxuXG4udGFzay1mb3JtIC5tYWluLXBhbmVsIGZpZWxkc2V0IC5jb250YWluZXI6aGFzKGlucHV0OmNoZWNrZWQpIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4udGFzay1mb3JtIC5tYWluLXBhbmVsIGZpZWxkc2V0IC5jb250YWluZXIubG93OmhhcyhpbnB1dDpjaGVja2VkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LWFjY2VudCk7XG59XG5cbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQgLmNvbnRhaW5lci5tZWRpdW06aGFzKGlucHV0OmNoZWNrZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tYWNjZW50KTtcbn1cblxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCBmaWVsZHNldCAuY29udGFpbmVyLmhpZ2g6aGFzKGlucHV0OmNoZWNrZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLWFjY2VudCk7XG59XG5cbmZvcm0gLm1haW4tcGFuZWwgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWFjY2VudCk7XG4gICAgY29sb3I6IHZhcigtLWJsdWUtYWNjZW50KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuZm9ybSAubWFpbi1wYW5lbCBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQSxvQkFBb0I7O0FBRXBCOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCOztBQUVBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLHlCQUF5Qjs7QUFFekI7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1Ysb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkO2tDQUM4QjtJQUM5QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lB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YTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi8qIENTUyBTdHlsZSBSZXNldCAqL1xcblxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogVmFyaWFibGUgRGVjbGFyYXRpb24gKi9cXG5cXG46cm9vdCB7XFxuICAgIC0td2hpdGUtYWNjZW50OiB3aGl0ZTtcXG4gICAgLS1ncmF5LWFjY2VudDogd2hpdGVzbW9rZTtcXG4gICAgLS1ibHVlLWFjY2VudDogIzMxOENFNztcXG4gICAgLS1sb3ctYWNjZW50OiBncmVlbjtcXG4gICAgLS1tZWRpdW0tYWNjZW50OiBvcmFuZ2U7XFxuICAgIC0taGlnaC1hY2NlbnQ6IHJlZDtcXG59XFxuXFxuLyogQmFzZSBTdHlsaW5nICovXFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IEdhcmFtb25kLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2hvd2luZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgYW5pbWF0aW9uOiAwLjVzIGVhc2UtaW4tb3V0IGZhZGVJbjtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgfVxcbiAgICBcXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB9XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNzVweCAxZnIgLyBtaW5tYXgoMjUwcHgsIDFmcikgNGZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudCB1bFtkYXRhLXRpdGxlXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQgc3Bhbi5tYXRlcmlhbC1pY29ucy5kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogI0UzMDAwMDtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5jb250ZW50IHNwYW4ubWF0ZXJpYWwtaWNvbnMuZWRpdDpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1sb3ctYWNjZW50KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4vKiBIRUFERVIgU1RZTElORyAqL1xcblxcbi5jb250ZW50IC5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWFjY2VudCk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IC5oZWFkZXIgLm1hdGVyaWFsLWljb25zIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4vKiBTSURFQkFSIFNUWUxJTkcgKi9cXG5cXG4uY29udGVudCAjc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQgI3NpZGViYXIgI25hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmNvbnRlbnQgI3NpZGViYXIgI25hdiB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLmNvbnRlbnQgI3NpZGViYXIgI25hdiBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLmNvbnRlbnQgI3NpZGViYXIgI25hdiBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktYWNjZW50KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlLWFjY2VudCk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uY29udGVudCAjc2lkZWJhciAjbmF2IGxpLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDE0MCwgMjMxLCAwLjgpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNDksIDE0MCwgMjMxLCAwLjUpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50ICNzaWRlYmFyICNuYXYgbGkuYWN0aXZlOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnQgI3NpZGViYXIgI25hdiBsaSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLmNvbnRlbnQgI3NpZGViYXIgI25hdiBsaSAubWF0ZXJpYWwtaWNvbnMubWQtMTgge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59IFxcblxcbi5jb250ZW50ICNzaWRlYmFyICNuYXYgbGkuYWRkLXByb2plY3Qge1xcbiAgICBvcmRlcjogMTtcXG59IFxcblxcbi8qIE1BSU4gUEFORUwgU1RZTElORyAqL1xcblxcbi5jb250ZW50IC5tYWluLXBhbmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1hY2NlbnQpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1saXN0IC50b2RvLWl0ZW0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtOmhhcyguaXRlbS1jb21wbGV0ZS5maW5pc2hlZCkge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWl0ZW0gLmJhbm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0td2hpdGUtYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMC4xMjVyZW0gMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWl0ZW0gLmJhbm5lci5leHQtc2hvd2luZyB7XFxuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWl0ZW0gLmJhbm5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtIC5iYW5uZXIgLml0ZW0tY29tcGxldGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuXFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtIC5iYW5uZXIgLml0ZW0tY29tcGxldGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCAxNDAsIDIzMSwgMC4zKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtIC5iYW5uZXIgLml0ZW0tY29tcGxldGUuZmluaXNoZWQge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUtYWNjZW50KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWl0ZW0gLmJhbm5lciAuaXRlbS10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtOmhhcyguaXRlbS1jb21wbGV0ZS5maW5pc2hlZCkgLml0ZW0tdGl0bGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyIC5pdGVtLWRlc2Mge1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1hY2NlbnQpO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC42cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlLWFjY2VudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWl0ZW0gLmJhbm5lciAuaXRlbS1kZXNjOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWFjY2VudCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtYWNjZW50KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtIC5iYW5uZXIgLml0ZW0tcHJpbyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgbWFyZ2luOiAwIDAuMjVyZW07XFxufVxcblxcbi5jb250ZW50IC5tYWluLXBhbmVsIC50b2RvLWl0ZW0gLmJhbm5lciAuaXRlbS1wcmlvLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1hY2NlbnQpO1xcbn1cXG5cXG4uY29udGVudCAubWFpbi1wYW5lbCAudG9kby1pdGVtIC5iYW5uZXIgLml0ZW0tcHJpby5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tYWNjZW50KTtcXG59XFxuXFxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuYmFubmVyIC5pdGVtLXByaW8uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtYWNjZW50KTtcXG59XFxuXFxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbSAuZGVzYy1leHRlbnNpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1hY2NlbnQpO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMC4xMjVyZW0gMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHBhZGRpbmc6IDAuNzVyZW0gY2FsYygyLjVyZW0gKyAxOHB4KTtcXG59XFxuXFxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLnRvZG8taXRlbTpoYXMoLml0ZW0tY29tcGxldGUuZmluaXNoZWQpIC5kZXNjLWV4dGVuc2lvbiB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4vKiBBREQgVE8tRE8gSVRFTSAqL1xcblxcbi5jb250ZW50IC5tYWluLXBhbmVsIC5hZGQtaXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3JkZXI6IDE7XFxufSBcXG5cXG4uY29udGVudCAubWFpbi1wYW5lbCAuYWRkLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1hY2NlbnQpO1xcbiAgICBib3gtc2hhZG93OiAwLjEyNXJlbSAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59IFxcblxcbi5jb250ZW50IC5tYWluLXBhbmVsIC5hZGQtaXRlbSBzcGFuIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn0gXFxuXFxuLmNvbnRlbnQgLm1haW4tcGFuZWwgLmFkZC1pdGVtIC5tYXRlcmlhbC1pY29ucy5tZC0xOCB7IFxcbiAgICBmb250LXNpemU6IDE4cHg7IFxcbn1cXG5cXG4vKiBESUFMT0cgLyBGT1JNIFNUWUxJTkcgKi9cXG5cXG4ucHJvamVjdC1mb3JtIC5tYWluLXBhbmVsIGJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC4yNXJlbSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWFjY2VudCk7XFxuICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgNTB2dywgNjAwcHgpO1xcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xcbn1cXG5cXG5mb3JtIC5iYW5uZXIsIC5tYWluLXBhbmVsIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuZm9ybSAuYmFubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5mb3JtIC5tYWluLXBhbmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1mb3JtIC5tYWluLXBhbmVsID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmZvcm0gLm1haW4tcGFuZWwgaW5wdXQsIHRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCB0ZXh0YXJlYSB7XFxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuZm9ybSAubWFpbi1wYW5lbCBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlLWFjY2VudCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgLmxhYmVsLWZsb2F0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgbGVnZW5kLCBsYWJlbFtmb3I9J2R1ZURhdGUnXSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFzay1mb3JtIC5tYWluLXBhbmVsIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUtYWNjZW50KTtcXG59XFxuXFxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCAjbGFzdC1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQgbGVnZW5kIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCBmaWVsZHNldCAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4udGFzay1mb3JtIC5tYWluLXBhbmVsIGZpZWxkc2V0IC5jb250YWluZXIubG93IHtcXG4gICAgY29sb3I6IHZhcigtLWxvdy1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb3ctYWNjZW50KTtcXG59XFxuXFxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCBmaWVsZHNldCAuY29udGFpbmVyLm1lZGl1bSB7XFxuICAgIGNvbG9yOiB2YXIoLS1tZWRpdW0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWFjY2VudCk7XFxufVxcblxcbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQgLmNvbnRhaW5lci5oaWdoIHtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2gtYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1hY2NlbnQpO1xcbn1cXG5cXG4udGFzay1mb3JtIC5tYWluLXBhbmVsIGZpZWxkc2V0IC5jb250YWluZXI6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4udGFzay1mb3JtIC5tYWluLXBhbmVsIGZpZWxkc2V0IC5jb250YWluZXIubG93OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LWFjY2VudCk7XFxufVxcblxcbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQgLmNvbnRhaW5lci5tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tYWNjZW50KTtcXG59XFxuXFxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCBmaWVsZHNldCAuY29udGFpbmVyLmhpZ2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLWFjY2VudCk7XFxufVxcblxcbi50YXNrLWZvcm0gLm1haW4tcGFuZWwgZmllbGRzZXQgLmNvbnRhaW5lcjpoYXMoaW5wdXQ6Y2hlY2tlZCkge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYWNjZW50KTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCBmaWVsZHNldCAuY29udGFpbmVyLmxvdzpoYXMoaW5wdXQ6Y2hlY2tlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctYWNjZW50KTtcXG59XFxuXFxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCBmaWVsZHNldCAuY29udGFpbmVyLm1lZGl1bTpoYXMoaW5wdXQ6Y2hlY2tlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tYWNjZW50KTtcXG59XFxuXFxuLnRhc2stZm9ybSAubWFpbi1wYW5lbCBmaWVsZHNldCAuY29udGFpbmVyLmhpZ2g6aGFzKGlucHV0OmNoZWNrZWQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1hY2NlbnQpO1xcbn1cXG5cXG5mb3JtIC5tYWluLXBhbmVsIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWFjY2VudCk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUtYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuZm9ybSAubWFpbi1wYW5lbCBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWFjY2VudCk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1hY2NlbnQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG4vLyBiYWNrLWVuZCBTQ0hFRFVMRSBDT05UUk9MTEVSXG5jb25zdCBzY2hlZHVsZUNvbnRyb2xsZXIgPSBmdW5jdGlvbiBzY2hlZHVsZUNvbnRyb2xsZXIoKSB7XG4gICAgLy8gbGlzdCBvZiBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG4gICAgY29uc3QgYWN0aXZlX3Byb2plY3QgPSAwO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0TGlzdDtcbiAgICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4gcHJvamVjdExpc3RbYWN0aXZlX3Byb2plY3RdO1xuICAgIGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAoaW5kZXgpID0+IGFjdGl2ZV9wcm9qZWN0ID0gaW5kZXg7XG5cbiAgICAvLyBQcm9qZWN0IEZhY3RvcnkgRnVuY3Rpb24gKGkuZS4gYSBsaXN0IG9mIHRvLWRvIGl0ZW1zKVxuICAgIGZ1bmN0aW9uIHByb2plY3RJdGVtKHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHRvRG9MaXN0ID0gW107XG4gICAgICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiB0b0RvTGlzdDtcblxuICAgICAgICBsZXQgcHJvamVjdF90aXRsZSA9IHRpdGxlO1xuICAgICAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHByb2plY3RfdGl0bGU7XG4gICAgICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld190aXRsZSkgPT4gcHJvamVjdF90aXRsZSA9IG5ld190aXRsZTtcblxuICAgICAgICAvLyBUYXNrIEl0ZW0gRmFjdG9yeSBGdW5jdGlvbiBcbiAgICAgICAgZnVuY3Rpb24gdG9Eb0l0ZW0odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW8pIHtcbiAgICAgICAgICAgIGxldCB0YXNrX3RpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRhc2tfdGl0bGU7XG4gICAgICAgICAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdfdGl0bGUpID0+IHRhc2tfdGl0bGUgPSBuZXdfdGl0bGU7XG5cbiAgICAgICAgICAgIGxldCB0YXNrX2Rlc2MgPSBkZXNjO1xuICAgICAgICAgICAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IHRhc2tfZGVzYztcbiAgICAgICAgICAgIGNvbnN0IHNldERlc2MgPSAobmV3X2Rlc2MpID0+IHRhc2tfZGVzYyA9IG5ld19kZXNjO1xuXG4gICAgICAgICAgICBsZXQgdGFza19kdWUgPSBkdWVEYXRlO1xuICAgICAgICAgICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHRhc2tfZHVlO1xuICAgICAgICAgICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdfZGF0ZSkgPT4gdGFza19kdWUgPSBuZXdfZGF0ZTtcblxuICAgICAgICAgICAgbGV0IHRhc2tfcHJpbyA9IHByaW87XG4gICAgICAgICAgICBjb25zdCBnZXRQcmlvID0gKCkgPT4gdGFza19wcmlvO1xuICAgICAgICAgICAgY29uc3Qgc2V0UHJpbyA9IChuZXdfcHJpbykgPT4gdGFza19wcmlvID0gbmV3X3ByaW87XG5cbiAgICAgICAgICAgIHJldHVybiB7IGdldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzYywgc2V0RGVzYywgZ2V0RHVlRGF0ZSwgc2V0RHVlRGF0ZSwgZ2V0UHJpbywgc2V0UHJpbyB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGFkZCB0by1kbyBpdGVtIHRvIHByb2plY3RcbiAgICAgICAgY29uc3QgYWRkSXRlbSA9IGZ1bmN0aW9uIGFkZEl0ZW0odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW8pIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld19pdGVtID0gdG9Eb0l0ZW0odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW8pO1xuICAgICAgICAgICAgdG9Eb0xpc3QucHVzaChuZXdfaXRlbSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZGVsZXRlIHRvLWRvIGl0ZW0gZnJvbSBwcm9qZWN0XG4gICAgICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBmdW5jdGlvbiBkZWxldGVJdGVtKGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRvRG9MaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRvRG9MaXN0LnNwbGljZShpbmRleCwgMSk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IGluZGV4IG91dCBvZiBib3VuZHMgJHtpbmRleH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4geyBnZXRMaXN0LCBnZXRUaXRsZSwgc2V0VGl0bGUsIGFkZEl0ZW0sIGRlbGV0ZUl0ZW0gfVxuICAgIH07XG5cbiAgICAvLyBhZGQgcHJvamVjdCB0byBsaXN0XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpIHtcbiAgICAgICAgY29uc3QgbmV3X3Byb2plY3QgPSBwcm9qZWN0SXRlbSh0aXRsZSk7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gobmV3X3Byb2plY3QpO1xuICAgIH07XG5cbiAgICAvLyBkZWxldGUgcHJvamVjdCBmcm9tIGxpc3RcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPiAtMSAmJiBpbmRleCA8IHByb2plY3RMaXN0Lmxlbmd0aCkgeyBcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBpbmRleCBvdXQgb2YgYm91bmRzICR7aW5kZXh9YCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0UHJvamVjdHMsIGdldEFjdGl2ZVByb2plY3QsIHNldEFjdGl2ZVByb2plY3QsIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QgfTtcbn0oKTtcblxuLy8gRE9NIE1BTklQVUxBVElPTlxuXG5jb25zdCBET01Db250cm9sbGVyID0gZnVuY3Rpb24gRE9NQ29udHJvbGxlcigpIHtcbiAgICAvLyBjcmVhdGVzIGEgbGlzdCBvZiB0aGUgcGVyc29uYWwgcHJvamVjdHMgaW4gdGhlIHNpZGViYXJcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgLy8gZG9tIHJlZmVyZW5jZXNcbiAgICAgICAgY29uc3QgcGVyc29uYWxfcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVyc29uYWwtcHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgYWRkX3Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaS5hZGQtcHJvamVjdCcpO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBwcm9qZWN0IGxpc3QgYW5kIHJlLWFkZCB0aGUgJ2FkZCBwcm9qZWN0JyBvcHRpb25cbiAgICAgICAgcGVyc29uYWxfcHJvamVjdHMucmVwbGFjZUNoaWxkcmVuKGFkZF9wcm9qZWN0KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBsaXN0IGl0ZW0gdG8gcmVwcmVzZW50IGVhY2ggcHJvamVjdFxuICAgICAgICAgICAgY29uc3QgY3Vycl9wcm9qZWN0ID0gcHJvamVjdHNbaV07XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0X2l0ZW0gPSBjcmVhdGVQcm9qZWN0SXRlbShjdXJyX3Byb2plY3QsIGkpO1xuXG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGxpc3QgaXRlbSB0byB0aGUgbGlzdCBvZiBwZXJzb25hbCBwcm9qZWN0c1xuICAgICAgICAgICAgcGVyc29uYWxfcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdF9pdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhlbHBlciBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIGNyZWF0aW5nIHRoZSBwcm9qZWN0IGl0ZW0nc1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0SXRlbShwcm9qZWN0LCBwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGxpc3QgaXRlbSBhbmQgYXNzaWduIGl0IHRoZSBwcm9qZWN0J3MgaW5kZXhcbiAgICAgICAgICAgIGNvbnN0IGxpc3RfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaXN0X2l0ZW0uZGF0YXNldC5pbmRleCA9IHByb2plY3RJbmRleDtcbiAgICBcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbGVmdCBzaWRlLCB3aGljaCBjb250YWlucyB0aGUgbG9nbyBhbmQgcHJvamVjdCB0aXRsZSBcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1fbGVmdF9zaWRlID0gY3JlYXRlUHJvamVjdExlZnRTaWRlKCk7XG4gICAgXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHJpZ2h0IHNpZGUsIHdoaWNoIGNvbnRhaW5zIHRoZSBlZGl0IGFuZCBkZWxldGUgb3B0aW9uc1xuICAgICAgICAgICAgY29uc3QgaXRlbV9yaWdodF9zaWRlID0gY3JlYXRlUHJvamVjdFJpZ2h0U2lkZSgpOyBcbiAgICBcbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZXMgdG8gdGhlIGxpc3QgaXRlbVxuICAgICAgICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGl0ZW1fbGVmdF9zaWRlKTtcbiAgICAgICAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChpdGVtX3JpZ2h0X3NpZGUpO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGxpc3RfaXRlbTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdExlZnRTaWRlKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRfc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbG9nbyBcbiAgICAgICAgICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gJ2xpc3QnO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRpdiB0byBob2xkIHRoZSB0aXRsZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIGJvdGggdG8gdGhlIGxlZnQgc2lkZVxuICAgICAgICAgICAgICAgIGxlZnRfc2lkZS5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICAgICAgICAgICAgICBsZWZ0X3NpZGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0X3NpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RSaWdodFNpZGUoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRfc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZWRpdCBvcHRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtX2VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgaXRlbV9lZGl0LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgICAgICAgICAgaXRlbV9lZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgICAgICAgICBpdGVtX2VkaXQudGV4dENvbnRlbnQgPSAnZWRpdF9ub3RlJztcbiAgICAgICAgICAgICAgICBwYWdlSW50ZXJmYWNlLnNldHVwRWRpdFByb2plY3QoaXRlbV9lZGl0KTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGRlbGV0ZSBvcHRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtX2RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBpdGVtX2RlbGV0ZS5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICAgICAgICAgIGl0ZW1fZGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICAgICAgICAgIGl0ZW1fZGVsZXRlLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICAgICAgcGFnZUludGVyZmFjZS5zZXR1cERlbGV0ZVByb2plY3QoaXRlbV9kZWxldGUpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBib3RoIHRvIHRoZSByaWdodCBzaWRlXG4gICAgICAgICAgICAgICAgcmlnaHRfc2lkZS5hcHBlbmRDaGlsZChpdGVtX2VkaXQpO1xuICAgICAgICAgICAgICAgIHJpZ2h0X3NpZGUuYXBwZW5kQ2hpbGQoaXRlbV9kZWxldGUpO1xuICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByaWdodF9zaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGRpc3BsYXlzIHRoZSB0YXNrcyBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBwcm9qZWN0XG4gICAgY29uc3QgZGlzcGxheVRhc2tzID0gZnVuY3Rpb24gZGlzcGxheVRhc2tzKHByb2plY3QpIHtcbiAgICAgICAgLy8gZG9tIHJlZmVyZW5jZXNcbiAgICAgICAgY29uc3QgdGFza19saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwudG9kby1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGFkZF90YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkuYWRkLWl0ZW0nKTtcblxuICAgICAgICAvLyBzZXQgdGhlIHRpdGxlIG9mIHRoZSBsaXN0IHRvIHRoZSBwcm9qZWN0IHRpdGxlIFxuICAgICAgICB0YXNrX2xpc3QuZGF0YXNldC50aXRsZSA9IHByb2plY3QuZ2V0VGl0bGUoKTsgXG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIGN1cnJlbnQgdGFza19saXN0IGFuZCByZS1hZGQgdGhlICdhZGQgdGFzaycgb3B0aW9uXG4gICAgICAgIHRhc2tfbGlzdC5yZXBsYWNlQ2hpbGRyZW4oYWRkX3Rhc2spO1xuICAgICAgICBcbiAgICAgICAgLy8gZ3JhYiB0aGUgdGFzayAvIHRvLWRvIGxpc3RcbiAgICAgICAgY29uc3QgdGFza3MgPSBwcm9qZWN0LmdldExpc3QoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBsaXN0IGl0ZW0gdG8gcmVwcmVzZW50IGVhY2ggdGFza1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzW2ldO1xuICAgICAgICAgICAgY29uc3QgdGFza19pdGVtID0gY3JlYXRlVGFza0l0ZW0odGFzaywgaSk7IFxuXG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGl0ZW0gdG8gdGhlIHRhc2sgbGlzdFxuICAgICAgICAgICAgdGFza19saXN0LmFwcGVuZENoaWxkKHRhc2tfaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgdGFzayBpdGVtXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtKHRhc2ssIHRhc2tJbmRleCkge1xuICAgICAgICAgICAgY29uc3QgdGFza19pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHRhc2tfaXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcbiAgICAgICAgICAgIHRhc2tfaXRlbS5kYXRhc2V0LmluZGV4ID0gdGFza0luZGV4O1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBiYW5uZXIgZm9yIHRoZSB0YXNrIGl0ZW0gXG4gICAgICAgICAgICBjb25zdCB0YXNrX2Jhbm5lciA9IGNyZWF0ZUJhbm5lcigpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGRlc2MtZXh0ZW5zaW9uIFxuICAgICAgICAgICAgY29uc3QgdGFza19kZXNjX2V4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza19kZXNjX2V4dC50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzYygpO1xuICAgICAgICAgICAgdGFza19kZXNjX2V4dC5jbGFzc0xpc3QuYWRkKCdkZXNjLWV4dGVuc2lvbicpO1xuXG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGJhbm5lciBhbmQgZGVzYyBleHRlbnNpb24gdG8gdGhlIHRhc2sgaXRlbVxuICAgICAgICAgICAgdGFza19pdGVtLmFwcGVuZENoaWxkKHRhc2tfYmFubmVyKTtcbiAgICAgICAgICAgIHRhc2tfaXRlbS5hcHBlbmRDaGlsZCh0YXNrX2Rlc2NfZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRhc2tfaXRlbTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQmFubmVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tfYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza19iYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBidWlsZCB0aGUgbGVmdCBzaWRlIG9mIHRoZSBiYW5uZXJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0X3NpZGUgPSBjcmVhdGVCYW5uZXJMZWZ0KCk7IFxuXG4gICAgICAgICAgICAgICAgLy8gYnVpbGQgdGhlIGxlZnQgc2lkZSBvZiB0aGUgYmFubmVyXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRfc2lkZSA9IGNyZWF0ZUJhbm5lclJpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgYm90aCB0byB0aGUgYmFubmVyXG4gICAgICAgICAgICAgICAgdGFza19iYW5uZXIuYXBwZW5kQ2hpbGQobGVmdF9zaWRlKTtcbiAgICAgICAgICAgICAgICB0YXNrX2Jhbm5lci5hcHBlbmRDaGlsZChyaWdodF9zaWRlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrX2Jhbm5lcjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVCYW5uZXJMZWZ0KCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWZ0X3NpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb21wbGV0aW9uIHN0YXR1cyBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGxldGVfc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlX3N0YXR1cy50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVfc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29tcGxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZWFjdGl2ZWx5IGNoYW5nZSB0aGUgY29tcGxldGlvbiBzdGF0dXMgb2YgdGhlIGl0ZW0gKGNoYW5nZXMgYXBwZWFyYW5jZSBvbmx5LCBub3RoaW5nIGluIGJhY2stZW5kKVxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZV9zdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2hlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhc2sgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrX3RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrX3RpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0X3NpZGUuYXBwZW5kQ2hpbGQoY29tcGxldGVfc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdF9zaWRlLmFwcGVuZENoaWxkKHRhc2tfdGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0X3NpZGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQmFubmVyUmlnaHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0X3NpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0YXNrIGRlc2MgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrX2Rlc2MudGV4dENvbnRlbnQgPSAnRGVzYyc7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tfZGVzYy5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZWFjdGl2ZWx5IHNob3cgdGhlIGRlc2MtZXh0ZW5zaW9uIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSAnZGVzYycgZGl2XG4gICAgICAgICAgICAgICAgICAgIHRhc2tfZGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tfZGVzY19leHQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza19iYW5uZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZXh0LXNob3dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGFzayBkdWUgZGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza19kYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREdWVEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tfZGF0ZS5jbGFzc0xpc3QuYWRkKCdpdGVtLWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0YXNrIHByaW8gaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tfcHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrX3ByaW8uY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmlvJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tfcHJpby5jbGFzc0xpc3QuYWRkKHRhc2suZ2V0UHJpbygpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBlZGl0IHRhc2sgc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tfZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza19lZGl0LnRleHRDb250ZW50ID0gJ2VkaXRfbm90ZSc7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tfZWRpdC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrX2VkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICAgICAgICAgICAgICBwYWdlSW50ZXJmYWNlLnNldHVwRWRpdFRhc2sodGFza19lZGl0KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgdGFzayBzeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza19kZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tfZGVsZXRlLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tfZGVsZXRlLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tfZGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICBwYWdlSW50ZXJmYWNlLnNldHVwRGVsZXRlVGFzayh0YXNrX2RlbGV0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBhcHBlbmQgJ2Rlc2MnIGRpdiBpZiB0aGUgdGFzayBoYXMgYSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5nZXREZXNjKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodF9zaWRlLmFwcGVuZENoaWxkKHRhc2tfZGVzYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByaWdodF9zaWRlLmFwcGVuZENoaWxkKHRhc2tfZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0X3NpZGUuYXBwZW5kQ2hpbGQodGFza19wcmlvKTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRfc2lkZS5hcHBlbmRDaGlsZCh0YXNrX2VkaXQpO1xuICAgICAgICAgICAgICAgICAgICByaWdodF9zaWRlLmFwcGVuZENoaWxkKHRhc2tfZGVsZXRlKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmlnaHRfc2lkZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZGlzcGxheVByb2plY3RzLCBkaXNwbGF5VGFza3MgfTtcbn0oKTtcblxuLy8gYWJzdHJhY3QgbGF5ZXIgb3V0c2lkZSBvZiB0aGUgY29udHJvbGxlcnMgdGhhdCBmYWNpbGl0YXRlcyB0aGVpciBjb21tdW5pY2F0aW9uXG5jb25zdCBwYWdlSW50ZXJmYWNlID0gZnVuY3Rpb24gcGFnZUludGVyZmFjZSgpIHtcbiAgICBjb25zdCBpbml0aWFsaXplUGFnZSA9IGZ1bmN0aW9uIGluaXRpYWxpemVQYWdlKCkge1xuICAgICAgICAvLyB0byBpbml0aWFsaXplIHRoZSBwYWdlOlxuICAgICAgICAvLyAtIHNldHVwIHRoZSBzaWRlYmFyIFxuICAgICAgICAvLyAtIHNldHVwIHRoZSBtYWluIHBhbmVsXG4gICAgICAgIHNldHVwU2lkZWJhcigpO1xuICAgICAgICBzZXR1cE1haW5QYW5lbCgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwU2lkZWJhcigpIHtcbiAgICAgICAgICAgIC8vIHRvIHNldHVwIHRoZSBzaWRlYmFyOlxuICAgICAgICAgICAgLy8gLSBkaXNwbGF5IHRoZSBsaXN0IG9mIHByb2plY3RzIFxuICAgICAgICAgICAgLy8gLSBtYWtlIHRoZSBwcm9qZWN0IGxpc3QgZHluYW1pYyBhbmQgY2xpY2thYmxlICguYWN0aXZlIHRvZ2dsaW5nKSBcbiAgICAgICAgICAgIC8vIC0gbWFrZSB0aGUgJ2FkZCBwcm9qZWN0JyBvcHRpb24gZHluYW1pYyBieSBzZXR0aW5nIHVwIHRoZSBjbGljayBhbmQgZm9ybSBsb2dpY1xuICAgICAgICAgICAgLy8gLSBzZXR1cCB0aGUgZWRpdCBwcm9qZWN0IGZvcm0gXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHNjaGVkdWxlQ29udHJvbGxlci5nZXRQcm9qZWN0cygpO1xuICAgICAgICAgICAgRE9NQ29udHJvbGxlci5kaXNwbGF5UHJvamVjdHMocHJvamVjdHMpO1xuICAgICAgICAgICAgc2V0dXBJbmJveFRvZ2dsZSgpO1xuICAgICAgICAgICAgc2V0dXBBZGRQcm9qZWN0KCk7XG4gICAgICAgICAgICBzZXR1cEVkaXRQcm9qZWN0Rm9ybSgpO1xuICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0dXBBZGRQcm9qZWN0KCkge1xuICAgICAgICAgICAgICAgIC8vIGRvbSByZWZlcmVuY2VzXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkX3Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRfcHJvamVjdF9kaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkX3Byb2plY3RfZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1mb3JtJyk7IFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBvcGVuIHRoZSBhZGQgcHJvamVjdCBmb3JtIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBidXR0b25cbiAgICAgICAgICAgICAgICBhZGRfcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkX3Byb2plY3RfZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCB3aGVuIHRoZSB1c2VyIHN1Ym1pdHMgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICBhZGRfcHJvamVjdF9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCB3aXRoIHRoZSBmb3JtIGluZm8gYW5kIGFkZCBpdCB0byB0aGUgcHJvamVjdCBsaXN0XG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlQ29udHJvbGxlci5hZGRQcm9qZWN0KGV2ZW50LnRhcmdldC50aXRsZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGZvcm0gaW5wdXRzXG4gICAgICAgICAgICAgICAgICAgIGFkZF9wcm9qZWN0X2Zvcm0ucmVzZXQoKTsgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyByZS1yZW5kZXIgdGhlIGxpc3Qgb2YgcHJvamVjdHMgdG8gcmVmbGVjdCB0aGUgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gc2NoZWR1bGVDb250cm9sbGVyLmdldFByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIERPTUNvbnRyb2xsZXIuZGlzcGxheVByb2plY3RzKHByb2plY3RzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldHVwRWRpdFByb2plY3RGb3JtKCkge1xuICAgICAgICAgICAgICAgIC8vIGRvbSByZWZlcmVuY2VzXG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdF9wcm9qZWN0X2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LWZvcm0nKTsgXG4gICAgXG4gICAgICAgICAgICAgICAgLy8gZWRpdCB0aGUgcHJvamVjdCB3aGVuIHRoZSB1c2VyIHN1Ym1pdHMgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICBlZGl0X3Byb2plY3RfZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3JhYiB0aGUgcHJvamVjdCBpbmRleFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGVkaXRfcHJvamVjdF9mb3JtLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBlZGl0IHRoZSBhc3NvY2lhdGVkIHByb2plY3Qgd2l0aCB0aGUgZm9ybSBpbmZvXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gc2NoZWR1bGVDb250cm9sbGVyLmdldFByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzc29jX3Byb2plY3QgPSBwcm9qZWN0c1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGFzc29jX3Byb2plY3Quc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnRpdGxlLnZhbHVlKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gcmUtcmVuZGVyIHRoZSBsaXN0IG9mIHByb2plY3RzIHRvIHJlZmxlY3QgdGhlIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICBET01Db250cm9sbGVyLmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBORUVEIFRPIEZJWFxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHRoZSB1c2VyIGNob29zaW5nIGEgZGlmZmVyZW50IHByb2plY3QgdG8gZGlzcGxheVxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0dXBJbmJveFRvZ2dsZSgpIHtcbiAgICAgICAgICAgICAgICAvLyBkb20gcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hdl9ob21lX2l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RlZmF1bHQtb3B0aW9ucyBsaScpO1xuICAgICAgICAgICAgICAgIG5hdl9ob21lX2l0ZW1zLmZvckVhY2goKGhvbWVfaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBob21lX2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdyYWIgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGlzdCBpdGVtIGFuZCB0b2dnbGUgdGhlIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyX2FjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYgbGkuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2FjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm93IG1ha2UgdGhlIHRhcmdldGVkIGxpc3QgaXRlbSB0aGUgYWN0aXZlIG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBNYWluUGFuZWwoKSB7XG4gICAgICAgICAgICAvLyB0byBzZXR1cCB0aGUgbWFpbiBwYW5lbDpcbiAgICAgICAgICAgIC8vIC0gZGlzcGxheSB0aGUgdGFza3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBhY3RpdmUgcHJvamVjdFxuICAgICAgICAgICAgLy8gLSBtYWtlIHRoZSAnYWRkX3Rhc2snIG9wdGlvbiBkeW5hbWljIGJ5IHNldHRpbmcgdXAgdGhlIGNsaWNrIGFuZCBmb3JtIGxvZ2ljXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVfcHJvamVjdCA9IHNjaGVkdWxlQ29udHJvbGxlci5nZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgICAgICAgICBET01Db250cm9sbGVyLmRpc3BsYXlUYXNrcyhhY3RpdmVfcHJvamVjdCk7XG4gICAgICAgICAgICBzZXR1cEFkZFRhc2soKTtcbiAgICAgICAgICAgIHNldHVwRWRpdFRhc2tGb3JtKCk7XG4gICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXR1cEFkZFRhc2soKSB7XG4gICAgICAgICAgICAgICAgLy8gZG9tIHJlZmVyZW5jZXNcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRfdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZF90YXNrX2RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1kaWFsb2cnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRfdGFza19mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTsgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIG9wZW4gdGhlIGFkZCB0YXNrIGZvcm0gd2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGJ1dHRvblxuICAgICAgICAgICAgICAgIGFkZF90YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhZGRfdGFza19kaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyB0YXNrIHdoZW4gdGhlIHVzZXIgc3VibWl0cyB0aGUgZm9ybVxuICAgICAgICAgICAgICAgIGFkZF90YXNrX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdyYWIgdGhlIGFjdGl2ZSBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZV9wcm9qZWN0ID0gc2NoZWR1bGVDb250cm9sbGVyLmdldEFjdGl2ZVByb2plY3QoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHRhc2sgd2l0aCB0aGUgZm9ybSBpbmZvIGFuZCBhZGQgaXQgdG8gdGhlIGFjdGl2ZSBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZV9wcm9qZWN0LmFkZEl0ZW0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnRpdGxlLnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kZXNjLnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kdWVEYXRlLnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wcmlvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGZvcm0gaW5wdXRzXG4gICAgICAgICAgICAgICAgICAgIGFkZF90YXNrX2Zvcm0ucmVzZXQoKTsgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyByZS1yZW5kZXIgdGhlIGxpc3Qgb2YgdGFza3MgZm9yIHRoZSBhY3RpdmUgcHJvamVjdCB0byByZWZsZWN0IHRoZSBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgRE9NQ29udHJvbGxlci5kaXNwbGF5VGFza3MoYWN0aXZlX3Byb2plY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXR1cEVkaXRUYXNrRm9ybSgpIHtcbiAgICAgICAgICAgICAgICAvLyBkb20gcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRfdGFza19mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1mb3JtJyk7IFxuICAgIFxuICAgICAgICAgICAgICAgIC8vIGVkaXQgdGhlIHRhc2sgd2hlbiB0aGUgdXNlciBzdWJtaXRzIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgZWRpdF90YXNrX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdyYWIgdGhlIHRhc2sgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlZGl0X3Rhc2tfZm9ybS5kYXRhc2V0LnRhc2tJbmRleDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3JhYiB0aGUgYWN0aXZlIHByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlX3Byb2plY3QgPSBzY2hlZHVsZUNvbnRyb2xsZXIuZ2V0QWN0aXZlUHJvamVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGVkaXQgdGhlIGFzc29jaWF0ZWQgdGFzayB3aXRoIHRoZSBmb3JtIGluZm9cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza3MgPSBhY3RpdmVfcHJvamVjdC5nZXRMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzc29jX3Rhc2sgPSB0YXNrc1tpbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgYXNzb2NfdGFzay5zZXRUaXRsZShlZGl0X3Rhc2tfZm9ybS50aXRsZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGFzc29jX3Rhc2suc2V0RGVzYyhlZGl0X3Rhc2tfZm9ybS5kZXNjLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzb2NfdGFzay5zZXREdWVEYXRlKGVkaXRfdGFza19mb3JtLmR1ZURhdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBhc3NvY190YXNrLnNldFByaW8oZWRpdF90YXNrX2Zvcm0ucHJpby52YWx1ZSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlLXJlbmRlciB0aGUgbGlzdCBvZiB0YXNrcyBmb3IgdGhlIGFjdGl2ZSBwcm9qZWN0IHRvIHJlZmxlY3QgdGhlIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICBET01Db250cm9sbGVyLmRpc3BsYXlUYXNrcyhhY3RpdmVfcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0dXBEZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gc2V0dXBEZWxldGVQcm9qZWN0KGRlbGV0ZV9pY29uKSB7XG4gICAgICAgIC8vIGRlbGV0ZSB0aGUgYXNzb2NpYXRlZCBwcm9qZWN0IHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBkZWxldGUgbWF0ZXJpYWwtaWNvbiBcbiAgICAgICAgZGVsZXRlX2ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIGdyYWIgdGhlIHByb2plY3QgdGhhdCB0aGUgZGVsZXRlIGljb24gYmVsb25ncyB0byAtLSB0d28gbGV2ZWxzIHVwIHRoZSBET00gdHJlZSBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RfaXRlbSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgYXNzb2NpYXRlZCBwcm9qZWN0IGZyb20gdGhlIHByb2plY3QgbGlzdFxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0X2l0ZW0uZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgIHNjaGVkdWxlQ29udHJvbGxlci5kZWxldGVQcm9qZWN0KGluZGV4KTtcblxuICAgICAgICAgICAgLy8gcmUtcmVuZGVyIHRoZSBsaXN0IG9mIHByb2plY3RzIHRvIHJlZmxlY3QgdGhlIGNoYW5nZVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBzY2hlZHVsZUNvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgICAgIERPTUNvbnRyb2xsZXIuZGlzcGxheVByb2plY3RzKHByb2plY3RzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwRWRpdFByb2plY3QgPSBmdW5jdGlvbiBzZXR1cEVkaXRQcm9qZWN0KGVkaXRfaWNvbikge1xuICAgICAgICAvLyBkb20gcmVmZXJlbmNlc1xuICAgICAgICBjb25zdCBlZGl0X3Byb2plY3RfZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1kaWFsb2cnKTtcbiAgICAgICAgY29uc3QgZWRpdF9wcm9qZWN0X2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LWZvcm0nKTsgXG5cbiAgICAgICAgLy8gb3BlbiB0aGUgZWRpdCBwcm9qZWN0IGZvcm0gd2hlbiB0aGUgaWNvbiBpcyBjbGlja2VkXG4gICAgICAgIGVkaXRfaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gdHJhbnNtaXQgdGhlIHByb2plY3QgaW5kZXggdGhyb3VnaCB0aGUgaW50ZXJhY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgZWRpdF9wcm9qZWN0X2Zvcm0uZGF0YXNldC5wcm9qZWN0SW5kZXggPSBpbmRleDtcblxuICAgICAgICAgICAgLy8gYWxzbyBwcmVmaWxsIHRoZSB0aXRsZSBpbnB1dCB3aXRoIHRoZSBjdXJyZW50IHByb2plY3QgdGl0bGVcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gc2NoZWR1bGVDb250cm9sbGVyLmdldFByb2plY3RzKCk7XG4gICAgICAgICAgICBjb25zdCBhc3NvY19wcm9qZWN0ID0gcHJvamVjdHNbaW5kZXhdO1xuICAgICAgICAgICAgZWRpdF9wcm9qZWN0X2Zvcm0udGl0bGUudmFsdWUgPSBhc3NvY19wcm9qZWN0LmdldFRpdGxlKCk7XG5cbiAgICAgICAgICAgIGVkaXRfcHJvamVjdF9kaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXR1cERlbGV0ZVRhc2sgPSBmdW5jdGlvbiBzZXR1cERlbGV0ZVRhc2soZGVsZXRlX2ljb24pIHtcbiAgICAgICAgLy8gZGVsZXRlIHRoZSBhc3NvY2lhdGVkIGxpc3QgaXRlbSB3aGVuIHRoZSB1c2VyIGNsaWNrIHRoZSBkZWxldGUgbWF0ZXJpYWwtaWNvbiBcbiAgICAgICAgZGVsZXRlX2ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIGdyYWIgdGhlIGxpc3QgaXRlbSB0aGUgZGVsZXRlIGljb24gYmVsb25ncyB0byAtLSB0aHJlZSBsZXZlbHMgdXAgdGhlIERPTSB0cmVlIFxuICAgICAgICAgICAgY29uc3QgbGlzdF9pdGVtID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGFzc29jaWF0ZWQgdGFzayBmcm9tIHRoZSBhY3RpdmUgcHJvamVjdFxuICAgICAgICAgICAgY29uc3QgYWN0aXZlX3Byb2plY3QgPSBzY2hlZHVsZUNvbnRyb2xsZXIuZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBsaXN0X2l0ZW0uZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgIGFjdGl2ZV9wcm9qZWN0LmRlbGV0ZUl0ZW0oaW5kZXgpO1xuXG4gICAgICAgICAgICAvLyByZS1yZW5kZXIgdGhlIGxpc3Qgb2YgdGFza3MgZm9yIHRoZSBhY3RpdmUgcHJvamVjdCB0byByZWZsZWN0IHRoZSBjaGFuZ2VcbiAgICAgICAgICAgIERPTUNvbnRyb2xsZXIuZGlzcGxheVRhc2tzKGFjdGl2ZV9wcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwRWRpdFRhc2sgPSBmdW5jdGlvbiBzZXR1cEVkaXRUYXNrKGVkaXRfaWNvbikge1xuICAgICAgICAvLyBkb20gcmVmZXJlbmNlc1xuICAgICAgICBjb25zdCBlZGl0X3Rhc2tfZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kaWFsb2cnKTtcbiAgICAgICAgY29uc3QgZWRpdF90YXNrX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWZvcm0nKTsgXG5cbiAgICAgICAgLy8gb3BlbiB0aGUgZWRpdCB0YXNrIGZvcm0gd2hlbiB0aGUgaWNvbiBpcyBjbGlja2VkXG4gICAgICAgIGVkaXRfaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gZ3JhYiB0aGUgbGlzdCBpdGVtIHRoZSBlZGl0IGljb24gYmVsb25ncyB0byAtLSB0aHJlZSBsZXZlbHMgdXAgdGhlIERPTSB0cmVlIFxuICAgICAgICAgICAgY29uc3QgbGlzdF9pdGVtID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAvLyB0cmFuc21pdCB0aGUgdGFzayBpbmRleCB0aHJvdWdoIHRoZSBpbnRlcmFjdGlvblxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBsaXN0X2l0ZW0uZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgIGVkaXRfdGFza19mb3JtLmRhdGFzZXQudGFza0luZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICAgIC8vIGFsc28gcHJlZmlsbCB0aGUgaW5wdXRzIHdpdGggdGhlIGN1cnJlbnQgdmFsdWVzIGZyb20gdGhlIGFzc29jIHRhc2tcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZV9wcm9qZWN0ID0gc2NoZWR1bGVDb250cm9sbGVyLmdldEFjdGl2ZVByb2plY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gYWN0aXZlX3Byb2plY3QuZ2V0TGlzdCgpO1xuICAgICAgICAgICAgY29uc3QgYXNzb2NfdGFzayA9IHRhc2tzW2luZGV4XTtcblxuICAgICAgICAgICAgZWRpdF90YXNrX2Zvcm0udGl0bGUudmFsdWUgPSBhc3NvY190YXNrLmdldFRpdGxlKCk7XG4gICAgICAgICAgICBlZGl0X3Rhc2tfZm9ybS5kZXNjLnZhbHVlID0gYXNzb2NfdGFzay5nZXREZXNjKCk7XG4gICAgICAgICAgICBlZGl0X3Rhc2tfZm9ybS5kdWVEYXRlLnZhbHVlID0gYXNzb2NfdGFzay5nZXREdWVEYXRlKCk7XG4gICAgICAgICAgICBlZGl0X3Rhc2tfZm9ybS5wcmlvLnZhbHVlID0gYXNzb2NfdGFzay5nZXRQcmlvKCk7XG5cbiAgICAgICAgICAgIGVkaXRfdGFza19kaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBpbml0aWFsaXplUGFnZSwgc2V0dXBEZWxldGVQcm9qZWN0LCBzZXR1cEVkaXRQcm9qZWN0LCBzZXR1cERlbGV0ZVRhc2ssIHNldHVwRWRpdFRhc2sgfVxufSgpO1xuXG5mdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBhZGQgdGVzdCBwcm9qZWN0XG4gICAgc2NoZWR1bGVDb250cm9sbGVyLmFkZFByb2plY3QoJ1Rlc3QgUHJvamVjdCcpO1xuXG4gICAgLy8gZ3JhYiB0aGUgdGVzdCBwcm9qZWN0XG4gICAgY29uc3QgcHJvamVjdHMgPSBzY2hlZHVsZUNvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKTtcbiAgICBjb25zdCB0ZXN0X3Byb2plY3QgPSBwcm9qZWN0c1swXTtcblxuICAgIC8vIGNyZWF0ZSBhbmQgYWRkIGEgdGVzdCB0YXNrIHRvIHRoZSBwcm9qZWN0XG4gICAgdGVzdF9wcm9qZWN0LmFkZEl0ZW0gKFxuICAgICAgICAnVG8tRG8gV2Vic2l0ZSBCYWNrLUVuZCcsIFxuICAgICAgICAnRmluaXNoIHNldHRpbmcgdXAgdGhlIGJhY2stZW5kIGhhbmRsaW5nIG9mIHRhc2tzIGFuZCBwcm9qZWN0cywgdGhlbiBsaW5rIHVwIHdpdGggZnJvbnQtZW5kIGRpc3BsYXknLFxuICAgICAgICAnRmViIDIxc3QnLFxuICAgICAgICAnbWVkaXVtJ1xuICAgICk7XG5cbiAgICAvLyBmcm9udC1lbmQgc2V0dXBcbiAgICBwYWdlSW50ZXJmYWNlLmluaXRpYWxpemVQYWdlKCk7XG59XG5cbmRlYnVnKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==