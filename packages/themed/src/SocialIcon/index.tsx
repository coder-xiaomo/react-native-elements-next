import { withTheme } from '../config';
import {
  SocialIcon,
  SocialIconProps,
  SocialMediaType,
} from '@rneuinext/base/dist/SocialIcon/SocialIcon';

export { SocialIcon };
export type { SocialIconProps, SocialMediaType };
export default withTheme<SocialIconProps>(SocialIcon, 'SocialIcon');
