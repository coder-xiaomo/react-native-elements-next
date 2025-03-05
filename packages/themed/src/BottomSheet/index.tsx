import {
  BottomSheet,
  BottomSheetProps,
} from '@rneuinext/base/dist/BottomSheet/BottomSheet';
import { withTheme } from '../config';

export { BottomSheet };
export type { BottomSheetProps };
export default withTheme<BottomSheetProps>(BottomSheet, 'BottomSheet');
