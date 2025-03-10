import { withTheme } from '../config';
import {
  ButtonGroup,
  ButtonGroupProps,
} from '@rneuinext/base/dist/ButtonGroup/ButtonGroup';

export { ButtonGroup };
export type { ButtonGroupProps };
export default withTheme<ButtonGroupProps>(ButtonGroup, 'ButtonGroup');
