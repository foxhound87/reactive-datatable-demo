import React, { useEffect } from 'react';
import './App.css';
import $store from './store';

import Collection from './modules/reactive-datatable/src/Collection';

import 'tachyons';
import 'nprogress/nprogress';

import './modules/reactive-datatable/src/styles/spinner.css';
import './modules/reactive-datatable/src/styles/snackbar.css';
import './modules/reactive-datatable/src/styles/popup.css';

const store = $store.init();

console.log({ store });

function App() {

  useEffect(() => {
    store.collections.Users.load();
  });

  return (
    <div className="helvetica">
      <Collection
        name="Users"
        store={store}
      />
    </div>
  );
}

export default App;
