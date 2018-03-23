$(document).ready(function(){
    
    console.log("Hi from jquery");
    var b1 = $(document.getElementsByClassName("image1"));
    var offset1 = console.log(b1.offset() + "b1");
    var b2 = $(document.getElementsByClassName("image2"));
    var offset2 = console.log(b2.offset() + "b2");
    var b3 = $(document.getElementsByClassName("image3"));
    var offset3 = console.log(b3.offset());
    var pic = $(document.getElementsByClassName("picture"));
    var grid = $(document.getElementsByClassName("grid-container"));
    var all = $(document.getElementsByClassName("all-pics"));
    var b4 = $(document.getElementsByClassName("image4"));
    var offset4 = console.log(b4.offset());
    var b5 = $(document.getElementsByClassName("image5"));
    var offset5 = console.log(b5.offset());
    var b6 = $(document.getElementsByClassName("image6"));
    var offset6 = console.log(b6.offset());
    var b7 = $(document.getElementsByClassName("image7"));
    var offset7 = console.log(b7.offset());
    var b8 = $(document.getElementsByClassName("image8"));
    var offset8 = console.log(b8.offset());
    var b9 = $(document.getElementsByClassName("image9"));   
    var offset9 = console.log(b9.offset());
          
            
           
$(".grid1").hover(
    function(){

    $(".grid1").css('height', 150)
    $(".grid1").css('width', 150)
    $(".grid1").css('float', 'left')


        $(this).css('height', 300)
        $(this).css('width', 300)
        $(this).toggleClass('forum_hover')
        

            });
    

            $(".grid2").hover(
            function(){

                $(".grid2").css('height', 150)
                $(".grid2").css('width', 150)


                    $(this).css('height', 300)
                    $(this).css('width', 300)
                    $(this).toggleClass('forum_hover')
                    $(this).css('paddingTop', '0')


            
                    });      
        
            



});



                         
                          
                     
                
            
          
    