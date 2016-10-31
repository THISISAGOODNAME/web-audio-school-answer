var audioContext = new AudioContext()

var oscillator = audioContext.createOscillator()
oscillator.connect(audioContext.destination)

//By default oscillator.type is set to 'sine'.
//Available shapes are 'sine', 'triangle', 'sawtooth', and 'square'.
oscillator.type = 'sawtooth';

oscillator.start(audioContext.currentTime)
oscillator.stop(audioContext.currentTime + 2)