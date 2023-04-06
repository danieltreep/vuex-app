import axios from 'axios';
const url = 'https://restcountries.com/v3.1/all';

export default {
    namespaced: true,
    state: {
        loadingStatus: 'notLoading',
        countries: [],
        errors: []
    },
    mutations: {
        setLoadingStatus(state, payload) {
            state.loadingStatus = payload;
        },
        setCountries(state, payload) {
            state.countries = payload;
        },
        clearCountries(state) {
            state.countries = [];
        },
        addError(state, payload) {
            state.errors = [...state.errors, payload]
        }
    },
    actions: {
        fetchCountries(context) {
            context.commit('setLoadingStatus', 'loading');
            axios.get(url)
                .then(result => {
                    context.commit('setLoadingStatus', 'notLoading');
                    context.commit('setCountries', result.data);
                })
                .catch(err => {
                    context.commit('setLoadingStatus', 'notLoading');
                    context.commit('setCountries', []);
                    context.commit('addError', err)
                })
        },
        clearCountries(context) {
            context.commit('clearCountries');
        }
    },
    getters: {
        getCountry: (state) => (name) => {
            console.log(name);
            return state.countries.find(c => c.name.official === name)
        }
    }
}
