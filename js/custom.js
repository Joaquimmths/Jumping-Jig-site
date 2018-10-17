$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '6696988147',
        limit: 45,
        resolution: 'standard_resolution',
        accessToken: '6696988147.1677ed0.6b7f8462b4524fb1928445ed688f7769',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" width="350" height="300" alt="{{caption}}"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});