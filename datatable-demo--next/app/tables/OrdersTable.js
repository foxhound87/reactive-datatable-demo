import React from 'react';
import View from 'reactive-datatable/src/View';

export default store => ({

  name: 'Orders',

  sort: ['createdAt', 'updatedAt', 'amount', 'tax', 'discount'],

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
    key: 'products',
    label: 'Products',
    type: 'list',
  }, {
    key: 'amount',
    label: 'Amount',
    type: 'string',
  }, {
    key: 'tax',
    label: 'Tax',
    type: 'string',
  }, {
    key: 'discount',
    label: 'Discount',
    type: 'string',
  }, {
    key: 'total',
    label: 'Total',
    type: 'string',
  },
  // { key: 'actionDropdown', type: 'actionDropdown' },
  { key: 'actionButtons', type: 'actionButtons' },
  { key: 'checkbox', type: 'checkbox' },
  ],

  actionButtons: [{
    type: 'button',
    key: 'showRelatedUser',
    label: 'User',
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

  bulkActions: [],

  filters: {
    link: {
      // link "amount" field
      // to multiple filters
      amountSearch: 'amount',
      amountSelect: 'amount',
    },
    form: {
      fields: [{
        name: 'amountSearch',
        type: 'text',
        label: 'Amount',
        output: value => Number(value),
      }, {
        name: 'amountSelect',
        type: 'select',
        label: 'Amount',
        output: obj => obj.value,
        extra: [
          { value: { $lte: 50 }, label: '50 or Less' },
          { value: { $lte: 150 }, label: '150 or Less' },
          { value: { $gte: 150 }, label: '150 or More' },
          { value: { $gte: 250 }, label: '250 or More' },
        ],
      }],
    },
  },

});
