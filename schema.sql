DROP DATABASE IF EXISTS photoGallery;

CREATE DATABASE photoGallery;

\c photogallery;

-- USE photoGallery;

-- //DROP TABLE IF EXISTS messages;

CREATE TABLE IF NOT EXISTS descriptions (
  des_id INTEGER PRIMARY KEY,
  description1 VARCHAR(2000),
  description2 VARCHAR(2000),
  description3 VARCHAR(2000),
  description4 VARCHAR(2000),
  description5 VARCHAR(2000),
  description6 VARCHAR(2000),
  description7 VARCHAR(2000),
  description8 VARCHAR(2000),
  description9 VARCHAR(2000),
  description10 VARCHAR(2000),
  description11 VARCHAR(2000),
  description12 VARCHAR(2000),
  description13 VARCHAR(2000),
  description14 VARCHAR(2000),
  description15 VARCHAR(2000),
  description16 VARCHAR(2000),
  description17 VARCHAR(2000),
  description18 VARCHAR(2000),
  description19 VARCHAR(2000),
  description20 VARCHAR(2000)
);

CREATE TABLE IF NOT EXISTS images (
  img_id INTEGER PRIMARY KEY,
  image1 VARCHAR(240),
  image2 VARCHAR(240),
  image3 VARCHAR(240),
  image4 VARCHAR(240),
  image5 VARCHAR(240),
  image6 VARCHAR(240),
  image7 VARCHAR(240),
  image8 VARCHAR(240),
  image9 VARCHAR(240),
  image10 VARCHAR(240),
  image11 VARCHAR(240),
  image12 VARCHAR(240),
  image13 VARCHAR(240),
  image14 VARCHAR(240),
  image15 VARCHAR(240),
  image16 VARCHAR(240),
  image17 VARCHAR(240),
  image18 VARCHAR(240),
  image19 VARCHAR(240),
  image20 VARCHAR(240),
  des_id INTEGER REFERENCES descriptions(des_id)
);


