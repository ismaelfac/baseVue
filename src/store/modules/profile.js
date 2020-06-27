export const SET_PROFILE = 'SET_PROFILE';
export const SET_QUERY = 'SET_QUERY';
export const SET_ACTIVE = 'SET_ACTIVE';
export const SET_STATEAPP = 'SET_STATEAPP';
const axios = require('axios');

export default {
    namespaced: true,
    state: {
        profile: null,
        filter: {
            query: '',
            is_active: true,
            stateApp: true
        }
    },
    mutations: {
        [SET_PROFILE](state, profile){
            state.profile = profile;
        },
        [SET_QUERY](state, query){
            state.filter.query = query;
        },
        [SET_ACTIVE] (state) {
            state.filter.is_active = !state.filter.is_active;
        },
        [SET_STATEAPP] (state) {
            state.filter.stateApp = !state.filter.stateApp;
        }
    },
    getters: {
        filteredEmployees: (state) => (query) => {
            console.log('filteredEmployees entro: '+'-'+query+'-'+state.profile.profile);
        }
    },
    actions: {
        async getProfile({commit, rootState}, query) {
            console.log('Entro Store profile: '+query);
            await axios.get('/employee',{
                headers: {
                    Authorization: 'Bearer ' + rootState.auth.token //the token is a variable which holds the token
                }
            })
            .then(response => response.data.data)
            .then(profile => commit(SET_PROFILE, profile));
        }
    }
};
