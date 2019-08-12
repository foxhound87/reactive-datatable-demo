import React from 'react';
import { observer } from 'mobx-react';
import { when } from 'mobx';

import { authorize } from '@/app/components/hoc/authorize';
import { layout } from '@/app/components/hoc/layout';
import Collection from 'reactive-datatable/src/Collection';

@layout @authorize @observer
export default class UsersProfiles extends React.Component {

  static async getInitialProps(ctx) {
    const { store } = ctx;

    return Promise.all([
      store.collections.UsersProfiles.load(),
    ]);
  }

  componentDidMount() {
    const { store } = this.props;

    when(
      () => store.auth.check,
      () => store.collections.UsersProfiles.isEmpty &&
            store.collections.UsersProfiles.load(),
    );
  }

  Header = () => (
    <span>Extended UsersProfiles Head</span>
  );

  render() {
    return (
      <Collection
        name="UsersProfiles"
        store={this.props.store}
        header={this.Header}
      />
    );
  }
}
