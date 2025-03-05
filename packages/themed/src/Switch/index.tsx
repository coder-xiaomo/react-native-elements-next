import { Switch, SwitchProps } from '@rneuinext/base/dist/Switch/Switch';
import { withTheme } from '../config';

export { Switch };
export type { SwitchProps };
export default withTheme<SwitchProps>(Switch, 'Switch');
