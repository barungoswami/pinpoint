NAME:
PinPoint
A Nature Identification App

CREATE A STORY:
○ Identify a problem
When hiking out in nature, many hikers are unaware of the identity of the flora and fauna around them. When a hiker stumbles upon a bird they have never seen, they have no way of knowing what kind of bird they are looking at. In a similar sense, if a hiker stumbles upon a plant species that they cannot quite identify, how can they be sure that the plant is not poisonous to the touch? Many times, hikers get themselves into trouble, or fail to identify the beauty around them due to their lack of knowledge with the outside world. What if there was a way to bridge the gap between the unknown and the known? Picture this, a hiker takes a photo of something unknown, uploads the photo to an app, and with the photo (image recognition), the app return a set of data

○ Come up with a solution
PinPoint is a picture recognition app that allows users to pinpoint and identify their surroundings. Whether a possibly poisonous plant, or a new unique spider that they have never encountered, a user will be able to capture a picture of the unidentified creature/plant, and the PintPoint will return a statement on what the picture is of. PinPoint will deliver a few metrics on the new item - what it is, if it is poisonous or not, and a link to read more about the item.
○ Create diagram of solution architecture
	○ Broader view of app
	functionality
		Take a picture
		Gain insight on image -
			- what is in the image
			- safe or poisonous
			- link to read more about
	○ Think through multiple paths
	  ???

WHY IONIC:
ionic - open source html5 native framework that helps build mobile, desktop and web apps
html, js, css - to get mobile app
accessibility and reusability of skills
command line tools - build, test, design
ionic creator - build UI
cloud services
ionic native - camera, touch id, oAuth
ionic view
install dependencies
start new iconic app
documentation and resources

npm install iconic
generate ssh key for ionic
upload key to ionic profile
use git for version control
continuously deploy master

API ENDPOINT KEY:
Einstein private key
-----BEGIN RSA PRIVAT:E KEY-----
MIIEogIBAAKCAQEAoD3EZdNDB/1kSt02hAz0jHQQPROgczuwvcSUlPJX7vFHXQue
LrC7Rbp9B7ze8k7UUwFF/HwiFuu0hwfkz4ku/gucXXKYOACaMGpQWB41iPZyp748
TvZZz28oL0sYPfJE2nP82F5eu1ylYoyRl2a3Bd/PD6F3yUc1mazcJz8Td+FrI+R/
KGCl1NyguiZKH1y3ziJsvXfW/6bp0cEGyUx429/IS1Zh7v10ooWFl8E/KI6hbqy8
C26xoQ2GUwK2d1Op5+PgkOb3+pvNltdw8n11MSeLDnJfX/UXrs3SCctTiF7FFgr2
md9GL3v5pwNT22LRTVBo+9NzOo7Bder8J9mO4QIDAQABAoIBABRaRAu63ZSyNn7b
wgTbsGP2iel4CLUaK8Sup0CT119d/fZvd1Pu1ppwqVjGQHr+UDGKw9zh12KZ5YAR
HJrPjcxupRmpaHQUf4EOv82xaJNQ2hc8LmTJHXcfYzc+joGvt9cXTFIfCmE5zzfJ
KuTUAwMX/jC6DYDfLouqTPwfItXi9BAsaKmbKgTr5UA/Bymgc9xDVz1mZb0OHVij
lrK7ROCksGTQK2mXYbubLWTr1ta6nJbSEe5Uxw2N53HoTXbVLRnoivxsD9D3T8FI
pOhG5imSTOh9qHtHNbQD/n9fNwbU2EwV9BnA+2il3TmfpNXfYr5k2VBYOgrhLfYo
m6APDMECgYEA3lRWQdi6ZmeqD0m2UW/CLdZCYPVp3RJhKtErQkqd2BK6kCrdm7bB
bRystgSFmNJ0C50wohd4kGm+BoJ80nfo079ig+pYJPXC5ljAU/oMtmgTilImHGdP
V03n04RRGIREIPQ9sFb3Qaiz/4T+XMVSxfrBvsNGL+JSPxPVHXqVSjUCgYEAuIJJ
M2hhnYhTWNi/dYdjgRbG9zb3XhSFBsKOKSzQl87hCRZ9cSkEcjXbfIj8DpORcP3v
eAyazthvNQaJG8BZ3LTRa0KS4GVxbFRYH0eL+u07K1Y8u0D9zVG3DBKmMncBsgEi
BymIBy7Ix9WZP744nwMZrxrbbdAz30gsNEbVZ30CgYAvAIdnzkjB44KJTt0TZFwZ
0qUf2GI0EXGnWqcZkarDBlqYpedJxx4nUhuVM2mHAF72IZopemrLpP8+YxG+cQkw
0tIh70YJMkes6PBoEIHlgiU3ZdyWvqSAYYD0L5Hxa+z3RotQH2KQZ/j9uQEJXdH8
9uFE0gWhk+gtW6T/YW30TQKBgFBTyHKtGvJui3q+wnv0eYmV1QGD2KYI4PFUenfK
nvW4h5hhRjOh2+GtOOU67iGadVNv+nWVZ0BuUdwQAFkooPbJcfL0hOVUxNCY19Sm
XXbdGUmAvef4H4bn8H09EUYfMYnBnILpveMCpz7460MpGZWA0Am/85AXeL3YugX4
YKgxAoGADxjvEN/1RfYCI6KYeNWy7X91jDoMxRNGeTCXKxbUrXukSNeW1Qses2QL
7rASlxDyhsD8xzWx3jHDb6s6K25DHFuO0W1vrvlU/buutO3MkjDmwWZHEA+4GHPJ
PKSFykKD+XkAmu12ZkLrZvcujOL0BDUPbYq3N6FaDr32XaO04fc=
-----END RSA PRIVATE KEY-----


IMAGE RECOGNITION PREDICTION AGAINST DATASETS:
USE https://metamind.readme.io/v2/page/general-image-model-class-list
to compare images in nature

token:
a9d9c10fca159e90120b55745aec6f77ce82f6ea

create dataset: (with zip folder)
curl -X POST -H "Authorization: Bearer <TOKEN>" -H "Cache-Control: no-cache" -H "Content-Type: multipart/form-data" -F "type=image" -F "data=@backpackvsshoes.zip" https://api.einstein.ai/v2/vision/datasets/upload/sync

get datasets: (first id in dataset)
curl -X GET -H "Authorization: Bearer <TOKEN>" -H "Cache-Control: no-cache" https://api.einstein.ai/v2/vision/datasets

delete a dataset: (with data id)
curl -X DELETE -H "Authorization: Bearer <TOKEN>" -H "Cache-Control: no-cache" https://api.einstein.ai/v2/vision/datasets/<DATASET_ID>

train with images: (first id in dataset to capture all)
curl -X POST -H "Authorization: Bearer <TOKEN>" -H "Cache-Control: no-cache" -H "Content-Type: multipart/form-data" -F "name=Shoe and Backpack Model" -F "datasetId=<DATASET_ID>" https://api.einstein.ai/v2/vision/train

training status:
curl -X GET -H "Authorization: Bearer <TOKEN>" -H "Cache-Control: no-cache" https://api.einstein.ai/v2/vision/train/<YOUR_MODEL_ID>

retrieve metrics about model:
curl -X GET -H "Authorization: Bearer <TOKEN>" -H "Cache-Control: no-cache" https://api.einstein.ai/v2/vision/models/<MODEL_ID>

classify an image:
curl -X POST -H "Authorization: Bearer <TOKEN>" -H "Cache-Control: no-cache" -H "Content-Type: multipart/form-data" -F "sampleId=Photo Prediction"  -F "sampleContent=@fileToPredict.jpg” -F "modelId=<MODEL_ID>” https://api.einstein.ai/v2/vision/predict


LAYOUT OF APP:
home page explaning app => button to camera page
camera page that lets you upload OR take a photo (can take URL or local image) => loading screen
data page that displays picture, probability of prediction, and wiki page to read more => button to take another or go home
		open app
			camera
			(train data + then be able to upload own photo - use data)
					can just use prebuilt model
			click and take picture - post image with token
			take pictures data - post request to endpoint that gives results
			picture data
			ionic camera doc (cordova login camera) info
			navigate to next screen with loading dial
			display picture and the data (highest probability item and wiki link to read more)
			take picture data
		training data - prebuilt model
		making api call
		sending back data


oAUTH TOKEN:
postGenerate an OAuth Token
Returns an OAuth token to access the API. You must pass a valid token in the header of each API call.

You must pass an assertion into this API call, so you first need to create a JWT payload and sign it with your private key to generate an assertion. To generate an assertion:

Create the JWT payload. The payload is JSON that contains:

sub—Your email address. This is your email address contained in the Salesforce org you used to sign up for an Einstein Platform account.

aud—The API endpoint URL for generating a token.

exp—The expiration time in Unix time. This value is the current Unix time in seconds plus the number of seconds you want the token to be valid.

The JWT payload JSON looks like this.

JSON
{
  "sub": "<EMAIL_ADDRESS>",
  "aud": "https://api.einstein.ai/v2/oauth2/token",
  "exp": "<EXPIRATION_SECONDS_IN_UNIX_TIME>"
}
Sign the JWT payload with your RSA private key to generate an assertion. The private key is contained in the predictive_services.pem file you downloaded when you signed up for an account. The code to generate the assertion varies depending on your programming language.

Call the API and pass in the assertion. You pass in all the necessary data in the -d parameter. Replace <ASSERTION_STRING> with the assertion you just generated.

cURL
curl -H "Content-type: application/x-www-form-urlencoded" -X POST https://api.einstein.ai/v2/oauth2/token -d "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=<ASSERTION_STRING>"
RESPONSE BODY
Name	Type	Description	Available Version
access_token

string

Token value for authorization.

1.0

token_type

string

Type of token returned. Always Bearer.

1.0

expires_in

integer

Number of seconds that the token will expire from the time it was generated.

USING IONIC:
	Directories:
	hooks - scripts run before, during, and after building and testing app
	(don’t mess with these)

	node_modules - nodeJS and NPM store all JS dependencies app is going to use (like angular 2 and ionic)

	platforms - where Cordova generates platform-specific code (for IOS objective-c code in Xcode project)

	plugins - where Cordova stores native plugin code

	resources - stores icon and splash screen (generated by Cordova)

	src - where most of the app code runs

		app - runs initial code jump starts app

				app.components.ts - app is a tree structure of components with one root component which is the first component that runs the app. Root = MyApp - reference to template file, in constructor when it runs, waits for platform ready, changing style of status bar, and then hiding splash screen, setting root page variable to be a reference to tabs page. Template is app.html

				app.html - one component (ion nav) which is a navigation controller that let's you push and pop pages to navigate between them.	Setting root element on ion nav to this root age variable that we defined here - which is tabsPage

				app.module.ts - BG module declaration for Angular - list out all components used, and import iconic module

				app.scss - global css and sass

				main.ts - small entry point for he app that tells angular to boostrap and actually run app using the app module defined in app.module.ts

		assets - store static assets (like images that get bundled in the build process in output in the www folder)

		pages - where code for every single page lives + comes with 4 pages (about, contact, home, tabs)

		themes - contains colors to customize (quick way to brand app)

		index.html - route to index.html that gets put into www folder (starting point of app)

	www - static output folder for app (everytime ionic builds our app and generates it, that codes goes into this directory)

CORDOVA CAMERA PLUGIN:
	http://blog.ionic.io/10-minutes-with-ionic-2-using-the-camera-with-ionic-native/

RUN IOS:
cordova run ios
cordova prepare ios and run with XCode
