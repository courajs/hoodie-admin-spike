import Ember from 'ember';

const {
  Controller,
  inject: { service },
  get
} = Ember;

export default Controller.extend({
  isUsed: true,
  currentPasswordValue: 'secret',

  accountAdmin: service('hoodie-account-admin'),

  actions: {
    signIn() {
      let pass = get(this, 'currentPasswordValue');
      get(this, 'accountAdmin').signIn({
        username: 'admin',
        password: pass
      });
    }
  }
});
