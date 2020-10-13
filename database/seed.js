require('./index.js');
const Faker = require('faker');
const mongoose = require('mongoose');
const Image = require('./image.js');

const samples = [];

for (let i = 1; i <= 100; i += 1) {
  const image = {
    listing_id: i,
    images: [],
    descriptions: [],
  };
  for (let j = 0; j < 20; j += 1) {
    const description = Faker.lorem.sentence();
    const randomInt = Math.floor(Math.random() * 101);
    image.images.push(`https://fec-airbnb-images.s3-us-west-2.amazonaws.com/image_${randomInt}.jpg`);
    image.descriptions.push(description);
  }
  samples.push(image);
}

const insertImages = () => {
  Image.create(samples).then(() => mongoose.disconnect());
};

insertImages();
