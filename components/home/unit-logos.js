import SGlogo from '@/images/arcs/Arc_7G.svg';
import BElogo from '@/images/arcs/Be Arc.svg';
import BLlogo from '@/images/labs/Bl Lab.svg';
import BTRlogo from '@/images/labs/BTR.jpg';
import CDlogo from '@/images/studios/Cd Studio.svg';
import CSlogo from '@/images/labs/Cs Lab.svg';
import CTlogo from '@/images/studios/Ct Studio.svg';
import FFlogo from '@/images/studios/Ff Studio.svg';
import NElogo from '@/images/labs/Ne Lab.svg';
import LClogo from '@/images/arcs/Lc Arc.svg';
import NIlogo from '@/images/arcs/Ni Arc.svg';
import NZZlogo from '@/images/arcs/NZC.png';
import ODlogo from '@/images/studios/Od Studio.svg';
import PBlogo from '@/images/labs/PB.png';
import PClogo from '@/images/arcs/Pc Arc.svg';
import PFlogo from '@/images/labs/Pf Lab.svg';
import RClogo from '@/images/arcs/RC.png';
import RNlogo from '@/images/arcs/Rn Arc.svg';
import SMlogo from '@/images/labs/Sm Lab.svg';
import SDlogo from '@/images/labs/Sd Lab.svg';
import M0logo from '@/images/arcs/M0 Arc.svg';

/**
 * Matrix unit logos.
 *
 * These stay as local static imports rather than coming from Sanity: the
 * repo holds vectors at 1-2KB while Sanity holds 90x90 rasters of the same
 * marks, and the popup renders them at 200x200. Four are byte-identical to
 * their Sanity counterparts; the other seventeen would visibly soften.
 *
 * Keyed by Matrix code, matching the `value` field in Sanity.
 */
export const UNIT_LOGOS = {
  '7G': SGlogo,
  BE: BElogo,
  BL: BLlogo,
  BR: BTRlogo,
  CD: CDlogo,
  CS: CSlogo,
  CT: CTlogo,
  FF: FFlogo,
  NE: NElogo,
  NF: LClogo,
  NI: NIlogo,
  NZC: NZZlogo,
  OD: ODlogo,
  PB: PBlogo,
  PC: PClogo,
  PF: PFlogo,
  RC: RClogo,
  RF: RNlogo,
  RI: SMlogo,
  SD: SDlogo,
  X0: M0logo,
};
