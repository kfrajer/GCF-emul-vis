'use strict';

exports.http = (request, response) => {
    response.status(200).send('Hello World test from Emulator!');
};

//Removed in pkf json
//  "devDependencies": {
//    "serverless-google-cloudfunctions": "^2.3.1"
//  },

exports.visionreq = (request, response) => {

    // [START vision_quickstart]
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs label detection on the image file
    async function main() {
	const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
	const labels = result.labelAnnotations;
	
	console.log('Labels:');	
	labels.forEach(label => console.log(label.description));
	
	let allLabels=[];
	labels.forEach(label => allLabels[allLabels.length]= label.description);
	
	//let firstlabel = 'testNULL';
	let firstlabel = labels[0] || 'NULL';
	response.status(200).send('Message from vision module. Wait:\n' + allLabels.join());
    }
    main().catch(err => {
	console.error('ERROR:', err);
    });
    // [END vision_quickstart]
    
    //response.status(200).send('Message from vision module. Stand by... done!!');
};


exports.event = (event, callback) => {
    callback();
};


/*
  'use strict';

  // [START vision_quickstart]
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  async function main() {
  const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
  }
  main().catch(err => {
  console.error('ERROR:', err);
  });
  // [END vision_quickstart]
  */
