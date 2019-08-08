
var applySeq = function(notes, seq, times) {
	for (var i = 0; i < times; i++) {
		Array.prototype.push.apply(notes, seq);
	}
};

// create a new Web Audio API context
var ac = new AudioContext();

// set the playback tempo (120 beats per minute)
var tempo = 240;

// Title Sequence
var note2 = new Note('E4 q');
var c3 = new Note('C3 q');
var d3 = new Note('D3 q');
var e3 = new Note('E3 q');
var f3 = new Note('F3 q');
var g3 = new Note('G3 q');
var a3 = new Note('A3 q');
var b3 = new Note('B3 q');
var c4 = new Note('C4 q');
var d4 = new Note('D4 q');
var e4 = new Note('E4 q');
var f4 = new Note('F4 q');
var g4 = new Note('G4 q');
var titleSeq1 = [new Note('A3 h'), e4, e4, e4, e4, d4, c4];

var titleSequences = [{seq: new Sequence(ac, tempo, [new Note('A3 3')]), length: 3}
	, {seq: new Sequence(ac, tempo, [e4]), length: 1}, {seq: new Sequence(ac, tempo, [e4]), length: 1}, 
	{seq: new Sequence(ac, tempo, [e4]), length: 1}, {seq: new Sequence(ac, tempo, [e4]), length: 1}, {seq: new Sequence(ac, tempo, [d4]), length: 1}, 
	{seq: new Sequence(ac, tempo, [c4]), length: 1}, {seq: new Sequence(ac, tempo, [d4]), length: 1}
];

// play each sequence
var playTitle = function() {
	if (!playMusic) {
		return;
	}
	stopMusic();
	var delayNext = 0;
	console.log(titleSequences[0].seq);
	for (var i = 0; i < titleSequences.length; i++) {
		titleSequences[i].seq.loop = false;
		titleSequences[i].seq.staccato = 0.1
		titleSequences[i].seq.gain.gain.value = 0.01;
		titleSequences[i].seq.createCustomWave([-0.8, 1, 0.8, 0.8, -0.8, -0.8, -1]);
		titleSequences[i].seq.play(ac.currentTime + ( 60 / tempo ) * (1 * delayNext));
		setTimeout(logNote, delayNext * 1000 * ( 60 / tempo ), titleSequences[i].seq.notes[0]);
		delayNext += titleSequences[i].seq.notes[0].duration;
	}
	// titleSequence.play(ac.currentTime + ( 60 / tempo ) * 2);
	activeSeq = 0;
}

var logNote = function(note) {
	console.log(note.frequency);
}

var toggleMusic = function() {
	if (playMusic) {
		sequences[activeSeq].stop();
	} else {
		sequences[activeSeq].play()
	}
	playMusic = !playMusic;
}

let morseToSound = function() {
	
};













