import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
/*import { inc, dec, rnd } from './actions';*/
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

/*
const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
};
*/

/*
const incDispatch = bindActionCreators(inc, dispatch);
const decDispatch = bindActionCreators(dec, dispatch);
const rndDispatch = bindActionCreators(rnd, dispatch);
*/

/*
const { incDispatch, decDispatch, rndDispatch } = 
  bindActionCreators({
  incDispatch: inc,
  decDispatch: dec,
  rndDispatch: rnd
}, dispatch);
*/

const { inc, dec, rnd } = 
  bindActionCreators(actions, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', inc);

document
  .getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    rnd(payload);
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);

/*
store.subscribe(() => {
  console.log('subscribe: ' + store.getState());
});

console.log(store.getState());

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});

console.log(store.getState());
*/