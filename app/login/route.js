import Ember from 'ember';

const {
  Route,
  inject: { service },
  get
} = Ember;

export default Route.extend({
  accountAdmin: service('hoodie-account-admin'),

  actions: {
    signIn(password) {
      get(this, 'accountAdmin').signIn({
        username: 'admin',
        password: password
      }).then(() => {
        this.transitionTo('accounts');
      }).catch((reason) => {
        set(this, 'currentError', reason.message);
      });
    },
  }
});
