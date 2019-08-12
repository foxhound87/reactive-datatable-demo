import { observable, action } from 'mobx';
import { extend } from 'rfx-core';

import SharedUI from '../../stores/UI.js';

// ui classes
import auth from '../../stores/ui/Auth.js';
import dialog from '../../stores/ui/Dialog.js';
import snackBar from '../../stores/ui/SnackBar.js';

@extend({
  auth,
  dialog,
  snackBar,
})
export default class UI extends SharedUI {}
