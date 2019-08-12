import BaseService from 'reactive-datatable/src/Service';
import calls from 'reactive-datatable/src/calls';
import { service } from '@/shared/feathers';
import { dispatch } from 'rfx-core';

export default class Service extends BaseService {

  id = '_id'; // ID field

  serviceCalls() {
    return calls({
      service,
      auth: () => dispatch('auth.authenticate'),
      // auth: () => Promise.resolve(), // no auth
    });
  }
}
