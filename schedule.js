$(document).ready(function() {

  // $('#wid').text(function(i, oldText) {
  //     alert("oldtext = " + oldText);
  //     return oldText === 'hello' ? window.width : oldText;
  // });

  //alert($("#day1").width());

  var is_clicked = false;
  $('#one').click(function(){
    if(is_clicked)  {
        $('#hidePage').animate({"margin-right": '-=200'}, 500);
    } else  {
        $('#hidePage').animate({"margin-right": '+=200'}, 500);
    }
    is_clicked = !is_clicked;
  });

  $('#day1_btn').click(function() {

    $('#day1_btn').addClass("active");
    $('#day2_btn').removeClass("active");

    $('#day1').removeClass('hidden');
    $('#day2').addClass('hidden');
    // $('#day1').css({"display": 'block', 'width': '800px'});
    // $('#day2').css({"display": 'none', 'width': '800px'});
    // document.getElementById('day1').style.display = 'block';
    // document.getElementById('day2').style.display = 'none';

    //alert($("#day1").width());
  });

  $('#day2_btn').click(function() {

    $('#day1_btn').removeClass("active");
    $('#day2_btn').addClass("active");

    $('#day1').addClass('hidden');
    $('#day2').removeClass('hidden');
    // $('#day1').css({"display": 'none', 'width': '800px'});
    // $('#day2').css({"display": 'block', 'width': '800px'});
    // document.getElementById('day1').style.display = 'none';
    // document.getElementById('day2').style.display = 'block';
  });

  $("td").each(function() {
        $(this).width($(this).width());
  });

  $("tr").each(function() {
        $(this).width($(this).width());
  });

  $('#afftest').affix({
        offset: {
          top: $('#afftest').offset().top
        }
  });

  $('#afftest').on('affixed.bs.affix', function(){
        console.log('ready to add space : top = ' + ($('#helper').offset().top+20) );

        //$('#helper').offset().top += 20;


        $('#helper').css({'top': ($('#helper').offset().top + 20) + 'px'} );
  });

  $('#afftest').on('affix-top.bs.affix', function(){
        console.log('ready to remove space : top = ' + ($('#helper').offset().top-20));

        //$('#helper').offset().top -= 20;

        $('#helper').css({'top': ($('#helper').offset().top - 20) + 'px'} );

  });

  //$('#afftest').attr('data-offset-top', $('afftest').top);

//
//   $('#title').affix({
//   offset: {
//     top: 100,
//     bottom: function () {
//       return (this.bottom = $('.footer').outerHeight(true))
//     }
//   }
// })

  $(window).scroll(function() {

    var touchTop = false;

    //console.log('top = ' + ($('#title').offset().top - $(window).scrollTop()));

  //    if( !touchTop && $('#title').offset().top - $(window).scrollTop() <= $('#title').height() ) {
  //
  //
  //      $('#title').css({ 'position': 'fixed', 'float': 'top', 'margin-top': '0px' });
  //
  //     //  if( $('#title').hasClass("fixed_title") ) {
  //     //    $('#title').removeClass("fixed_title");
  //     //  }else {
  //     //    $('#title').addClass("fixed_title");
  //     //  }
  //    }
  //
  //    if( touchTop && $('#title').offset().top - $(window).scrollTop() >= $('#title').height() ) {
  //      $('#title').css({ 'position': 'static', 'float': 'bottom' });
  //    }
      // if( !touchTop && $('#title').offset().top - $(window).scrollTop() === 0 )  {
      //   $('#title').addClass('sticky');
      //   touchTop = true;
      // }
      //
      // if( touchTop && $(window).scrollTop() === 0 ) {
      //   alert('top ');
      //   $('#title').removeClass('sticky');
      //   touchTop = false;
      // }
  });
});
