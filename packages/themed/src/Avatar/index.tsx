import { Avatar, AvatarProps } from '@rneuinext/base/dist/Avatar/Avatar';
import {
  Accessory,
  AccessoryProps,
} from '@rneuinext/base/dist/Avatar/Avatar.Accessory';
import { withTheme } from '../config';

export default Object.assign(withTheme<AvatarProps>(Avatar, 'Avatar'), {
  Accessory: withTheme<AccessoryProps>(Accessory, 'AvatarAccessory'),
});

export type { AccessoryProps, AvatarProps };
