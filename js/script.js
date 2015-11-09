'use strict';var appMaster={preLoader:function(){var imageSources=[];$('img').each(function(){var sources=$(this).attr('src');imageSources.push(sources);});if($(imageSources).load()){$('.pre-loader').fadeOut('slow');setTimeout(function(){$("#header_hip").toggleClass('animated fadeInDown');},1000);}},navSpy:function(){$('#nav.navbar-static-top').affix({offset:{top:$(window).height()}});$('body').scrollspy({target:'#nav'});},smoothScroll:function(){$('a[href*=#]:not([href=#carousel-example-generic], [href=#testimonials-carousel])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},1000);return false;}}});},scollToTop:function(){$('.scroll-top').click(function(){$('body,html').animate({scrollTop:0},1000);});},revSlider:function(){var docHeight=$(window).height();var revapi;revapi=jQuery('.tp-banner').revolution({delay:7000,startwidth:1170,startheight:docHeight,hideThumbs:10,fullWidth:"off",fullScreen:"on",onHoverStop:"off",touchenabled:false,fullScreenOffsetContainer:"",navigationHAlign:"right",navigationVAlign:"bottom",navigationHOffset:80,navigationStyle:"square",soloArrowLeftHalign:"left",soloArrowLeftValign:"bottom",soloArrowRightHalign:"left",soloArrowRightValign:"bottom",soloArrowLeftVOffset:55,soloArrowRightVOffset:10,dottedOverlay:'none'});},stellar:function(){$(window).stellar();},skillsChart:function(){$('.chart').easyPieChart({animate:2000,size:180,lineWidth:10,barColor:"#22a3df"});},maps:function(){google.maps.event.addDomListener(window,'load',init);google.maps.event.addDomListener(window,'resize',init);function init(){var mapOptions={zoom:13,draggable:false,zoomControl:true,scrollwheel:false,streetViewControl:false,center:new google.maps.LatLng(40.869108,-73.892609),styles:[{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]};var mapElement=document.getElementById('map');var map=new google.maps.Map(mapElement,mapOptions);var myLatlng=new google.maps.LatLng(40.869108,-73.892609);var image={url:'../img/map_pin.png',size:new google.maps.Size(27,42),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,32)};var marker=new google.maps.Marker({position:myLatlng,icon:image,map:map,title:'Hello World!'});}},isoTop:function(){var $container=$('#container');$container.isotope({itemSelector:'.item'});$('#filters').on('click','button',function(){$('#filters button').removeClass("current");$(this).addClass("current");var filterValue=$(this).attr('data-filter');$container.isotope({filter:filterValue});});},animateScript:function(){$('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'100%'});$('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'100%'});$('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});$('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'100%'});$('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});$('.scrollpoint.sp-effect6').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated bounceIn');},{offset:'100%'});},canvasHack:function(){var G_vmlCanvasManager;function canvasInit(){var cv=document.createElement('canvas');if(G_vmlCanvasManager!=undefined){G_vmlCanvasManager.initElement(cv);}if(cv.getContext){var ctx=cv.getContext('2d');}}},ThemeSwitcher:function(){$('.Switcher').on('click',function(){$('.theme-switcher .colors').toggle('fast');$(this).toggleClass('active');});var blueConfig=function(){$('link[title=mainStyle]').attr('href','css/styles-blue.css');$('.navbar-brand img').attr('src','img/logo-blue.png');$('img.ipad-image').attr('src','img/samples/ipad-bl.png');$('img.macbook-image').attr('src','img/samples/macbook-bl.png');}
var orangeConfig=function(){$('link[title=mainStyle]').attr('href','css/styles-orange.css');$('.navbar-brand img').attr('src','img/logo-orange.png');$('img.ipad-image').attr('src','img/samples/ipad-bl.png');$('img.macbook-image').attr('src','img/samples/macbook-bl.png');}
var redConfig=function(){$('link[title=mainStyle]').attr('href','css/styles-red.css');$('.navbar-brand img').attr('src','img/logo-red.png');$('img.ipad-image').attr('src','img/samples/ipad-rd.png');$('img.macbook-image').attr('src','img/samples/macbook-rd.png');}
$('.theme-switcher .colors a').on('click',function(){var ThisColor=$(this).attr('class');switch(ThisColor){case'blue':blueConfig();break;case'orange':orangeConfig();break;case'red':redConfig();break;}});}};$(document).ready(function(){appMaster.scollToTop();appMaster.ThemeSwitcher();});var showDialog=function(){$("#myModal").modal('show');};