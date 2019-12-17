import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    getters: {
      fib: state => (n) => {
        let arr = [1, 1];
        for (let i = 2; i < n + 1; i++){
          arr.push(arr[i - 2] + arr[i -1])
        }
        return arr
      }
    }
  })
};

export default createStore;
