import { withTheme } from '../config';
import { Badge, BadgeProps } from '@rneuinext/base/dist/Badge/Badge';
import { withBadge } from '@rneuinext/base/dist/Badge/withBadge';

export { Badge, withBadge };
export type { BadgeProps };
export default withTheme<BadgeProps>(Badge, 'Badge');
