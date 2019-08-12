import React from 'react';
import { observer } from 'mobx-react';
import TextField from '@material-ui/core/TextField';

export default observer(({
  field,
  fullwidth = false,
}) => (
  <div className="mb2">
    <TextField
      {...field.bind()}
      margin="normal"
      fullWidth={fullwidth}
      style={{ width: '100%' }}
    />
  </div>
));
