$(document).ready(function() {
  uploadImage();
  hideLoader();
});

 function uploadImage() {
  var uploadBtn = $('#upload-button');
  uploadBtn.change(function(event) {
    var formData = new FormData();
    var file = event.target.files[0];
    var reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    }
    if (formData) {
      formData.append('sampleContent', file);
      formData.append('modelId', 'GeneralImageClassifier');
    }

    showLoader();

        $.ajax({
          url: 'https://api.einstein.ai/v2/vision/predict',
          method: 'POST',
          headers: {
            'Authorization':
              'Bearer RIWQF2GESRUBC4C6PU6M6QJN2ZBOE37RYGTFHQ5ACMTGCP6LWK32YLLS2WNGMVLU4DSO7HTNWWCL426DLFMTSSBUWZH6SXTFG2QXGMY',
            'Cache-Control': 'no-cache'
          },
          data: formData,
          processData: false,
          contentType: false
        }).done(function(res) {
          (function(){
              $('.loader').hide();
              $('#label-button').hide();
              var descriptionText = $('.description');
              var htmlMajor = $('.major');
              uploadBtn.hide();
              descriptionText.hide();
              htmlMajor.text('Photo Results');
            })();

            (function(){
              var probabilities = res.probabilities[0];
              var introArticle = $('#intro');
              var htmlCard = introArticle.append($(`<div class="card"></div>`));
              var fr = new FileReader();
                fr.onload = function () {
                    htmlImage = htmlCard.append($('<img src="'+fr.result+'" style="width:100%"/>'));
                    var htmlContainer = htmlImage.append($(`<div class="container"></div>`));
                    var label = probabilities.label
                    htmlContainer.append($(`<h4 class="label">PinPoint predicted that this is a ${returnStringBeforeComma(label)}.</h4>`))
                    var htmlNewImageButton = htmlContainer.append($(`<button class="another-photo" type="button">Take Another Photo</button>`));
                }
              fr.readAsDataURL(file);
            })();

          takeAnotherPhoto();
        });
    });
};

function hideLoader(){
  $('.loader').hide();
};

function showLoader(){
  $('.loader').show();
  $('#upload-button').hide();
  $('#label-button').hide();
};

function returnStringBeforeComma(string){
  return string.includes(",") ? string.substring(0, string.indexOf(",")) : string;
};

function takeAnotherPhoto(){
  $('#intro').on('click', '.another-photo', function(e){
    e.preventDefault();
    location.reload();
  });
};
