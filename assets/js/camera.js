
// You can't upload a filename from Javascript, the file has to be selected by the user from an <input type="file">

$(document).ready(function() {
  uploadImage();
});

var uploadImage = function() {
  var uploadBtn = $('#upload-button');
  uploadBtn.change(function(event) {
    var formData = new FormData();
    var file = event.target.files[0];
    // debugger;

    if ( window.FileReader ) {
      reader = new FileReader();
      reader.readAsDataURL(file);
    }
    if (formData) {
      formData.append('sampleContent', file);
      formData.append('modelId', 'GeneralImageClassifier');
    }

// requestApiServer
    $.ajax({
      url: 'https://api.einstein.ai/v2/vision/predict',
      method: 'POST',
      headers: {
        'Authorization':
          'Bearer X6VERA4KVSPIWMLJ7TXIYBSIIOZNL36E7MZQW7NFADXQ6ZBE6YLWHTGCOR6EPJP43MPC5GJW2CBOAP6IGINTC25NSVYEFFEHCTDUQZY',
        'Cache-Control': 'no-cache'
        // 'Content-Type': 'multipart/form-data'
      },
      data: formData,
      // formData: formData,
      // cache: false,
      processData: false,
      contentType: false
    }).done(function(res) {
      // format res in card format to show image and data
      console.log(res);
      var probabilities = res.probabilities;
    });
  });
};
