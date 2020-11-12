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
      window.location.href = "https://smart-door.onrender.com/welcome/?msg="+response.message;
    } else {
      window.location.href = "https://smart-door.onrender.com/denied/?msg="+response.message;
    }
  });
})

$('.welcome').text(window.location.search.split('?msg=')[1].replace('%20', ' '))
$('.denied').text(window.location.search.split('?msg=')[1].replace('%20', ' '))
