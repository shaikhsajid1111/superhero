function backgroundChange(){
    var image_container = ['1.jpg','2.jpg','3.jpg','4.jpg'];
    
    var random_number = Math.floor(Math.random() * 4);
    
    var body_element = document.body.style;
    /*setting css properties*/ 
    body_element.backgroundImage = 'url(../images/' + image_container[random_number] + ')';

    
}
backgroundChange();
$(document).ready(function(){
    $(".btn-search").click(function(){
        $('.overlay').css("display","block");
    })
    $(".closebtn").click(function(){
        $('.overlay').css("display","none");
    });
})