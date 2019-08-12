import React from 'react';

import Related from '../modules/reactive-datatable/src/Related';
import Editor from '../modules/reactive-datatable/src/Editor';
import View from '../modules/reactive-datatable/src/View';
import Delete from '../modules/reactive-datatable/src/Delete';

export default store => ({

  name: 'Users',

  sort: [
    'createdAt',
    'updatedAt',
    'email',
    'isVerified',
  ],

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
    // condition: () => false
  }, {
    key: 'email',
    label: 'Email',
    type: 'button',
    if: item => item.isVerified,
    text: item => item.isVerified
      ? <span>&#10004; {item.email}</span>
      : item.email,
    handler: item => e => ([
      e.preventDefault(),
      alert('CLICKED: '+ item.email),
    ]),
  }, {
    key: 'isVerified',
    label: 'Verified',
    type: 'icon',
    icon: item => item.isVerified
      ? <span className="green">&#10004;</span>
      : <span className="red">&#10008;</span>,
  },
  { key: 'roles', label: 'Roles', type: 'list' },
  { key: 'actionButtons', type: 'actionButtons' },
  { key: 'actionDropdown', type: 'actionDropdown' },
  { key: 'checkbox', type: 'checkbox' },
  ],

  actionButtons: [{
    type: 'button',
    key: 'showRelatedProfile',
    label: 'Related Profile',
    // condition: item => item.profile,
    handler: item => e => ([
      e.preventDefault(),
      item.toggleView('showRelatedProfile'),
      item.findRelated({ // blongsTo
        relation: 'profile',
        service: 'profiles',
        key: 'userId',
      }),
    ]),
    view: item => (
      <View
        item={item}
        relation="profile"
        isVisible={item.isVisibleView('showRelatedProfile')}
      />),
  }, {
    type: 'button',
    key: 'showProfilesList',
    label: 'Profile',
    // condition: item => item.profile,
    handler: item => e => ([
      e.preventDefault(),
      item.toggleView('showProfilesList'),
      store.collections.UsersProfiles.load({
        userId: item._id,
      }),
    ]),
    view: item => (
      <Related
        isVisible={item.isVisibleView('showProfilesList')}
        item={item}
        store={store}
        name="UsersProfiles"
        title="Profiles (Custom Title)"
      />),
  }, {
    type: 'button',
    key: 'showOrders',
    label: 'Orders',
    // icon: () => <span>&#10687;</span>,
    handler: item => e => ([
      e.preventDefault(),
      item.toggleView('showOrders'),
      store.collections.Orders.load({
        userId: item._id,
      }),
    ]),
    view: item => (
      <Related
        isVisible={item.isVisibleView('showOrders')}
        item={item}
        store={store}
        name="Orders"
      />),
  }, {
    type: 'button',
    key: 'editUserRoles',
    label: 'Roles',
    theme: 'yellow',
    handler: item => e => ([
      // e.preventDefault(),
      // item.toggleView('editUserRoles'),
    ]),
    // view: item => (),
  }, {
    type: 'button',
    key: 'showEditor',
    label: 'Edit',
    theme: 'green',
    handler: item => e => ([
      e.preventDefault(),
      item.toggleView('showEditor'),
    ]),
    view: item => (
      <Editor
        isVisible={item.isVisibleView('showEditor')}
        name="Users"
        store={store}
        item={item}
      />),
  }, {
    type: 'button',
    key: 'showDelete',
    label: 'Delete',
    theme: 'lightRed',
    handler: item => e => ([
      e.preventDefault(),
      item.toggleView('showDelete'),
    ]),
    view: item => (
      <Delete
        isVisible={item.isVisibleView('showDelete')}
        item={item}
      />),
  }],

  actionDropdown: [{
    type: 'button',
    key: 'userDetails',
    label: 'User Details',
    handler: item => e => ([
      // e.preventDefault(),
      // item.toggleView('userDetails'),
    ]),
    // view: item => (),
  }, {
    type: 'button',
    key: 'userProfile',
    label: 'User Profile',
    handler: item => e => ([
      // e.preventDefault(),
      // item.toggleView('userProfile'),
    ]),
    // view: item => (),
  }],

  bulkActions: [{
    type: 'button',
    key: 'sendEmail',
    label: 'Send Email',
    handler: collection => e => ([
      e.preventDefault(),
      collection.toggleView('sendEmail'),
    ]),
    view: () => (
      <div className="pa5 bg-light-blue" />
    ),
  }, {
    type: 'button',
    key: 'accept',
    label: 'Accept',
    theme: 'green',
    handler: collection => e => ([
      e.preventDefault(),
      collection.toggleView('accept'),
    ]),
    view: () => (
      <div className="pa5 bg-light-green" />
    ),
  }, {
    type: 'button',
    key: 'delete',
    label: 'Delete',
    theme: 'lightRed',
    handler: collection => e => ([
      e.preventDefault(),
      collection.toggleView('delete'),
    ]),
    view: () => (
      <div className="pa5 bg-light-red" />
    ),
  }],

  filters: {
    form: {
      fields: [{
        name: 'email',
        type: 'text',
        label: 'Email',
      }, {
        name: 'isVerified',
        type: 'select',
        label: 'Is Verified',
        output: obj => obj.value,
        extra: [
          { value: true, label: 'Yes' },
          { value: false, label: 'No' },
        ],
      }, {
        name: 'roles',
        type: 'select',
        label: 'Role',
        output: obj => obj.value,
        extra: [
          { value: 'user', label: 'user' },
          { value: 'admin', label: 'admin' },
          { value: 'customer', label: 'customer' },
        ],
      }],
    },
  },

});
