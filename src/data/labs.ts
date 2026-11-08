import type { Project } from './projects'

/**
 * Electrical engineering lab write-ups, added one at a time after review.
 * Summaries and figures only; full reports are not published.
 */
export const labs: Project[] = [
  {
    slug: 'fpga-piano',
    title: 'FPGA Piano',
    tagline: 'A Xilinx FPGA that plays "Twinkle Twinkle Little Star" on a speaker, written from scratch in VHDL.',
    category: 'electrical',
    year: '2025',
    role: 'Digital Systems Lab (ELEN E3082), Lab 6',
    stack: ['VHDL', 'Xilinx FPGA', 'MMCM clocking', 'Clock dividers', 'Seven-segment display'],
    problem:
      'Turn a single 100 MHz board clock into musical pitches, step through a melody on a timer, and show the note being played, all in hardware.',
    built: [
      'Clocking: the board clock goes through IBUFG/BUFG buffers into an MMCM; LED 0 turns on when the clock locks, so you know the clock network is stable before anything else runs.',
      'Pitch from division: one reusable clock-divider module, used three times. A 1 MHz tick feeds a second divider whose 16-bit divisor comes from note_gen, so changing the divisor changes the pitch.',
      'Melody: a counter that only runs while switch 0 is on, cut into ~0.25 s windows (25 million cycles), each mapped to the next note; after the last note it outputs silence until reset.',
      'Display: a 10 kHz scan tick drives the seven-segment display with the same note code, so the board shows the note it is playing.',
    ],
    result: 'Played the full melody on the board and passed TA sign-off.',
    credit: 'Lab partner: Miriam Trujillo.',
    links: [],
    pattern: 'circuit',
    figure: '/labs/fpga-piano.svg',
  },
  {
    slug: 'frequency-counter',
    title: '555 Frequency Counter',
    tagline: 'A breadboard frequency counter: a 555 timer opens a 1-second window, a counter tallies the pulses, a seven-segment display shows the count.',
    category: 'electrical',
    year: '2025',
    role: 'Digital Systems Lab (ELEN E3082), Lab 2',
    stack: ['555 timer', '74AC161 counter', 'MC14511B BCD decoder', 'SR-latch debounce', 'Oscilloscope'],
    problem:
      'Measure the frequency of an incoming square wave with discrete logic: count how many rising edges arrive in exactly one second and show the result.',
    built: [
      'Characterized the 555 in astable mode, computing frequency and duty cycle across the range of R₂, then switched it to monostable (one-shot) mode, where the pulse width is T = 1.1·R·C.',
      'Tuned a one-second gate pulse. The first pick (1 MΩ, 1 µF) missed the 10% tolerance because the high resistance picked up noise, so we moved to 10 kΩ and 100 µF and checked the pulse on the oscilloscope.',
      'Gated the function generator with that pulse into a 74AC161 counter, decoded the count with an MC14511B, and drove a seven-segment display. A debounced SR-latch button starts a measurement; another resets the count.',
      'Debugged the integrated build pin by pin against the datasheets: a miswired 555 pin gave wrong counts, and the display segments had to be remapped before the digits read correctly.',
    ],
    result: 'Working counter checked off in lab: it reads the generator frequency as pulses per second.',
    credit: 'Lab partner: Miriam Trujillo.',
    links: [],
    pattern: 'wave',
    image: '/labs/555-board.jpg',
    figure: '/labs/555-schematic.jpg',
  },
  {
    slug: 'phaser',
    title: 'Guitar Phaser',
    tagline: 'An analog phaser effect, like a guitar pedal: four op-amp all-pass filters swept by MOSFET resistors give music a "swooshing" sound.',
    category: 'electrical',
    year: '2025',
    role: 'Electronic Circuits Lab (ELEN E3083), final project',
    stack: ['Op-amp all-pass filters', 'CD4007 MOSFETs', 'Summing amplifier', 'Function generator', 'Oscilloscope'],
    problem:
      'Build the effect inside phaser pedals like the MXR Phase 90 from op-amps and transistors: sweep the phase of an audio signal and mix it with the original so frequencies cancel and reinforce in a moving pattern.',
    built: [
      'Four identical op-amp all-pass filters in a row. Each one shifts the phase of the signal without changing its loudness.',
      'A MOSFET from a CD4007 across one resistor in each filter, biased in its linear region so it acts as a voltage-controlled resistor.',
      'A slow control signal (0.5 Hz sine, 6 Vpp plus a 6 V DC offset) on the MOSFET gates, so every stage’s critical frequency sweeps up and down together.',
      'A summing amplifier that adds the original signal to the phase-shifted one, then a power amp and speaker. Where the two are out of phase they cancel, and those notches sweep through the audio.',
      'Tested with a sine wave first (it just gets louder and softer), then with music, which gives the swooshing effect. On the scope we saw the bottom of the waveform clipping when the speaker was driven hard.',
    ],
    result: 'Working phaser on the breadboard, with a video of it playing through the speaker.',
    links: [{ label: 'Demo video', href: 'https://www.youtube.com/watch?v=T2McliXgMRA' }],
    pattern: 'wave',
    image: '/labs/phaser-card.jpg',
    figure: '/labs/phaser.svg',
    photo: '/labs/phaser-board.jpg',
  },
  {
    slug: 'op-amp-characterization',
    title: 'Op-Amp Limits & Active Filter',
    tagline: 'Measured where real op-amps stop acting ideal, then showed it in a Sallen-Key filter across three chips: LM741, LF411 and LF356.',
    category: 'electrical',
    year: '2025',
    role: 'Electronic Circuits Lab (ELEN E3083), Lab 5',
    stack: ['LM741 / LF411 / LF356', 'LTspice', 'Oscilloscope', 'Sallen-Key filter', 'Bode analysis'],
    problem:
      'Textbook op-amps have infinite gain and bandwidth. Real ones have offset, limited bandwidth, slew-rate and output limits. Find each limit on the bench, explain it, and see how it breaks a real circuit.',
    built: [
      'DC errors: with the input grounded the output sat at 1.8 mV. Adding a bias-current balancing resistor (R1 ∥ R2 = 5 kΩ) dropped it to 1.1 mV, and an offset-null pot could then trim the output.',
      'Gain vs. bandwidth: the inverting ×1 amplifier held up to 700 kHz, the ×10 version only to 180 kHz, with phase measured from the scope delay each time. Explained with the constant gain-bandwidth product (f_t ≈ 1.5 MHz for the 741).',
      'Large-signal limits: drove the output into saturation, which happens before the supply rails, and showed that a 500 Ω load clips it even earlier because the 741 can only source about 20–25 mA.',
      'Sallen-Key low-pass filter (10 kΩ, 0.015 µF, gain 1.68, about 1 kHz cutoff), simulated in LTspice and built on the breadboard. Above a few hundred kHz the 741’s falling open-loop gain lets signal leak back through the stopband.',
      'Swapped in the LF411 and LF356: the LF356 (about 5 MHz bandwidth, 12 V/µs slew rate, 30 pA bias current) came closest to the ideal response.',
    ],
    result: 'Matched each measured limit to datasheet values and showed why chip choice matters for high-frequency filters.',
    credit: 'Lab partner: Miriam Trujillo.',
    links: [],
    pattern: 'wave',
    image: '/labs/opamp-card.jpg',
    figure: '/labs/opamp-filter.jpg',
    photo: '/labs/opamp-scope.jpg',
  },
]
