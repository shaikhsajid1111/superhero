function backgroundChange(){
    var image_container = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];
    
    var random_number = Math.floor(Math.random() * 10);
    
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