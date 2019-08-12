import React from 'react';

import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

import bindings from '@/shared/forms/_.bindings';

import TextField from '@/shared/components/form/inputs/MaterialTextField';
import ReactSelect from '@/shared/components/form/inputs/ReactSelect';

export default class Extensions {
  init() {
    this.bindings = bindings;
    this.plugins = { dvr: dvr(validatorjs) };

    this.editorSwitch = ({ store, collection, form, field }) => ({
      text: <TextField field={field} key={field.name} />,
      select: <ReactSelect field={field} key={field.name} fullwidth />,
    });

    this.filterSwitch = ({ store, collection, form, field }) => ({
      text: <TextField field={field} key={field.name} />,
      select: <ReactSelect field={field} key={field.name} />,
    });

    this.cellSwitch = ({ column, value, item, collection }) => ({
      // string: <MyCustomCell ... />,
    });

  }
}
