/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const MaxImgCount = 1000;

const lines = argv.lines || 10;
const filename1 = argv.output || 'csv/img.csv';
const filename2 = argv.output || 'csv/des.csv';
const filename3 = argv.output || 'json/data.jsonl';

const randomImg = () => {
  let num = Math.ceil(Math.random() * MaxImgCount).toString();
  while (num.length !== 4) {
    num = `0${num}`;
  }
  return num;
};

const dataGeneratorCSV = (entry, field) => {
  const image = {
    listing_id: entry,
  };
  image[field] = [];

  if (field === 'img') {
    for (let j = 0; j < 20; j += 1) {
      const img = randomImg();
      image[field].push(`https://fec-pictures.s3-us-west-2.amazonaws.com/${img}.jpg`);
    }
    if (entry % 100000 === 0) {
      console.log(`${Math.round((((entry / lines)) * 100))}% of ${field}.csv Completed`);
    }

    return `${entry},${image[field]},${entry}\n`;
  }
  for (let j = 0; j < 20; j += 1) {
    const description = faker.lorem.sentence();
    image[field].push(description);
  }
  if (entry % 100000 === 0) {
    console.log(`${Math.round((((entry / lines)) * 100))}% of ${field}.csv Completed`);
  }

  return `${entry},${image[field]}\n`;
};

const dataGeneratorJSONL = (entry) => {
  const image = {
    listing_id: entry,
    images: [],
    descriptions: [],
  };
  for (let j = 0; j < 20; j += 1) {
    const description = faker.lorem.sentence();
    const img = randomImg();
    image.images.push(`https://fec-pictures.s3-us-west-2.amazonaws.com/${img}.jpg`);
    image.descriptions.push(description);
  }
  if (entry % 100000 === 0) {
    console.log(`${Math.round((((entry / lines)) * 100))}% of data.jsonl`);
  }

  return `${JSON.stringify(image)}\n`;
};

const startWriting = (writeStream, data) => (
  new Promise((resolve) => {
    if (!writeStream.write(data)) {
      writeStream.once('drain', resolve);
    } else {
      resolve();
    }
  }));

// write our `header` line before we invoke the loop
const imgTag = [];
const desTag = [];
// inits array to allow proper namings of columns
for (let i = 1; i <= 20; i += 1) {
  imgTag.push(`image${i}`);
  desTag.push(`description${i}`);
}

const runDes = async () => {
  const stream2 = fs.createWriteStream(filename2);
  stream2.write(`des_id,${desTag}\n`, 'utf-8');

  let current = 0;
  while (current < lines) {
    // invoke startWriting and pass callback
    await startWriting(stream2, dataGeneratorCSV((current += 1), 'des'));
  }
  stream2.end();
  console.log('des.csv file done');
};

const runImg = async () => {
  const stream1 = fs.createWriteStream(filename1);
  stream1.write(`img_id,${imgTag},des_id\n`, 'utf-8');

  let current = 0;
  while (current < lines) {
    // invoke startWriting and pass callback
    await startWriting(stream1, dataGeneratorCSV((current += 1), 'img'));
  }
  stream1.end();
  console.log('img.csv file done');
  setTimeout(() => (runDes()), 5000);
};

const runJSONL = async () => {
  const stream3 = fs.createWriteStream(filename3);

  let current = 0;
  while (current < lines) {
    // invoke startWriting and pass callback
    await startWriting(stream3, dataGeneratorJSONL((current += 1)));
  }
  stream3.end();
  console.log('data.jsonl file done');
};

// runImg();
runJSONL();
