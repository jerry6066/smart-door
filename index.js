const url = "https://64hhto6qci.execute-api.us-east-1.amazonaws.com/testStage/index";

$('#passwordButton').click(function(){
  var data = {
    "name": $('#nameInput').val(),
    "password": $('#passwordInput').val()
  };
  $.ajax({
    url: url,
    crossDomain: true,
    type: "POST",
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify(data),
    dataType: "json"
  }).done(function (response) {
    console.log(response);
    if (response.status === true) {
      $(".welcome").text(response.message);
      window.location.href = "https://smart-door.onrender.com/welcome";
    } else {
      $(".denied").text(response.message);
      window.location.href = "https://smart-door.onrender.com/denied";
    }
  });
})
