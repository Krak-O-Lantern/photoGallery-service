const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const MaxImgCount = 1000;

const lines = argv.lines || 10;
const filename1 = argv.output || 'csv/img.csv';
const filename2 = argv.output || 'csv/des.csv';
const stream1 = fs.createWriteStream(filename1);
const stream2 = fs.createWriteStream(filename2);

const randomImg = () => {
  let num = Math.ceil(Math.random() * MaxImgCount).toString();
  while (num.length !== 4) {
    num = `0${num}`;
  }
  return num;
};

const dataGenerator = (entry, field) => {
  const image = {
    listing_id: entry,
  };
  image[field] = [];

  if (field === 'img') {
    for (let j = 0; j < 20; j += 1) {
      const img = randomImg();
      image[field].push(`https://fec-pictures.s3-us-west-2.amazonaws.com/${img}.jpg`);
    }
  } else {
    for (let j = 0; j < 20; j += 1) {
      const description = faker.lorem.sentence();
      image[field].push(description);
    }
  }

  if (entry % 100000 === 0) {
    console.log(`${Math.round(((1 - (entry / lines)) * 100))}% of ${field}.csv Completed`);
  }

  return `${entry},${image[field]}\n`;
};

// const wrtieToCSV = () => dataGenerator(Entries);

// wrtieToCSV();

const startWriting = (writeStream, encoding, type, done) => {
  let i = lines;
  let canWrite = true;
  function writing() {
    do {
      i -= 1;
      const post = dataGenerator(i, type);
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(post, encoding, done);
      } else {
        // we are not done so don't fire callback
        canWrite = writeStream.write(post, encoding);
      }
      // else call write and continue looping
    } while (i > 0 && canWrite);
    if (i > 0) {
      // our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      // console.log('About to drain');
      writeStream.once('drain', writing);
    }
  }
  writing();
};

// write our `header` line before we invoke the loop
const imgTag = [];
const desTag = [];

for (let i = 1; i <= 20; i++) {
  imgTag.push(`images${i}`);
  desTag.push(`description${i}`);
}

stream1.write(`id,${imgTag}\n`, 'utf-8');
// invoke startWriting and pass callback
startWriting(stream1, 'utf-8', 'img', () => {
  stream1.end();
});

console.log('img.csv file done');

// stream2.write(`id,${desTag}\n`, 'utf-8');
// // invoke startWriting and pass callback
// startWriting(stream2, 'utf-8', 'des', () => {
//   stream2.end();
// });

console.log('des.csv file done');
console.log('Done');
