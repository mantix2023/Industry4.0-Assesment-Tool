$('#download6').click(function(){
    var form1Data = $('#my-di1').serialize();
    var form2Data = $('#my-di2').serialize();
    var form3Data = $('#my-di3').serialize();
    var form4Data = $('#my-di4').serialize();
    var form5Data = $('#my-di5').serialize();
    var form6Data = $('#my-di6').serialize();
    
    // save form data to database or server


    $.ajax({
        type: 'POST',
        url: 'PHP.php',
        data: {email: 'varshinichowdary939@gmail.com'},
        success: function(response) {
          // handle success response
        },
        error: function(xhr, status, error) {
          // handle error response
        }
      });

  });
  