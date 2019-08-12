import React from 'react';
import { dispatch } from 'rfx-core';
import $ from '@/shared/styles/mixins';

export default ({ check }) => (
  <div className="cf bg-navy washed-blue fixed w-100 ph2 pv2 pv3-ns ph3 ph4-ns z-999">
    <span className="fl mv1 f4">Reactive Datatable</span>
    {check &&
      <button
        type="button"
        className={$('button')({ small: true, theme: 'yellow' }, 'fr mt1')}
        onClick={() => dispatch('auth.logout')}
      >
        Logout
      </button>}
  </div>
);
