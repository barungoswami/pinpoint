$(document).ready(function() {
  var uploadBtn = $('#upload-button');

  uploadBtn.click(function() {
    // debugger;
  });

  uploadBtn.change(function(event) {
    event.preventDefault();
    var file = event.target.files[0];

    $.ajax({
      url: 'https://api.einstein.ai/v2/vision/predict',
      // beforeSend: function(request) {
      //   request.setRequestHeader('Authority', authorizationToken);
      // },
      method: 'POST',
      data: {
        sampleContent: `@${file}`,
        modelId: 'GeneralImageClassifier'
      },
      cache: false,
      contentType: 'multipart/form-data',
      crossDomain: true,
      headers: {
        Authorization:
          'HVBKD5M6YCW74BSJTUDHJTUXQBTM34HVUXCHJBBJ3WUIXXW4HVJQIZOVX7FQZ5GPYEZYPMUCY7EJHLW43F2AXB2UJ2KSQOA6DSUDSFQ',
        'Cache-Control': 'no-cache',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Credentials': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
      }
      // 'Access-Control-Allow-Methods': 'POST',
      // 'Access-Control-Allow-Headers':
      // 'Origin, X-Requested-With, Content-Type, Accept',
    }).done(function(res) {
      // format res in car format to show image and data
      debugger;
    });
  });
});
