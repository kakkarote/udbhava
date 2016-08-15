$(function(){
		// console.log("Now running");
  //       $("#typed").typed({
  //               stringsElement: $('#typed-strings'),
  //               typeSpeed: 30,
  //               backDelay: 500,
  //               loop: false,
  //               contentType: 'html', 
  //               loopCount: false,
  //               callback: function(){ foo(); },
  //               resetCallback: function() { newTyped(); }
  //           });

  //           $(".reset").click(function(){
  //               $("#typed").typed('reset');
  //       });

  //       setInterval(function(){        
  //           $("#typed").typed({
  //               stringsElement: $('#typed-strings'),
  //               typeSpeed: 30,
  //               backDelay: 500,
  //               loop: false,
  //               contentType: 'html', 
  //               loopCount: false,
  //               callback: function(){ foo(); },
  //               resetCallback: function() { newTyped(); }
  //           });

  //           $(".reset").click(function(){
  //               $("#typed").typed('reset');
  //           });
  //       }, 17000);

        var bg = [ "./images/pic01.png", "./images/scientist.png", "./images/guest.png" ];
        var i = 0;
        $("#img_id").css("background-image",'url("' + bg[bg.length-1] + '")');
        setInterval(function() {
            $("#img_id").attr("src", bg[i]);
            // $("#img_id").css("background-position","top left,center center");
            i++;
            i = i % bg.length;
            console.log(i);
        },3000);

        // function newTyped(){ /* A new typed object */ }

        // function foo(){ console.log("Callback"); }

});


