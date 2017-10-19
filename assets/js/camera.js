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
      method: 'POST',
      data: {
        sampleContent: `@${file}`,
        modelId: 'GeneralImageClassifier'
      },
      cache: false,
      contentType: 'multipart/form-data',
      crossDomain: true,
      // 'Access-Control-Allow-Methods': 'POST',
      // 'Access-Control-Allow-Headers':
      //   'Origin, X-Requested-With, Content-Type, Accept',
      headers: {
        Authorization:
          'BeZDBYOIEZH4SKCMAU25WWD257EPQMUZ4QJZONIJFM7JHVNLLIRTI6MJYYMV45LR5K2A4BAZ6I7N62K3I',
        'Cache-Control': 'no-cache',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
    }).done(function(res) {
      // format res in car format to show image and data
      debugger;
    });
  });
});
