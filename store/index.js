import Vuex from 'vuex';


const createStore = () => {
  return new Vuex.Store({
    actions: {
      sendContacts(vuexContext, contacts) {
        vuexContext.commit('sendContacts', contacts)
      }
    }
  })
}

export default createStore;
