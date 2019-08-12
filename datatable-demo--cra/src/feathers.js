import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import socketio from '@feathersjs/socketio-client';
import authentication from '@feathersjs/authentication-client';
import io from 'socket.io-client';
import axios from 'axios';

const timeout = 10000;
const isClient = (typeof window !== 'undefined');
const storage = isClient ? window.localStorage : null;
const API = process.env.REACT_APP_API;

console.log('Connecting to API:', API);

const connection = isClient
  ? socketio(io(API), {
    transports: ['websocket'],
    timeout,
  })
  : rest(API)
    .axios(axios.create({
      timeout,
    }));

const $app = feathers()
  .configure(connection)
  .configure(authentication({
    cookie: 'ssrToken',
    storage,
  }));

export const app = () => $app;
export const service = name => $app.service(name);
