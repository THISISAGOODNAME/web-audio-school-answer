var audioContext = new AudioContext()

var oscillator = audioContext.createOscillator()
oscillator.connect(audioContext.destination)

oscillator.type = 'sawtooth'

// default 440 Hz
oscillator.frequency.value = 220

oscillator.start(audioContext.currentTime)
oscillator.stop(audioContext.currentTime + 2)