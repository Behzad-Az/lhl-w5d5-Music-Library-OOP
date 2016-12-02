function testFunction (ml) {
  ml.printTracks();
  ml.printPlaylists();
  ml.playListArr.forEach((pl) => {
    pl.printTracks();
  });
}

class musicLibrary {
  constructor(libName, creator) {
    this.libName = libName;
    this.creator = creator;
    this.playListArr = [];
    this.tracksArr = [];
    this.libDuration = 0;
  }

  addTrack(track) {
    this.tracksArr.push(track);
    this.calcLibDuration();
  }

  calcLibDuration() {
    this.libDuration = this.tracksArr.reduce((trackA, trackB) => {
      return { length: trackA.length + trackB.length };
    }).length;
  }

  addPlayList(pl) {
    this.playListArr.push(pl);
  }

  printPlaylists() {
    let output = `Music library ${this.libName} currently contains playlists: \n`;
    this.playListArr.forEach((pl) => {
      output += `  - Name: ${pl.plName} \n`;
    });
    console.log(output);
  }

  printTracks() {
    let output = `Music library ${this.libName} currently contains tracks: \n`;
    output += `Track Count: ${this.tracksArr.length}, Total Duration: ${this.libDuration} \n`;
    this.tracksArr.forEach((track) => {
      output += ` - Title: ${track.title}, Rating: ${track.rating}, Duration: ${track.length} \n`;
    });
    console.log(output);
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
    this.calcPlDuration();
    this.calcPlRating();
  }

  calcPlDuration() {
    this.plDuration = this.tracksArr.reduce((trackA, trackB) => {
      return { length: trackA.length + trackB.length };
    }).length;
  }

  calcPlRating() {
    let sumRatings = this.tracksArr.reduce((trackA, trackB) => {
      return { rating: trackA.rating + trackB.rating };
    }).rating;
    let countRatings = this.tracksArr.length;
    this.plRating = sumRatings / countRatings;
  }

  printTracks() {
    let output = `Playlist ${this.plName} contains tracks: \n`;
    output += `Track Count: ${this.tracksArr.length}, Total Duration: ${this.plDuration}, Avg Rating: ${this.plRating} \n`;
    this.tracksArr.forEach((track) => {
      output += ` - Title: ${track.title}, Rating: ${track.rating}, Duration: ${track.length} \n`;
    });
    console.log(output);
  }
}

class track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

let ml = new musicLibrary('testMl', 'Behzad');

let pl1 = new Playlist("testPl1");
let pl2 = new Playlist("testPl2");

let t1 = new track("a", 4, 30);
let t2 = new track("b", 4, 60);
let t3 = new track("c", 5, 50);

ml.addTrack(t1);
ml.addTrack(t2);
ml.addTrack(t3);

pl1.addTrack(t1);
pl1.addTrack(t2);
pl2.addTrack(t3);

ml.addPlayList(pl1);
ml.addPlayList(pl2);

testFunction(ml);
