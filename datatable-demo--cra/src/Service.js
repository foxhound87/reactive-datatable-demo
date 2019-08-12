import BaseService from './modules/reactive-datatable/src/Service';
import calls from './modules/reactive-datatable/src/calls';
import { service } from './feathers';
// import { dispatch } from 'rfx-core';

export default class Service extends BaseService {

  id = '_id'; // ID field

  serviceCalls() {
    return calls({
      service,
      // auth: () => dispatch('auth.authenticate'),
      auth: () => Promise.resolve(), // no auth
    });
  }
}
