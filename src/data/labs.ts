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
]
