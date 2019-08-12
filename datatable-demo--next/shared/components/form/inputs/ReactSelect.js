import React from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';

export default observer(({
  field,
  multi = false,
  showError = true,
  ...props
}) => (
  <div className="measure">
    <Select
      {...field.bind()}
      {...props}
      options={field.extra}
      isMulti={multi}
      placeholder={field.placeholder || field.label}
      menuContainerStyle={{ zIndex: 9999 }}
    />
    {showError &&
      <small
        id="name-desc"
        className="f7 black-60 db mt1 mb3 red"
      >
        {field.error}
      </small>}
  </div>
));
