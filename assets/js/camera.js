$(document).ready(function() {
  uploadImage();
  hideLoader();
});

 function uploadImage() {
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

    showLoader();

        $.ajax({
          url: 'https://api.einstein.ai/v2/vision/predict',
          method: 'POST',
          headers: {
            'Authorization':
              'Bearer 766UJIHQA6LVI2JTWUPW4RMUWFP3PVRDJRAT3PTMWGJ7Q3QVKZJZWDEJI44NGVELPEZO3R5ION6FZWSRRG7FLSH3SGSYBOZRYRN4K5Y',
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
                    htmlContainer.append($(`<h4 class="label">PinPoint predicted that this is a ${returnStringAfterComma(label)}.</h4>`))
                    var htmlNewImageButton = htmlContainer.append($(`<button class="another-photo" type="button">Take Another Photo</button>`));
                }
              fr.readAsDataURL(file);
            })();
          
            (function(){
              $('#intro').on('click', '.another-photo', function(e){
                e.preventDefault();
                location.reload();
              });
            })();
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

function returnStringAfterComma(string){
  return string.includes(",") ? string.substring(0, string.indexOf(",")) : string;
};
