// import React from 'react';

export default store => ({

  name: 'Orders',

  sort: ['createdAt', 'updatedAt'],

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
  },
  // { key: 'actionButtons', type: 'actionButtons' },
  // { key: 'actionDropdown', type: 'actionDropdown' },
  { key: 'checkbox', type: 'checkbox' },
  ],

  actionButtons: [],

  actionDropdown: [],

  bulkActions: [],

  filters: [],

});
