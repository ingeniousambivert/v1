// Basic JS to change the navbar style after scroll

var nav = document.getElementById('nav');
var navt = document.getElementById('navt');
var hm = document.getElementById('hm');
var cn = document.getElementById('cn');
var ab = document.getElementById('ab');


nav.style.background = "transparent";
navt.style.display = "none";

window.onscroll = function () {

  if (window.pageYOffset >= 122) {
    navt.style.display = "none";

    if (window.pageYOffset >= 125) {
      nav.style.opacity = 1;
      nav.style.background = "transparent";
      hm.style.color = "black";
      ab.style.color = "black";
      cn.style.color = "black";
    }

    if (window.pageYOffset >= 700) {
      nav.style.opacity = 1;
      nav.style.background = "transparent";
      hm.style.color = "black";
      ab.style.color = "black";
      cn.style.color = "black";
    }
    if (window.pageYOffset >= 1000) {
      nav.style.opacity = 1;
      nav.style.background = "transparent";
      hm.style.color = "black";
      ab.style.color = "black";
      cn.style.color = "black";
    }
    if (window.pageYOffset >= 1300) {
      nav.style.opacity = 1;
      nav.style.background = "transparent";
      hm.style.color = "black";
      ab.style.color = "black";
      cn.style.color = "black";
    }
    if (window.pageYOffset >= 1450) {
      nav.style.opacity = 1;
      nav.style.background = "transparent";
      hm.style.color = "black";
      ab.style.color = "black";
      cn.style.color = "black";
    }
    if (window.pageYOffset >= 1600) {
      nav.style.opacity = 1;
      nav.style.background = "transparent";
      hm.style.color = "black";
      ab.style.color = "black";
      cn.style.color = "black";
    }
    if (window.pageYOffset >= 1750) {
      nav.style.opacity = 1;
      nav.style.background = "transparent";
      hm.style.color = "black";
      ab.style.color = "black";
      cn.style.color = "black";
    }
    if (window.pageYOffset >= 1880) {
      nav.style.opacity = 1;
      nav.style.background = "transparent";
      hm.style.color = "black";
      ab.style.color = "black";
      cn.style.color = "black";
    }
    if (window.pageYOffset >= 1950) {
      nav.style.opacity = 1;
      nav.style.background = "transparent";
      hm.style.color = "black";
      ab.style.color = "black";
      cn.style.color = "black";
    }
    if (window.pageYOffset >= 2130) {
      nav.style.opacity = 1;
      nav.style.background = "transparent";
      hm.style.color = "black";
      ab.style.color = "black";
      cn.style.color = "black";
    }

    if (window.pageYOffset >= 2190) {
      nav.style.background = "transparent";
      hm.style.color = "white";
      ab.style.color = "white";
      cn.style.color = "white";
    }
    if (window.pageYOffset >= 2250) {
      nav.style.background = "transparent";
      hm.style.color = "white";
      ab.style.color = "white";
      cn.style.color = "white";
    }
    if (window.pageYOffset >= 2330) {
      nav.style.background = "transparent";
      navt.style.display = "inline-block";
      navt.style.opacity = "0.3";
      hm.style.color = "white";
      ab.style.color = "white";
      cn.style.color = "white";

    }
    if (window.pageYOffset >= 2350) {
      nav.style.background = "transparent";
      navt.style.display = "inline-block";
      navt.style.opacity = "0.5";
      hm.style.color = "white";
      ab.style.color = "white";
      cn.style.color = "white";

    }
    if (window.pageYOffset >= 2360) {
      nav.style.background = "transparent";
      navt.style.display = "inline-block";
      navt.style.opacity = "1.0";
      hm.style.color = "white";
      ab.style.color = "white";
      cn.style.color = "white";

    }
  } else {
    nav.style.background = "transparent";
    nav.style.opacity = 1.0;
    navt.style.display = "none";
    hm.style.color = "white";
    ab.style.color = "white";
    cn.style.color = "white";

  }

}
// Google charts

google.charts.load('current', {
  'packages': ['bar']
});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    [
      'Skills', 'Knowledge', 'Efficiency'
    ],
    [
      'PHP & MySQL', 63, 54.3
    ],
    [
      'HTML5 & CSS3', 89, 84.5
    ],
    [
      'JavaScript', 60, 54.3
    ],
    [
      'Python3', 62, 50.9
    ],
    [
      'C++', 77, 73.1
    ]
  ]);

  var options = {
    width: 1000,
    colors: [
      '#353535', '#565656'
    ],
    chart: {
      title: 'Skills Chart',
      subtitle: 'To help you gauge my programming skills'
    },
    bars: 'horizontal',
    series: {
      0: {
        axis: 'Knowledge'
      },
      1: {
        axis: 'Efficiency'
      }
    },
    axes: {
      x: {
        Knowledge: {
          label: ''
        },
        Efficiency: {
          side: 'top',
          label: 'apparent magnitude'
        }
      }
    }
  };

  var chart = new google.charts.Bar(document.getElementById('dual_x_div'));
  chart.draw(data, options);
};

// Mobile Detect JS

/* var detector = new MobileDetect(window.navigator.userAgent)

console.log("Mobile: " + detector.mobile());
console.log("Phone: " + detector.phone());
console.log("Tablet: " + detector.tablet());
console.log("OS: " + detector.os());
console.log("userAgent: " + detector.userAgent());

if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)alert("Mobile/Tablet compatibility is yet to be added to this site. Please use a desktop for best experience." */