import { Chip, ChipProps } from '@rneuinext/base/dist/Chip/Chip';
import { withTheme } from '../config';

export { Chip };
export type { ChipProps };
export default withTheme<ChipProps>(Chip, 'Chip');
