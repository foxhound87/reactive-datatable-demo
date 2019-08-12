import React from 'react';
import { observer } from 'mobx-react';
import { when } from 'mobx';

import { authorize } from '@/app/components/hoc/authorize';
import { layout } from '@/app/components/hoc/layout';
import Collection from 'reactive-datatable/src/Collection';

import { theme } from '@/shared/theme';

@layout @authorize @observer
export default class Users extends React.Component {

  static async getInitialProps(ctx) {
    const { store } = ctx;

    return Promise.all([
      store.collections.Users.load(),
    ]);
  }

  componentDidMount() {
    const { store } = this.props;

    when(
      () => store.auth.check,
      () => store.collections.Users.isEmpty &&
            store.collections.Users.load(),
    );
  }

  render() {
    return (
      <Collection
        name="Users"
        store={this.props.store}
        theme={theme}
      />
    );
  }
}
