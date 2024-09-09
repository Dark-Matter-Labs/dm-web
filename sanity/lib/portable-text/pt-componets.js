import { normalTextComponent } from '../portable-text/portable-text-blocks';
import {
  linkComponent,
  bold,
  italic,
} from '../portable-text/portable-text-marks';

export const portableTextComponents = {
  block: {
    normal: normalTextComponent,
  },
  marks: {
    link: linkComponent,
    strong: bold,
    em: italic,
  },
};
