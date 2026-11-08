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
]
