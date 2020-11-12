const url = "https://64hhto6qci.execute-api.us-east-1.amazonaws.com/testStage/add-visitor";

/*$('.visitor-img').on('error', function() {
  console.log("error");
  $('.visitor-img').attr('src', 'https://visitor-image.s3.amazonaws.com/noPeople.jpg');
  $('input').prop('disabled', true);
  $('button').prop('disabled', true);
});*/

$(document).ready(function() {
  $.ajax({
    url: "https://64hhto6qci.execute-api.us-east-1.amazonaws.com/testStage/checkfile",
    crossDomain: true,
    type: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  }).done(function(response) {
    console.log(response);
    if (response.status === true) {
      $('.visitor-img').attr('src', 'https://visitor-image.s3.amazonaws.com/new_visitor.jpeg');
      $('input').prop('disabled', false);
      $('button').prop('disabled', false);
    } else {
      $('.visitor-img').attr('src', 'https://visitor-image.s3.amazonaws.com/noPeople.jpg');
      $('input').prop('disabled', true);
      $('button').prop('disabled', true);
    }
  });
});

$('#submitButton').click(function() {
  if ($('#nameInput').val() === "" || $('#phoneInput').val() === "") {
    alert("Please type in all the information.")
  } else {
    var data = {
      "permission": true,
      "name": $('#nameInput').val(),
      "phone_number": $('#phoneInput').val()
    };
    $.ajax({
      url: url,
      crossDomain: true,
      type: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      dataType: "json"
    }).done(function(response) {
      console.log(response);
      window.location.href = "https://smart-door.onrender.com/allowed";
    });
  }

})

$('#denyButton').click(function() {
  var data = {
    "permission": false
  };
  $.ajax({
    url: url,
    crossDomain: true,
    type: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data),
    dataType: "json"
  }).done(function(response) {
    console.log(response);
    window.location.href = "https://smart-door.onrender.com/denied";
  });
})
