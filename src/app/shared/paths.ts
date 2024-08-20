const NASA_KEY = 'YOUR_NASA_API_KEY_HERE';

export const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
export const NASA_EPIC_URL = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${NASA_KEY}`;
export const NASA_EPIC_BY_DATE_URL = (date: string) => {
  return `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${NASA_KEY}`
};
export const NASA_EPIC_IMAGE_URL = (date: string, image: string) => {
  return `https://api.nasa.gov/EPIC/archive/natural/${date}/png/${image}.png?api_key=${NASA_KEY}`
};
export const MARS_ROVER_PHOTOS_URL = (date: string) => {
  return `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_KEY}`
};

/*
NASA Asteroids - NeoWs
https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-08&api_key=OLklNfPv0cjqdSehBigce6n6jtAs70IgD8xq5SnM

DONKI
https://api.nasa.gov/DONKI/CME?startDate=2015-09-08&endDate=2015-09-08&api_key=OLklNfPv0cjqdSehBigce6n6jtAs70IgD8xq5SnM

EARTH
https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=OLklNfPv0cjqdSehBigce6n6jtAs70IgD8xq5SnM
*/
