import React from 'react';
import View from '../modules/reactive-datatable/src/View';

export default store => ({

  name: 'Profiles',

  sort: ['createdAt', 'updatedAt', 'firstName', 'lastName'],

  columns: [{
    key: 'createdAt',
    label: 'Created At',
    type: 'date',
    format: 'MMM D, Y',
  }, {
    key: 'updatedAt',
    label: 'Updated At',
    type: 'date',
    format: 'MMM D, Y',
  }, {
    key: '$id',
    label: 'ID',
    type: 'reveal',
  }, {
    key: 'userId',
    label: 'User ID',
    type: 'reveal',
  }, {
    key: 'firstName',
    label: 'First Name',
    type: 'string',
  }, {
    key: 'lastName',
    label: 'Last Name',
    type: 'string',
  },
  // { key: 'actionDropdown', type: 'actionDropdown' },
  { key: 'actionButtons', type: 'actionButtons' },
  { key: 'checkbox', type: 'checkbox' },
  ],

  actionButtons: [{
    type: 'button',
    key: 'showProfile',
    label: 'View',
    handler: item => e => ([
      e.preventDefault(),
      item.toggleView('showProfile'),
    ]),
    view: item => (
      <View
        item={item}
        isVisible={item.isVisibleView('showProfile')}
      />),
  }, {
    type: 'button',
    key: 'showRelatedUser',
    label: 'Related User',
    handler: item => e => ([
      e.preventDefault(),
      item.toggleView('showRelatedUser'),
      item.getRelated({ // hasOne
        relation: 'user',
        service: 'users',
        key: 'userId',
      }),
    ]),
    view: item => (
      <View
        relation="user"
        item={item}
        loading={item.$loading}
        isVisible={item.isVisibleView('showRelatedUser')}
      />),
  }],

  actionDropdown: [],

  bulkActions: [{
    type: 'button',
    key: 'editUserRoles',
    label: 'Roles',
  }],

  filters: [],

});
