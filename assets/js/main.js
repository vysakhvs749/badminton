/*---------------------------
 CSS Index  
****************************

1. swiperActivation
2. vedioActivation
3. myAudio
4. metismenu
5. sideMenu
6. cartActivation
7. datePicker
8. timePicker
9. salActive
10. stickySidebar
11. searchOpton
12. counterUp
13. calender_course_details
14. wowActive
15. navbaractive


======================*/



(function ($) {
  'use strict';

  var imJs = {
      m: function (e) {
          imJs.d();
          imJs.methods();
      },
      d: function (e) {
          this._window = $(window),
          this._document = $(document),
          this._body = $('body'),
          this._html = $('html')
      },
      methods: function (e) {
        imJs.swiperActivation();
        imJs.vedioActivation();
        imJs.myAudio(); 
        imJs.metismenu(); 
        imJs.sideMenu(); 
        imJs.cartActivation(); 
        imJs.datePicker(); 
        imJs.timePicker(); 
        imJs.salActive(); 
        imJs.preloader(); 
        imJs.stickySidebar(); 
        imJs.searchOpton(); 
        imJs.counterUp();
        imJs.calender_course_details();
        imJs.wowActive();
        imJs.navbaractive();
      },
      swiperActivation: function (){
        $(document).ready(function(){
          var swiper_1 = new Swiper(".rts-bannerSlider3", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1800,
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'progressbar',
              clickable: 'true',
            }
          });
          var swiper_2 = new Swiper(".rts-imageSlider", {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            speed: 1800,
            loop: true,
          });

          swiper_1.on('slideChange', function () {
              console.log('slider moved');
              var activeslide = swiper_1.realIndex;
              var totalslide = swiper_1.slides.length;
              console.log(activeslide);
              $(".activeslide").html('0' + (activeslide + 1));
              $(".totalslide").html('0' + (totalslide-2));
          });
        
          swiper_1.controller.control = swiper_2;
          swiper_2.controller.control = swiper_1;
        
        
         });
         
        $(document).ready(function() {
          var swiper = new Swiper(".rts-bannerSlider", {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            speed: 1500,
            loop: true,
            autoplay: {
              delay: 6000,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable:"true",
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".rts-testimonialSlide2", {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            breakpoints: {
              1500: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 2,
              },
              880: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              }
            },
            autoplay: {
              delay: 2500,
            },
            pagination: {
              el: ".swiper-pag",
              clickable: true,
            },
          });
        });
        $(document).ready(function() {
          var swiper_1 = new Swiper(".rts-bannerSlider2", {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            speed: 1500,
            loop: true,
            autoplay: {
              delay: 6000,
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'progressbar',
              clickable: 'true',
            },
          });

          swiper_1.on('slideChange', function () {
            console.log('slider moved');
            var activeslide = swiper_1.realIndex;
            var totalslide = swiper_1.slides.length;
            console.log(activeslide);
            $(".activeslide").html('0' + (activeslide + 1));
            $(".totalslide").html('0' + (totalslide-2));
        });

        });

        $(document).ready(function() {
          var swiper = new Swiper(".rts-gallerySlide", {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1500,
            autoplay: {
              delay: 3000,
            },
            pagination: {
              el: ".swiper-pagination2",
              clickable:"true",
            },
            breakpoints: {
              1500: {
                slidesPerView: 3,
              },
              1199: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              }
            },
          });
        });

        $(document).ready(function() {
          var swiper = new Swiper(".rts-brandSlider", {
            slidesPerView: 5,
            spaceBetween: 30,
            speed: 1500,
            autoplay: {
              delay: 3000,
            },
            breakpoints: {
              1500: {
                slidesPerView: 5,
              },
              1199: {
                slidesPerView: 5,
              },
              991: {
                slidesPerView: 4,
              },
              767: {
                slidesPerView: 3,
              },
              575: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 1,
              }
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".rts-teamSlider", {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1500,
            autoplay: {
              delay: 3000,
            },
            breakpoints: {
              1500: {
                slidesPerView: 3,
              },
              1199: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              }
            },
            pagination: {
              el: '.swiper-progress',
              type: 'progressbar',
              clickable: 'true',
            },
          });
        });

        $(document).ready(function() {
          var swiper = new Swiper(".rts-testimonialSlide", {
            slidesPerView: 1,
            speed: 1500,
            loop: true,
            autoplay: {
              delay: 3000,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination3",
              clickable:"true",
            },
            breakpoints: {
              767: {
                slidesPerView: 1,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              }
            },
          });
        });

        $(document).ready(function() {
          var swiper = new Swiper(".mySwiper-wedding", {
            slidesPerView: 1,
            speed: 1500,
            loop: true,
            autoplay: {
              delay: 3000,
            },
            parallax: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });

        $(document).ready(function(){
          var swiper = new Swiper(".swiper-container-h1", {
              direction: "horizontal",
              effect: "slide",
              autoplay: false,
              parallax: true,
              speed: 1600,
              rtl: true,
              loop: true,
              loopFillGroupWithBlank: !0,
              keyboard: {
                enabled: true,
                onlyInViewport: true
              },
              scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
                draggable: true
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              pagination: {
                  el: ".swiper-pagination",
                  type: "bullets",
                  clickable:"true"
                }
            });
      });
      },
      vedioActivation: function (e) {
        $(document).ready(function(){
          $('.popup-youtube, .popup-vimeo').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
          });
        });
      },
      myAudio: function (e){
        $(document).ready (function(){
          function myFunction() {
            var x = document.getElementById("myAudio").duration;
           
          };
          $(function() {
            $('audio').audioPlayer();
        });
        
        });
      },
      // metismenu
      metismenu:function(){
        $('#mobile-menu-active').metisMenu();
      },
      // side menu desktop
      sideMenu:function(){
        $(document).on('click', '.menu-btn', function () {
          $("#side-bar").addClass("show");
          $("#anywhere-home").addClass("bgshow");
        });
        $(document).on('click', '.close-icon-menu', function () {
          $("#side-bar").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
        $(document).on('click', '#anywhere-home', function () {
          $("#side-bar").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
        $(document).on('click', '.onepage .mainmenu li a', function () {
          $("#side-bar").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
      },
      // Cart Bar show & hide
      cartActivation:function(){
        $(document).on('click', '.cart-icon', function () {
          $(".cart-bar").addClass("show");
          $(".anywere").addClass("bgshow");
        });
        $(document).on('click', '.close-cart', function () {
          $(".cart-bar").removeClass("show");
          $(".anywere").removeClass("bgshow");
        });
        $(document).on('click', '.anywere', function () {
          $(".cart-bar").removeClass("show");
          $(".anywere").removeClass("bgshow");
        });
      },
       // sal animatioin activation
      salActive: function () {
        sal({
          threshold: 0.1,
          once: true,
        });
      },
      preloader:function(){
        window.addEventListener('load',function(){
          document.querySelector('body').classList.add("loaded")  
        });          
    },
       // side menu desktop
      stickySidebar: function(e) {
        if ($("#sidebar").length) {
        var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
        var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));
      
        var maxY = footTop - $('#sidebar').outerHeight();
      
        $(window).scroll(function(evt) {
          var y = $(this).scrollTop();
          if (y > top) {
            if (y < maxY) {
              $('#sidebar').addClass('fixed').removeAttr('style');
            } else {
              $('#sidebar').removeClass('fixed').css({
                position: 'absolute',
                top: (maxY - top) + 'px'
              });
            }
          } else {
            $('#sidebar').removeClass('fixed');
          }
        });
      }
      },
      // date picker
      datePicker: function () {
        jQuery(document).ready(function () {
          jQuery('#datepicker').datepicker({
              format: 'dd-mm-yyyy',
              startDate: '+1d'
          });
        });
      },

      timePicker: function () {
        $(function() {
          $('#timepicker').timepicker({
            //timeFormat: 'h:mm p',
            dynamic: false,
            dropdown: true,
            scrollbar: true
          });
        });
      },
      // Search Bar show & hide
      searchOpton:function(){
        $(document).on('click', '.search-icon', function () {
          $(".search-input-area").addClass("show");
          $(".anywere").addClass("bgshow");
        });
        $(document).on('click', '.search-input-area input', function () {
          $(".search-input-area").addClass("show");
        });
        $(document).on('click', '.search-input-inner before', function () {
          $(".search-input-area").addClass("show");
        });
        $('html').click(function (e) {
          if (!$(e.target).hasClass('show')) {
            $(".search-input-area").removeClass("show");
          }
          $(document).on('click', '.search-close-icon', function () {
            $(".search-input-area").removeClass("show");
            $(".anywere").removeClass("bgshow");
          });
        });
      },
      // counter up
      counterUp: function (e) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
          });
          $('.counter').addClass('animated fadeInDownBig');
          $('h3').addClass('animated fadeIn');
      },

      calender_course_details: function() {
        var real_time = document.getElementsByClassName('calender-real-time');
        if(real_time.length){
          var Cal = function(divId) {

            //Store div id
            this.divId = divId;
          
            // Days of week, starting on Sunday
            this.DaysOfWeek = [
              'Sun',
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat'
            ];
          
            // Months, stating on January
            this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
          
            // Set the current month, year
            var d = new Date();
          
            this.currMonth = d.getMonth();
            this.currYear = d.getFullYear();
            this.currDay = d.getDate();
          
          };
          
          // Goes to next month
          Cal.prototype.nextMonth = function() {
            if ( this.currMonth == 11 ) {
              this.currMonth = 0;
              this.currYear = this.currYear + 1;
            }
            else {
              this.currMonth = this.currMonth + 1;
            }
            this.showcurr();
          };
          
          // Goes to previous month
          Cal.prototype.previousMonth = function() {
            if ( this.currMonth == 0 ) {
              this.currMonth = 11;
              this.currYear = this.currYear - 1;
            }
            else {
              this.currMonth = this.currMonth - 1;
            }
            this.showcurr();
          };
          
          // Show current month
          Cal.prototype.showcurr = function() {
            this.showMonth(this.currYear, this.currMonth);
          };
          
          // Show month (year, month)
          Cal.prototype.showMonth = function(y, m) {
          
            var d = new Date()
            // First day of the week in the selected month
            , firstDayOfMonth = new Date(y, m, 1).getDay()
            // Last day of the selected month
            , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
            // Last day of the previous month
            , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
          
          
            var html = '<table>';
          
            // Write selected month and year
            html += '<thead><tr>';
            html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
            html += '</tr></thead>';
          
          
            // Write the header of the days of the week
            html += '<tr class="days">';
            for(var i=0; i < this.DaysOfWeek.length;i++) {
              html += '<td>' + this.DaysOfWeek[i] + '</td>';
            }
            html += '</tr>';
          
            // Write the days
            var i=1;
            do {
          
              var dow = new Date(y, m, i).getDay();
          
              // If Sunday, start new row
              if ( dow == 0 ) {
                html += '<tr>';
              }
              // If not Sunday but first day of the month
              // it will write the last days from the previous month
              else if ( i == 1 ) {
                html += '<tr>';
                var k = lastDayOfLastMonth - firstDayOfMonth+1;
                for(var j=0; j < firstDayOfMonth; j++) {
                  html += '<td class="not-current">' + k + '</td>';
                  k++;
                }
              }
          
              // Write the current day in the loop
              var chk = new Date();
              var chkY = chk.getFullYear();
              var chkM = chk.getMonth();
              if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
                html += '<td class="today">' + i + '</td>';
              } else {
                html += '<td class="normal">' + i + '</td>';
              }
              // If Saturday, closes the row
              if ( dow == 6 ) {
                html += '</tr>';
              }
              // If not Saturday, but last day of the selected month
              // it will write the next few days from the next month
              else if ( i == lastDateOfMonth ) {
                var k=1;
                for(dow; dow < 6; dow++) {
                  html += '<td class="not-current">' + k + '</td>';
                  k++;
                }
              }
          
              i++;
            }while(i <= lastDateOfMonth);
          
            // Closes table
            html += '</table>';
          
            // Write HTML to the div
            document.getElementById(this.divId).innerHTML = html;
          };
          
          // On Load of the window
          window.onload = function() {
          
            // Start calendar
            var c = new Cal("divCal");			
            c.showcurr();
          
            // Bind next and previous button clicks
            getId('btnNext').onclick = function() {
              c.nextMonth();
            };
            getId('btnPrev').onclick = function() {
              c.previousMonth();
            };
          }
          
          // Get element by id
          function getId(id) {
            return document.getElementById(id);
          }
        }

      },
       // waw js activation
      wowActive: function () {
        new WOW().init();
      },

      navbaractive: function(){
        // Get all navigation links
        var navLinks = document.querySelectorAll('.nav-item a');

        // Add click event listener to each link
        navLinks.forEach(function(link) {
          link.addEventListener('click', function() {
            // Remove the "active" class from all links
            navLinks.forEach(function(innerLink) {
              innerLink.classList.remove('active');
            });

            // Add the "active" class to the clicked link
            link.classList.add('active');
          });
        });
      }

      
  }

  $(window).on("scroll", function() {
    var ScrollBarPostion = $(window).scrollTop();
    if (ScrollBarPostion > 150) {
      $(".golfy-header-area").addClass("header-sticky");      
    } else {
      $(".golfy-header-area").removeClass("header-sticky");
      $(".golfy-header-area .golfy-header-top").removeClass("remove-content");     
    }
  });

  	/* magnificPopup img view */
	$('.gallery-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

  // Day 
  var rts_date = $('#echo-date');
  if(rts_date.length){
    const weekday = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    const month = ["Jan","Feb","March","April","May","June","July","August","Sept","Oct","Nov","Dec"];
    const d = new Date();
    let day = weekday[d.getUTCDay()];
    let mdate = d.getDate();
    const year = d.getFullYear().toString().substr(2, 2);
    let mname = month[d.getMonth()];
    document.getElementById("echo-date").innerHTML = '<strong>'+day+'</strong>'+ ', ' + mdate+ ' ' + mname + '  '+ year ;
  }

  // stickySidebar
    if (typeof $.fn.theiaStickySidebar !== "undefined") {
      $(".sticky-coloum-wrap .sticky-coloum-item").theiaStickySidebar({
        additionalMarginTop: 130,
      });
    }




  var win=$(window);
  var totop = $('.scroll-top-btn');    
  win.on('scroll', function() {
      if (win.scrollTop() > 150) {
          totop.fadeIn();
      } else {
          totop.fadeOut();
      }
  });
  totop.on('click', function() {
      $("html,body").animate({
          scrollTop: 0
      }, 500)
  });

  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  imJs.m();



  $(function () {
		$(".button").on("click", function () {
			var $button = $(this);
			var $parent = $button.parent();
			var oldValue = $parent.find('.input').val();

			if ($button.text() == "+") {
				var newVal = parseFloat(oldValue) + 1;
			} else {
				// Don't allow decrementing below zero
				if (oldValue > 1) {
					var newVal = parseFloat(oldValue) - 1;
				} else {
					newVal = 1;
				}
			}
			$parent.find('a.add-to-cart').attr('data-quantity', newVal);
			$parent.find('.input').val(newVal);
		});
	});

  $(document).ready(function() {
    // Get the current URL or route
    var currentURL = window.location.pathname;
  
    // Remove the leading slash
    currentURL = currentURL.replace(/^\//, '');
  
    // Add the "active" class to the corresponding menu item and its parent
    $('.menu-item a').each(function() {
      var menuItemURL = $(this).attr('href').replace(/^\//, '');
  
      if (menuItemURL === currentURL) {
        $(this).addClass('active');
        $(this).closest('li.golfy-has-dropdown').addClass('active');
        $(this).closest('li.sub-dropdown').addClass('active'); // Add 'active' class to parent <li>
      }
    });
  });
  
})(jQuery, window)