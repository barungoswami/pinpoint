$(document).ready(function() {
  uploadImage();
});

var uploadImage = function() {
  var uploadBtn = $('#upload-button');
  uploadBtn.change(function(event) {
    var formData = new FormData();
    var file = event.target.files[0];

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
            'Access-Control-Allow-Origin': '*',
            'Authorization':
              'Bearer X6VERA4KVSPIWMLJ7TXIYBSIIOZNL36E7MZQW7NFADXQ6ZBE6YLWHTGCOR6EPJP43MPC5GJW2CBOAP6IGINTC25NSVYEFFEHCTDUQZY',
            'Cache-Control': 'no-cache'
          },
          data: formData,
          processData: false,
          contentType: false
        }).done(function(res) {
          var hideContent = function(){
              var descriptionText = $('.description');
              var htmlMajor = $('.major');
              uploadBtn.hide();
              descriptionText.hide();
              htmlMajor.text('Your Photo Results');
            };

            var showPhotoCard = function(){
              var probabilities = res.probabilities[0];
              var introArticle = $('#intro');
              var htmlCard = introArticle.append($(`<div class="card"></div>`));
              var htmlContainer = htmlCard.append($(`<div class="container"></div>`));
              var label = probabilities.label.substring(0, probabilities.label.indexOf(","));
              htmlContainer.append($(`<h4 class="label">PinPoint predicted that this is a ${label}.</h4>`))
              // var htmlImage = htmlCard.append($(`<img src="${file.name}")}" style="width:100%"/>`))
              var htmlNewImageButton = htmlCard.append($(`<input action="action" type="button" value="Take Another Photo" return false;" />`));
              htmlNewImageButton.click(function(){
                location.reload();
              })

              // $('.div_imagetranscrits').html('<img src="data:image/png;base64,' + data + '" />');
            };

            showPhotoCard();
            hideContent();
        });
    });
};
