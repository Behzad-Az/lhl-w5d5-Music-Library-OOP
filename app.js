class musicLibrary {
  constructor(libName, creator) {
    this.libName = libName;
    this.creator = creator;
    this.playListArr = [];
    this.libDuration = 0;
  }

  getLibDuration() {
    this.libDuration = this.playListArr.reduce((a, b) => {
      return { plDuration: a.plDuration + b.plDuration };
    }).plDuration;
  }

  addPlayList(pl) {
    this.playListArr.push(pl);
    this.getLibDuration();
  }
}

class Playlist {
  constructor(name) {
    this.plName = name;
    this.tracksArr = [];
    this.plRating = 0;
    this.plDuration = 0;
  }

  addTrack(track) {
    this.tracksArr.push(track);
    this.getPlDuration();
    this.getPlRating();
  }

  getPlDuration() {
    this.plDuration = this.tracksArr.reduce((a, b) => {
      return { trackLength: a.trackLength + b.trackLength };
    }).trackLength;
  }

  getPlRating() {
    let sumRatings = this.tracksArr.reduce((a, b) => {
      return { trackRating: a.trackRating + b.trackRating };
    }).trackRating;
    let countRatings = this.tracksArr.length;
    this.plRating = sumRatings / countRatings;
  }
}

class track {
  constructor(title, rating, length) {
    this.trackTitle = title;
    this.trackRating = rating;
    this.trackLength = length;
  }
}

let ml = new musicLibrary('testMl', 'Behzad');

let pl1 = new Playlist("testPl1");
let pl2 = new Playlist("testPl2");

let t1 = new track("a", 4, 30);
let t2 = new track("b", 4, 60);
let t3 = new track("c", 5, 50);

pl1.addTrack(t1);
pl1.addTrack(t2);
pl2.addTrack(t3);

ml.addPlayList(pl1);
ml.addPlayList(pl2);

console.log(ml.libDuration);
