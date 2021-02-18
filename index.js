$( document ).ready(function() {


    var cardDetails=[
        {
            "name":"Aladdin","genere":"2019 . Action","subTitle":"Fantasy","rating":8.5,"totalReviews":"341,654","src":"./assets/shazam.jpg"
        },

        {   "name":"Avengers:end Game","genere":"2019 . Action","subTitle":"Adventure","rating":8.9,"totalReviews":"341,654","src":"./assets/avengers.jpg"
        },

        {   "name":"Dumo","genere":"2019 . Action","subTitle":"Romance","rating":8.1,"totalReviews":"341,654","src":"./assets/alita.jpg"
        },

        {   "name":"Captain Marvel","genere":"2019 . Action","subTitle":"Fantasy","rating":8.5,"totalReviews":"341,654","src":"./assets/captainMarvel.jpg"
        },

        {   "name":"Aladdin","genere":"2019 . Action","subTitle":"Adventure","rating":8.5,"totalReviews":"341,654","src":"./assets/shazam.jpg"
        },
        {
            "name":"Aladdin","genere":"2019 . Action","subTitle":"Fantasy","rating":8.5,"totalReviews":"341,654","src":"./assets/shazam.jpg"
        },

        {
            "name":"Avengers:end Game","genere":"2019 . Action","subTitle":"Adventure","rating":8.9,"totalReviews":"341,654","src":"./assets/avengers.jpg"
        },

        {
             "name":"Captain Marvel","genere":"2019 . Action","subTitle":"Romance","rating":8.5,"totalReviews":"341,654","src":"./assets/captainMarvel.jpg"
        },

        { 
            "name":"Aladdin","genere":"2019 . Action", "subTitle":"Romance", "rating":8.5,"totalReviews":"341,654","src":"./assets/shazam.jpg"
        },

        {
            "name":"Dumo","genere":"2019 . Action","subTitle":"Romance","rating":8.1,"totalReviews":"341,654","src":"./assets/alita.jpg"
        },

        { 
            "name":"Captain Marvel","genere":"2019 . Action","subTitle":"Fantasy","rating":8.5,"totalReviews":"341,654","src":"./assets/captainMarvel.jpg"
        },

        {
            "name":"Aladdin","genere":"2019 . Action","subTitle":"Fantasy", "rating":8.5,"totalReviews":"341,654","src":"./assets/shazam.jpg"
        },

        { 
            "name":"Aladdin","genere":"2019 . Action","subTitle":"Adventure","rating":8.5,"totalReviews":"341,654","src":"./assets/shazam.jpg"
        },

        {
            "name":"Avengers:end Game", "genere":"2019 . Action","subTitle":"Adventure","rating":8.9,"totalReviews":"341,654","src":"./assets/avengers.jpg"
        },

        {
            "name":"Dumo","genere":"2019 . Action","subTitle":"Romance","rating":8.1,"totalReviews":"341,654","src":"./assets/alita.jpg"
        },

        {
            "name":"Captain Marvel", "genere":"2019 . Action","subTitle":"Fantasy","rating":8.5,"totalReviews":"341,654","src":"./assets/captainMarvel.jpg"
        },

        {
            "name":"Aladdin","genere":"2019 . Action", "subTitle":"Fantasy", "rating":8.5,"totalReviews":"341,654","src":"./assets/shazam.jpg"
        },
        
        { 
            "name":"Avengers:end Game","genere":"2019 . Action","subTitle":"Adventure","rating":8.9,"totalReviews":"341,654","src":"./assets/avengers.jpg"
        },

        {
            "name":"Dumo","genere":"2019 . Action","subTitle":"Romance","rating":8.1,"totalReviews":"341,654","src":"./assets/alita.jpg"
        },

        {
            "name":"Captain Marvel","genere":"2019 . Action", "subTitle":"Romance","rating":8.5,"totalReviews":"341,654","src":"./assets/captainMarvel.jpg"
        },

        {
            "name":"Aladdin","genere":"2019 . Action","subTitle":"Romance","rating":8.5,"totalReviews":"341,654","src":"./assets/shazam.jpg"
        },

        {
            "name":"Aladdin", "genere":"2019 . Action","subTitle":"Adventure","rating":8.5,"totalReviews":"341,654","src":"./assets/shazam.jpg"
        },

        {
            "name":"Avengers:end Game", "genere":"2019 . Action","subTitle":"Adventure", "rating":8.9,"totalReviews":"341,654","src":"./assets/avengers.jpg"
        },
        
        {
            "name":"Captain Marvel","genere":"2019 . Action","subTitle":"Romance","rating":8.5,"totalReviews":"341,654","src":"./assets/captainMarvel.jpg"
        }
    
    ];
   

        for(let i=0;i<cardDetails.length;i++){
            var $innerHTML =`<div class="cardWrapper col-sm-3">
            <div class="cardImg">
            <img class="posterImage" alt="poster" src=${cardDetails[i].src}>
            </div>
            <div class="cardDetails">
                <div class="movieDetails">
                    <h4 class="movieName">${cardDetails[i].name}</h4>
                </div>
                <div class="movieGenere">
                    <p class="genereValue">${cardDetails[i].genere}<span class="genereSubtitle">${cardDetails[i].subTitle}</span></p>
                </div>
                <div class="ratings">
                    <img class="ratingStar" alt="ratingStar" src="./assets/star.png">
                    ${cardDetails[i].rating}<span class="totalReviews">(${cardDetails[i].totalReviews})</span>
                </div>
            </div>
        </div>`;

        $(".browserByCategoryCarousel").append($innerHTML);
        }
    $(".browseByCategory").find(".categoryName").each(function(){
        
       if($(this).hasClass("active")){
           var count=0;
        var $text=$(this).text().toLowerCase();
        $(".browseByCategory").find(".cardWrapper").each(function(){
            var $currentValue=$(this).find(".genereValue").text().toLowerCase();
            if($currentValue.includes($text)){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        })
       }
       
    });

   $(".categoryName").on('click',function(){
       var $iterateElement=$(this).parent().find(".categoryName");
       var $text=$(this).text();
       $iterateElement.each(function(){
        if($(this).text() == $text){
            $(this).addClass("active");
            $(".browseByCategory").find(".cardWrapper").each(function(){
                $text=$text.toLowerCase();
                console.log($text);
                var $currentValue=$(this).find(".genereValue").text().toLowerCase();
                console.log($currentValue);
                if($currentValue.includes($text)){
                    $(this).show();
                }
                else{
                    $(this).hide();
                }
            })
        }
        else{
            $(this).removeClass("active");
        }
       });

   });


   $(".navItem").on('click',function(){
    var $iterateElement=$(this).parent().find(".navItem");
    var $text=$(this).find(".menuTitle").text();
    $iterateElement.each(function(){
     if($(this).find(".menuTitle").text() == $text){
         $(this).addClass("active");
     }
     else{
         $(this).removeClass("active");
     }
    });

});
$(".browserByCategoryCarousel").slick({
    infinite: false,
    slidesToShow: 4.5, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true
    });

    $(".carousel").slick({
        infinite: false,
    slidesToShow: 2.5, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true
        });

        /**Carousel Arrow Keys**/
    $(".browserByCategoryCarousel").on("mouseover",function(){
        $(".browserByCategoryCarousel").find(".slick-prev").css("visibility", "visible");
        $(".browserByCategoryCarousel").find(".slick-next").css("visibility", "visible");
    }) 
    $(".browserByCategoryCarousel").on("mouseleave",function(){
        $(".browserByCategoryCarousel").find(".slick-prev").css("visibility", "hidden");
        $(".browserByCategoryCarousel").find(".slick-next").css("visibility", "hidden");
    }) 

    $(".carousel ").on("mouseover",function(){
        $(".carousel ").find(".slick-prev").css("visibility", "visible");
        $(".carousel ").find(".slick-next").css("visibility", "visible");
    }) 
    $(".carousel ").on("mouseleave",function(){
        $(".carousel ").find(".slick-prev").css("visibility", "hidden");
        $(".carousel ").find(".slick-next").css("visibility", "hidden");
    }) 

    /**Category Wise Movies**/
    $(".categoryName").on('click',function(){
        $text=$(this).text().toLowerCase();
        $movieCategorycard = $(".browseByCategory").find(".browserByCategoryCarousel");
        $movieCategorycard.each(function(){
            $currentText=$(this).attr("id");
            if($currentText == $text){
                $(this).addClass("active");
            }
            else{
                $(this).removeClass("active");
            }
        });
    });

});
