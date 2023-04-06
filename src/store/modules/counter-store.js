export default {
    namespaced: true,
    state: {
        counter: 0,
    },
    mutations: {
        increment(state, payload) {
            state.counter += payload;
        },
        decrement(state, payload) {
            state.counter -= payload;
        },
        reset(state) {
            state.counter = 0;
        }
    },
    actions: {
        increment(context, value) {
            context.commit('increment', value);
        },
        decrement(context, value) {
            context.commit('decrement', value);
        },
        reset(context) {
            context.commit('reset');
        }
    }
}