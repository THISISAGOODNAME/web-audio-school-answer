//                          -3  -1   1       4   6       9   11
//                        -4  -2   0   2   3   5   7   8   10  12
//   .___________________________________________________________________________.
//   :  | |  |  | | | |  |  | | | | | |  |  | | | |  |  | | | | | |  |  | | | |  :
//   :  | |  |  | | | |  |  | | | | | |  |  | | | |  |  | | | | | |  |  | | | |  :
//   :  | |  |  | | | |  |  | | | | | |  |  | | | |  |  | | | | | |  |  | | | |  :
// <-:  |_|  |  |_| |_|  |  |_| |_| |_|  |  |_| |_|  |  |_| |_| |_|  |  |_| |_|  :->
//   :   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   :
//   : A | B | C | D | E | F | G | A | B | C | D | E | F | G | A | B | C | D | E :
//   :___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___: 
//     ^                           ^           ^               ^           ^
//   220 Hz                      440 Hz      523.25 Hz       880 Hz     1174.65 Hz
// (-1 Octave)                 (middle A)                 (+1 Octave)


var audioContext = new AudioContext()

var oscillator = audioContext.createOscillator()
oscillator.connect(audioContext.destination)

oscillator.type = 'sawtooth'

// So if you wanted to transpose from middle A up 7 semitones to E, you would do the following:
// oscillator.frequency.value = 440 * Math.pow(2, 7 / 12) // 659.255...
// This works going down as well. Here we transpose down 14 semitones to G:
//oscillator.frequency.value = 440 * Math.pow(2, -14 / 12)
oscillator.frequency.value = 440 * Math.pow(2, 3 / 12)
//or
// Instances of OscillatorNode also have a detune AudioParam, which allows you to specify transposes in 100ths of semitones.
// So using detune, if you wanted to transpose from middle A up 7 semitones to E, you would do the following:
// oscillator.detune.value = 700 
//oscillator.detune.value = 300

oscillator.start(audioContext.currentTime)
oscillator.stop(audioContext.currentTime + 2)