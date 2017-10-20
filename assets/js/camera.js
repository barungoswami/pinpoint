$(document).ready(function() {
  var uploadBtn = $('#upload-button');

  // uploadBtn.click(function() {
  //   // debugger;
  // });

  uploadBtn.change(function(event) {
    event.preventDefault();
    debugger;
    var file = event.target.files[0];
    // console.log(file);
    //
    // var fd = new FormData();
    // fd.append('file', input.files[0]);

    $.ajax({
      url: 'https://api.einstein.ai/v2/vision/predict',
      method: 'POST',
      // data:
      // processData: false,
      // contentType: false,
      success: function(data) {
        alert(data);
      },
      headers: {
        Authorization:
          'Bearer HVBKD5M6YCW74BSJTUDHJTUXQBTM34HVUXCHJBBJ3WUIXXW4HVJQIZOVX7FQZ5GPYEZYPMUCY7EJHLW43F2AXB2UJ2KSQOA6DSUDSFQ',
        'Cache-Control': 'no-cache',
        'Content-Type': 'multipart/form-data'
      }
    });
    // .done(function(res) {
    //   debugger;
    //   // format res in card format to show image and data
    //   console.log(res);
    // });
  });
});
