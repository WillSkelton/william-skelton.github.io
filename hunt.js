var form = document.getElementById('form');

document.getElementById('button').addEventListener("click", function () {
    // document.getElementById("textField").value = "Hello World";
    console.log(document.getElementById("textField").value);

    var password = document.getElementById("textField").value.replace(/\s/g, '')

    if (password === "43617964652d36") {
      document.getElementById("feedback").innerHTML ='Access Granted'
      document.getElementById("url").innerHTML = 'Go here';
      document.getElementById("url").href = 'https://photos.app.goo.gl/qAK4pYwhVEF1m0zX2'
    }
    else{
      console.log('Incorrect');
      document.getElementById("feedback").innerHTML ='Access Denied'
    }


});
