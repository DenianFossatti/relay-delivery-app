import { FlatList as RNFlatList } from 'native-base';
import { IFlatListProps } from 'native-base/src/components/basic/FlatList';
import { forwardRef } from 'react';

import { assignTestId } from '../../tests/assignTestId';

export interface InterfaceFlatListProps<ItemT> extends IFlatListProps<ItemT> {
  ref?: any;
  testID?: string;
}

export type FlatListProps<ItemT> = InterfaceFlatListProps<ItemT>;

const FlatListComponent = <ItemT,>({ testID = 'FlatList', ...props }: FlatListProps<ItemT>, ref: any) => {
  return <RNFlatList {...assignTestId('List', testID)} ref={ref} {...props} />;
};

export const FlatList = forwardRef(FlatListComponent) as <ItemT>(props: FlatListProps<ItemT>, ref: any) => any;
