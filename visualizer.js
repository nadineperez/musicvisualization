var audioFile;
var amplitude;

function preload() {
	audioFile = loadSound('song.mp3');
}

function setup() {
	createCanvas(800,400);
	audioFile.loop();

	amplitude = new p5.Amplitude(0.8);
}

function draw() {

	var level = amplitude.getLevel();
	var radius = level * 800;

	background(255,0,255);

	fill(0,0,255);
	//ellipseMode(RADIUS);
	ellipse(width / 2, height/ 2, radius / 2 ,radius);
}

function keyPressed() {
	if (audioFile.isPlaying()) {
		audioFile.pause();
	}
	else {
		audioFile.play();
	}
}
