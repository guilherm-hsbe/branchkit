/*Fonts*/
    // GoogleAPIS
var googleAPIS = document.createElement('link');
googleAPIS.setAttribute('rel', 'preconnect');
googleAPIS.setAttribute('href', 'https://fonts.googleapis.com');
document.head.appendChild(googleAPIS);

    // GStatic
var fontGStatic = document.createElement('link');
fontGStatic.setAttribute('rel', 'preconnect');
fontGStatic.setAttribute('href', 'https://fonts.gstatic.com');
document.head.appendChild(fontGStatic);

    // Font-Inter
var fontInterStyle = document.createElement('link');
fontInterStyle.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
fontInterStyle.setAttribute('rel', 'stylesheet');
document.head.appendChild(fontInterStyle);

    // Font-Source-Code-Pro
var fontInterStyle = document.createElement('link');
fontInterStyle.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600;700;800;900&display=swap');
fontInterStyle.setAttribute('rel', 'stylesheet');
document.head.appendChild(fontInterStyle);

// Font-Awesome
var awesIcons = document.createElement('script');
awesIcons.setAttribute('src', 'https://kit.fontawesome.com/f8b51f3b83.js');
awesIcons.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(awesIcons);

// BootStrap 5.3
var bootstrap = document.createElement('link');
bootstrap.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
bootstrap.setAttribute('rel', 'stylesheet');
bootstrap.setAttribute('integrity', 'sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN');
bootstrap.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(bootstrap)

document.addEventListener('DOMContentLoaded', function () {
    // Bootstrap 5.3 JavaScript
    var bootstrapJS = document.createElement('script');
    bootstrapJS.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js');
    bootstrapJS.setAttribute('integrity', 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL');
    bootstrapJS.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(bootstrapJS);
});