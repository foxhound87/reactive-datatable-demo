import React from 'react';
import { observer } from 'mobx-react';
import { when } from 'mobx';

import { authorize } from '@/app/components/hoc/authorize';
import { layout } from '@/app/components/hoc/layout';

@layout @authorize @observer
export default class UserProfile extends React.Component {

  static async getInitialProps(ctx) {
    const { store } = ctx;

    return Promise.all([
      store.items.UserProfile.load(),
    ]);
  }

  componentDidMount() {
    const { store } = this.props;

    when(
      () => store.auth.check,
      () => store.items.UserProfile.isEmpty &&
            store.items.UserProfile.load(),
    );
  }

  render() {
    return (
      <pre>
        {console.log(this.props.store.items.UserProfile.data)}
        {JSON.stringify(this.props.store.items.UserProfile.data, 0, 2)}
      </pre>
    );
  }
}
