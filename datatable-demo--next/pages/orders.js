import React from 'react';
import { observer } from 'mobx-react';
import { when } from 'mobx';

import { authorize } from '@/app/components/hoc/authorize';
import { layout } from '@/app/components/hoc/layout';
import Collection from 'reactive-datatable/src/Collection';

@layout @authorize @observer
export default class Orders extends React.Component {

  static async getInitialProps(ctx) {
    const { store } = ctx;

    return Promise.all([
      store.collections.Orders.load(),
    ]);
  }

  componentDidMount() {
    const { store } = this.props;

    when(
      () => store.auth.check,
      () => store.collections.Orders.isEmpty &&
            store.collections.Orders.load(),
    );
  }

  render() {
    return (
      <Collection
        name="Orders"
        store={this.props.store}
      />
    );
  }
}
