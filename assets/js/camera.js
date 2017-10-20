
// You can't upload a filename from Javascript, the file has to be selected by the user from an <input type="file">

$(document).ready(function() {
  loadImage();
});

var loadImage = function() {
  var uploadBtn = $('#upload-button');
  uploadBtn.change(function(event) {
    event.preventDefault();
    var file = event.target.files[0];
    debugger;
    var formData = new FormData();
    formData['sampleContent'] = file;
    // formData['modelId'] = 'GeneralImageClassifier';

    $.ajax({
      url: 'https://api.einstein.ai/v2/vision/predict',
      method: 'POST',
      headers: {
        'Authorization':
          'Bearer X6VERA4KVSPIWMLJ7TXIYBSIIOZNL36E7MZQW7NFADXQ6ZBE6YLWHTGCOR6EPJP43MPC5GJW2CBOAP6IGINTC25NSVYEFFEHCTDUQZY',
        'Cache-Control': 'no-cache',
        'Content-Type': 'multipart/form-data'
      },
      data: {
        'modelId': 'GeneralImageClassifier',
        // 'sampleContent': file
      },
      formData: formData,
      processData: false,
      contentType: false
    }).done(function(res) {
      // format res in card format to show image and data
      console.log(res);
    });
  });
};
