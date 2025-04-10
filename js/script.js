// Banner Slider part Start
$('.banSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots:true,
    fade: false,
    cssEase: 'linear',
    autoplaySpeed: 1800,
  
  });
  
  
  // Banner Slider part End

  // Banner Slider part Start
$('.categorySlider').slick({
    slidesToShow:5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots:true,
    fade: false,
    cssEase: 'linear',
    autoplaySpeed: 1000,
  
  });
  
  
  // Banner Slider part End

//   Mixit up plugin start
$(document).ready(function () {
    var mixer = mixitup('#productContainer', {
        selectors: {
            target: '.mix'
        },
        animation: {
            duration: 300
        }
    });
  });



    

//   Mixit up plugin End