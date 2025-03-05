import { withTheme } from '../config';
import {
  SearchBar,
  SearchBarProps,
} from '@rneuinext/base/dist/SearchBar/SearchBar';
import { SearchBarAndroidProps } from '@rneuinext/base/dist/SearchBar/SearchBar-android';
import { SearchBarIosProps } from '@rneuinext/base/dist/SearchBar/SearchBar-ios';
import { SearchBarDefaultProps } from '@rneuinext/base/dist/SearchBar/SearchBar-default';

export { SearchBar };
export type {
  SearchBarProps,
  SearchBarAndroidProps,
  SearchBarDefaultProps,
  SearchBarIosProps,
};

export default withTheme<SearchBarProps>(SearchBar, 'SearchBar');
