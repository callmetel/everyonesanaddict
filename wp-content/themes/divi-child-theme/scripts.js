jQuery(document).ready(function ($) {

  $('#page-container > .et_pb_section').remove();

  /********************************************/ 
  /*** Remove Auto <p> from Images and Links
  /********************************************/ 

  $.fn.ignore = function(sel){
    return this.clone().find(sel||">*").remove().end();
  };

  $(window).on('load', function(){
    $('img').each(function() {
      var attr = $(this).parent().attr('class');
      if( $(this).parent().is('p') && !$(this).parent().is('a')) {
        $(this).unwrap();
      }
    });

    $('p').each(function() {
      var $this  = $(this),
          ts = $this.ignore("a");
      if (ts.text().length == 0) {
          $(this).find('a').unwrap();
      }
    });

    if( $('body').hasClass('logged-in') ) {
      $('.hdr-icn.login').remove();
    }
    else {
      $('.hdr-icn.my-account').remove();
    };
  });

  $(window).on('load', function(){

    /*************************************/ 
    /*** Add <span> to Menu Item Links
    /*************************************/ 

    $('.menu-item > a').each(function(){
        $(this).addClass('menu-image-title-after');
        $(this).wrapInner('<span class="menu-image-title"></span>');

        /******************************************************************/ 
        /*** Allow User to Click on Name of Mobile Menu Item w/ Children
        /******************************************************************/ 

        $('#mobile_menu > .menu-item-has-children > a > .menu-image-title').on('click', function(event){
          event.stopPropagation();
          var link = $(this).parent().attr('href');
          location.href = link;
        });
        
    });
  });

  /***************************************************************/ 
  /*** Enable Mobile Dropdown for Mobile Menu Item w/ Children
  /***************************************************************/

  function setup_collapsible_submenus() {
      var $menu = $('#mobile_menu'),
          top_level_link = '#mobile_menu .menu-item-has-children > a';
           
      $menu.find('a').each(function() {
          $(this).off('click');
            
          if ( $(this).is(top_level_link) ) {
              // $(this).attr('href', '#');
          }
            
          if ( ! $(this).siblings('.sub-menu').length ) {
              $(this).on('click', function(event) {
                  $(this).parents('.mobile_nav').trigger('click');
              });
          } else {
              $(this).on('click', function(event) {
                  event.preventDefault();
                  $(this).parent().toggleClass('visible');
              });
          }
      });
  }
    
  $(window).load(function() {
    setTimeout(function() {
        setup_collapsible_submenus();
    }, 700);

    $('.hwy-cmmnty-pst-sldr article:eq(0)').addClass('hwy-cmmnty-pst-1');
    $('.hwy-cmmnty-pst-sldr article:eq(1)').addClass('hwy-cmmnty-pst-2');
    $('.hwy-cmmnty-pst-sldr article:eq(2)').addClass('hwy-cmmnty-pst-3');

    var $total = $('.hwy-prdcts-lst .woocommerce-result-count .total').text();

    $('.hwy-prdcts-lst .category-filter-title .total').text('('+$total+' Products)');

  });

  $('.hwy-cmmnty-pst-dot-1').click(function(){
    $('.hwy-cmmnty-pst-dot-1').addClass('hwy-cmmnty-pst-dot-active');
    $('.hwy-cmmnty-pst-dot-2, .hwy-cmmnty-pst-dot-3').removeClass('hwy-cmmnty-pst-dot-active');
  });

  $('.hwy-cmmnty-pst-dot-2').click(function(){
    $('.hwy-cmmnty-pst-dot-2').addClass('hwy-cmmnty-pst-dot-active');
    $('.hwy-cmmnty-pst-dot-1, .hwy-cmmnty-pst-dot-3').removeClass('hwy-cmmnty-pst-dot-active');
  });

  $('.hwy-cmmnty-pst-dot-3').click(function(){
    $('.hwy-cmmnty-pst-dot-3').addClass('hwy-cmmnty-pst-dot-active');
    $('.hwy-cmmnty-pst-dot-1, .hwy-cmmnty-pst-dot-2').removeClass('hwy-cmmnty-pst-dot-active');
  });

  function autoplaySlider() {
    if( $('.hwy-cmmnty-pst-dot-1').hasClass('hwy-cmmnty-pst-dot-active') ) {
      console.log('slide 2');
      $('.hwy-cmmnty-pst-dot-2').trigger('click');
      $('.hwy-cmmnty-pst-sldr article:eq(1)').show(400);
      $('.hwy-cmmnty-pst-sldr article:not(:eq(1))').hide();
    }
    else if( $('.hwy-cmmnty-pst-dot-2').hasClass('hwy-cmmnty-pst-dot-active') ) {
      console.log('slide 3');
      $('.hwy-cmmnty-pst-dot-3').trigger('click');
      $('.hwy-cmmnty-pst-sldr article:eq(2)').show(400);
      $('.hwy-cmmnty-pst-sldr article:not(:eq(2))').hide();
    }
    else if( $('.hwy-cmmnty-pst-dot-3').hasClass('hwy-cmmnty-pst-dot-active') ) {
      console.log('slide 1');
      $('.hwy-cmmnty-pst-dot-1').trigger('click');
      $('.hwy-cmmnty-pst-sldr article:eq(0)').show(400);
      $('.hwy-cmmnty-pst-sldr article:not(:eq(0))').hide();
    }
  }

  $(window).load(function() {
    autoplaySlider();
    if($('body').hasClass('page-id-72') || $('body').hasClass('page-id-89') || $('body').hasClass('blog')) {
      setInterval(function(){
        autoplaySlider();
      },4000);
    }
  });

  /******************************************/ 
  /*** Truncate Product Short Descriptions
  /*****************************************/

  $('.products .product .woocommerce-product-details__short-description').each(function() {
    var title = $.trim($(this).text());
    var max = 150;
    if (title.length > max) {
      var shortText = jQuery.trim(title).substring(0, max - 3) + '...';
      $(this).html('<span class="product-shorten-desc">' + shortText + '</span>');
    }
  });

  /******************************************/ 
  /*** Change Blog Post Meta Arrangement
  /*****************************************/

  $('.hwy-cmmnty-blg .post-meta, .hwy-cmmnty-pst-sldr article .post-meta, .hwy-cmmnty-art-col .post-meta').each(function(){
    var $author = $(this).find('.author').html(),
        $date   = $(this).find('.published').html();
    $(this).html('<span class="published">' + $date + '</span><span class="author vcard"><strong>Contributor: </strong>' + $author + '</span>');
  });

  $('.hwy-cmmnty-cntnt .display-posts-listing .listing-item').each(function(){
    var $author = $(this).find('.author').text().substr(3),
        $date   = $(this).find('.date').html(),
        $link   = $(this).find('.title').attr('href');
    $(this).prepend('<p class="post-meta"><span class="published">' + $date + '</span><span class="author vcard"><strong>Contributor: </strong>' + $author + '</span></p><a href="'+ $link +'" class="hwy-sm-btn hwy-btn--inverted more-link">Read Article</a>');
    $(this).find('.date').remove();
    $(this).find('.author:not(.vcard)').remove();
  });

  

  /******************************************/ 
  /*** Change Blog Post Read More Button
  /*****************************************/

  $('.hwy-cmmnty-blg .post-content .more-link, .hwy-cmmnty-pst-sldr article .more-link').each(function(){
    $(this).text('Read Article');
  });


  $('.hwy-shp-cntnt .category-filter').prependTo('.hwy-prdcts-lst');
  $('.hwy-prdcts-lst ul.products').before($('.hwy-shp-cntnt .shop-title'));

  $('.hwy-shp-cntnt .category-filter option:contains(Select)').text('All Products');

  $('.hwy-shp-cntnt .woocommerce-ordering .orderby option').each(function(){
    var $option    = $(this).text(),
        $newOption = $option.replace('Sort by', '');
    $(this).text($newOption); 
  });

  $('.hwy-shp-cntnt .category-filter .dropdown_product_cat').on('change', function(){
    if($(this).find('option:contains(All Products)').is(':selected')) {
      location.href='/hawwwy/shop';
    };
  });

  $('.hwy-prdcts-lst .page-numbers .prev').text('Prev');
  $('.hwy-prdcts-lst .page-numbers .next').text('Next');

  $('.edit-photo').click(function(e) {
    e.preventDefault();
    $('#load-avatar').trigger('click');
  });


  $('body.single-product .product .entry-summary').append('<div class="acc-container"></div>');

  var $ProductTabCount = $('body.single-product .hwy-prdct-cntnt > .product > .woocommerce-tabs > .woocommerce-Tabs-panel').length;

  for (var i = $ProductTabCount - 1; i >= 0; i--) {
    $('.acc-container').append('<div class="acc-btn"><span></span></div><div class="acc-content"><div class="acc-content-inner"></div></div>');

    if(i === 0 ) {
      $('.acc-btn:eq(0)').addClass('selected');
      $('.acc-content:eq(0)').addClass('open');
    };
  };

  $('body.single-product .hwy-prdct-cntnt > .product > .woocommerce-tabs > .tabs > li').each(function(e) {
    var $tabNumber = $(this).index(),
        $tabTitle  = $(this).text();
    $('.acc-container .acc-btn:eq('+$tabNumber+') span').text($tabTitle);
  });

  $('body.single-product .hwy-prdct-cntnt > .product > .woocommerce-tabs > .woocommerce-Tabs-panel').each(function(e) {
    var $tabNumber = $(this).index();
    $(this).find('h2:eq(0)').remove();
    var $tabContent = $(this).html();

    console.log($tabNumber);

    $('.acc-content:eq('+ ($tabNumber-1) +') .acc-content-inner').append($tabContent);
  });

  $('body.single-product .hwy-prdct-cntnt > .product > .woocommerce-tabs').remove();

  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn'),
          targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();
   
      $('.acc-btn').removeClass('selected');
      $(this).addClass('selected');
      
      $('.acc-content').stop().animate({ height: 0 }, animTime);
      $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
  });

  $('.hair-care-menu-item, #hair-care-dropdown').hover(function() {
    if( !$('#hair-care-dropdown').hasClass('active')) {
      $('#hair-care-dropdown').addClass('active');
    }
  }, function() {
    setTimeout(function(){
      if( !$('#hair-care-dropdown').is(":hover") ) {
        $('#hair-care-dropdown').removeClass('active');
      };
    },250);
  });
});
