$(document).ready(function() {
  var uploadBtn = $('#upload-button');

  // uploadBtn.click(function() {
  //   // debugger;
  // });

  uploadBtn.change(function(event) {
    event.preventDefault();
    var file = event.target.files[0].name;

    //  $.ajax({
    // url: 'handler.ashx', // put a handler instead of direct path
    // data: new FormData().append('file',
    //       document.getElementById("image").files[0]),
    // type: 'POST',
    // success: function (data) {
    //     $('#result').html('Image uploaded was: ' + data);
    // }
    // });

    // var formData = {
    //   sampleContent: file,
    //   modelId: 'GeneralImageClassifier'
    // };

    $.ajax({
      url: 'https://api.einstein.ai/v2/vision/predict',
      method: 'POST',
      data: {
        sampleContent: file,
        modelId: 'GeneralImageClassifier'
      },
      processData: false,
      contentType: false,
      headers: {
        Authorization:
          'Bearer 2ADD2POY2IYHK7JJ3HVA4PF5VOHF3D3S2TG7AH5TJO6UNI476WD762OTWVJYU4QYUB24ZS6LGHFELJRCFMT7KIG2PPPQBNDI646UETQ',
        'Cache-Control': 'no-cache'
        'Content-Type': 'multipart/form-data'
      }
    }).done(function(res) {
      // format res in card format to show image and data
      console.log(res);
    });
  });
});
