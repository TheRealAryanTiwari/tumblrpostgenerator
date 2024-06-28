// import { TextToSpeechClient } from '@google-cloud/text-to-speech';
// import AWS from 'aws-sdk';
// import { PassThrough } from 'stream';
// import {
//   S3Client,
//   PutObjectCommand,
//   // GetObjectCommand,
// } from "@aws-sdk/client-s3";
// import * as dotenv from "dotenv";
// const fs = require('fs');
// const util = require('util')

// dotenv.config();

// const textToSpeechClient = new TextToSpeechClient({
//   keyFilename: 'google-credentials.json',
// });

// // AWS.config.update({
// //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// //   region: process.env.AWS_REGION,
// // });
// const AWS_ACCESS_KEY_ID = "AKIAZI2LGZ42P46XDMVZ"
// const AWS_SECRET_ACCESS_KEY = "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"
// const AWS_REGION_NAME = "us-east-1"
// const AWS_S3_BUCKET_NAME = "togetheraibucket"

// if (
//   !AWS_ACCESS_KEY_ID ||
//   !AWS_SECRET_ACCESS_KEY ||
//   !AWS_REGION_NAME ||
//   !AWS_S3_BUCKET_NAME
// ) {
//   throw new Error(
//     "One or more environment variables are not set. Please check your .env file."
//   );
// }

// const s3 = new S3Client({
//   credentials: {
//     accessKeyId: AWS_ACCESS_KEY_ID,
//     secretAccessKey: AWS_SECRET_ACCESS_KEY,
//   },
//   region: AWS_REGION_NAME,
// });


// export const uploadAudio =  async (postText: string) => {
//   // export const uploadAudio =  async () => {
//   // if (req.method === 'POST') {
//     const text = "asdasd"
//     // const text = postText

//     // const remotePath = `${uuid()}.mp3`;
//     const remotePath = `example.mp3`;

//     try {
//       // Synthesize speech
//       const [response] = await textToSpeechClient.synthesizeSpeech({
//         input: { text },
//         voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
//         audioConfig: { audioEncoding: 'MP3' },
//       });

//       // Create a pass-through stream
//       const passThroughStream = new PassThrough();
//       passThroughStream.end(response.audioContent);

//       const writeFile = util.promisify(fs.writeFile);
//       await writeFile('output.mp3', response.audioContent, 'binary');

//       // Upload the file to S3
//       // const params = {
//       //   Bucket: process.env.AWS_S3_BUCKET_NAME,
//       //   Key: remotePath,
//       //   Body: passThroughStream,
//       //   ContentType: 'audio/mpeg',
//       // };

//       // Upload the file to S3
//       const params = {
//         Bucket: process.env.AWS_S3_BUCKET_NAME!,
//         Key: remotePath,
//         Body: passThroughStream,
//         ContentType: 'audio/mpeg',
//       };

//       // s3.upload(params, (err: AWS.AWSError, data: AWS.S3.ManagedUpload.SendData) => {
//       //   if (err) {
//       //     console.error('Error uploading to S3:', err);
//       //     // return res.status(500).json({ error: 'Error uploading to S3' });
//       //   }

//       //   console.log('Upload successful:', data);
//       //   // res.status(200).json({ message: 'File uploaded successfully to S3', data });
//       // });

//       s3.upload(params, function(err: any, data: any) {
//         console.log(err, data);
//       });

//     } catch (error) {
//       console.error('Error synthesizing speech or uploading to S3:', error);
//       // res.status(500).json({ error: 'Internal Server Error' });
//     }

//     return remotePath;
//   // } 
//   // else {
//     // res.status(405).json({ error: 'Method Not Allowed' });
//   // }
// };

// uploadAudio("tes")