// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'ios', // Automatic theme detection
  // App root data
  

  // App routes
  routes: routes,
    
     on: {
    // each object key means same name event handler
    routerAjaxStart: function (xhr) {
      app.progressbar.show('multi');
    },
    routerAjaxComplete: function (popup) {
      infiniteLoading = false;
      app.progressbar.hide();
    },
    
    
  },
});


// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});

var infoView = app.views.create('#view-info', {
  url: '/info/'
});

var settingsView = app.views.create('#view-iphone', {
  url: '/iphone/'
});

const popup = document.querySelector('.popup');
const x = document.querySelector('.popup-content h1')

window.addEventListener('load', () => {
   popup.classList.add('showPopup');
   popup.childNodes[1].classList.add('showPopup');
     })
     x.addEventListener('click', () => {
         popup.classList.remove('showPopup');
         popup.childNodes[1].classList.remove('showPopup');
     })



        if (navigator.userAgent.match(/iPad|iPhone|iPod/i)) document.getElementById("info_label").innerHTML = ((navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].replace(/_/g, ".").replace("OS", "iOS") + " - Kurd_Store_App v2.1");
        else {
            document.getElementById("info_label").innerHTML = "  SeeYouIOS";
            $$('#info_label').css('margin-bottom', '-36px');
        }












