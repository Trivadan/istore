AOS.init({
  easing: 'ease-in-out-sine',
  duration: 1200
});

$(window).load(function(){
  $(".topheader").sticky({ topSpacing: 0 });
});

//Shop tab
 $(".tab-list li").click(function() {
        $(".tab-list li").removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide().eq($(this).index()).fadeIn(300);
    });
$('.tab-list > li').first().click();

//Shop tab2
 $(".tab-list2 li").click(function() {
        $(".tab-list2 li").removeClass('active');
        $(this).addClass('active');
        $('.tab-content2').hide().eq($(this).index()).fadeIn(300);
    });
$('.tab-list2 > li').first().click();