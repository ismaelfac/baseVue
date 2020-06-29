export const SET_TOOGLEBTN = 'SET_TOOGLEBTN';

export default {
    namespaced: true,
    state: {
        toogle_btn: false,
    },
    mutations: {
        [SET_TOOGLEBTN](state, toogle_btn){
            console.log('SET_TOOGLEBTN');
            state.toogle_btn = !toogle_btn;
        }
    },
    getters: {

    },
    actions: {
        
    }
};
