import TinyMusic from 'tinymusic';

// create a new Web Audio API context
var ac = new AudioContext();
let currentSequence;

/* Title Sequence
// var note2 = new Note('E4 q');
// var c3 = new Note('C3 q');
// var d3 = new Note('D3 q');
// var e3 = new Note('E3 q');
// var f3 = new Note('F3 q');
// var g3 = new Note('G3 q');
// var a3 = new Note('A3 q');
// var b3 = new Note('B3 q');
// var c4 = new Note('C4 q');
// var d4 = new Note('D4 q');
// var e4 = new Note('E4 q');
// var f4 = new Note('F4 q');
// var g4 = new Note('G4 q');
// var titleSeq1 = [new Note('A3 h'), e4, e4, e4, e4, d4, c4];

// var titleSequences = [{seq: new Sequence(ac, tempo, [new Note('A3 3')]), length: 3}
// 	, {seq: new Sequence(ac, tempo, [e4]), length: 1}, {seq: new Sequence(ac, tempo, [e4]), length: 1}, 
// 	{seq: new Sequence(ac, tempo, [e4]), length: 1}, {seq: new Sequence(ac, tempo, [e4]), length: 1}, {seq: new Sequence(ac, tempo, [d4]), length: 1}, 
// 	{seq: new Sequence(ac, tempo, [c4]), length: 1}, {seq: new Sequence(ac, tempo, [d4]), length: 1}
// ];

// // play each sequence
// var playTitle = function() {
// 	if (!playMusic) {
// 		return;
// 	}
// 	stopMusic();
// 	var delayNext = 0;
// 	console.log(titleSequences[0].seq);
// 	for (var i = 0; i < titleSequences.length; i++) {
// 		titleSequences[i].seq.loop = false;
// 		titleSequences[i].seq.staccato = 0.5
// 		titleSequences[i].seq.gain.gain.value = 0.01;
// 		titleSequences[i].seq.createCustomWave([-0.8, 1, 0.8, 0.8, -0.8, -0.8, -1]);
// 		titleSequences[i].seq.play(ac.currentTime + ( 60 / tempo ) * (1 * delayNext));
// 		setTimeout(logNote, delayNext * 1000 * ( 60 / tempo ), titleSequences[i].seq.notes[0]);
// 		delayNext += titleSequences[i].seq.notes[0].duration;
// 	}
// 	// titleSequence.play(ac.currentTime + ( 60 / tempo ) * 2);
// 	activeSeq = 0;
// }

// var logNote = function(note) {
// 	console.log(note.frequency);
// }
*/

let generateSequence = function(noteList, tempo) {
	let notes = [];
	noteList.map(note => {
		notes.push(`${note.note} ${note.len}`);
	});
	console.log('notes')
	console.log(notes);
	let sequence = new TinyMusic.Sequence(ac, tempo, notes);
	sequence.loop = false;
	sequence.staccato = 0.5
	sequence.gain.gain.value = 0.5;
	sequence.createCustomWave([-0.8, 1, 0.8, 0.8, -0.8, -0.8, -1]);
	return sequence;
}

let MusicActions = {
	playMusic: function(noteList, tempo, cb) {
		if (currentSequence) {
			currentSequence.stop();
		}
		currentSequence = generateSequence(noteList, tempo);
		// var delayNext = 0;
		// for (let i = 0; i < noteList.length; i++) {

		// }
		
		currentSequence.play(ac.currentTime + ( 60 / tempo ));
	},

	stopMusic: function() {
		if (currentSequence) {
			currentSequence.stop();
		}
	}
};

export default MusicActions;










