const NASA_KEY = "YOUR_NASA_API_KEY_HERE";

export const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

export const NASA_EPIC_URL = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${NASA_KEY}`;
export const NASA_EPIC_IMAGE_URL = (date: string, image: string) => {
  //      https://api.nasa.gov/EPIC/archive/natural/${date}/png/epic_1b_20190530011359.png?api_key=DEMO_KEY
  return `https://api.nasa.gov/EPIC/archive/natural/${date}/png/${image}.png?api_key=${NASA_KEY}`
};

/*
NASA Asteroids - NeoWs
https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-08&api_key=OLklNfPv0cjqdSehBigce6n6jtAs70IgD8xq5SnM

DONKI
https://api.nasa.gov/DONKI/CME?startDate=2015-09-08&endDate=2015-09-08&api_key=OLklNfPv0cjqdSehBigce6n6jtAs70IgD8xq5SnM

EARTH
https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=OLklNfPv0cjqdSehBigce6n6jtAs70IgD8xq5SnM
*/
