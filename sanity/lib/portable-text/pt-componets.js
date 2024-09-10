import { normalTextComponent } from '../portable-text/portable-text-blocks';
import {
  linkComponent,
  bold,
  italic,
} from '../portable-text/portable-text-marks';

export const portableTextComponents = {
  block: {
    normal: normalTextComponent,
    description: ({children}) => (
      <p className="p-xl-regular text-[#EBEBEB] pb-4">{children}</p>
    ),
  },
  marks: {
    link: linkComponent,
    strong: bold,
    em: italic,
  },
};
