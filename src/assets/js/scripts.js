$(document).ready(function(){
    $('#mycarousel').carousel({ interval: 2000});
    $('#carouselButton').click(function(){
        if( $('#carouselButton').children('span').hasClass('fa-pause'))
        {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').attr('class','fa fa-play');
        } else
        {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').attr('class','fa fa-pause');
        }
        });

    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle');
        });

    $('#reserveTable').click(function(){
        $('#RserveModal').modal('toggle');
        });    
});