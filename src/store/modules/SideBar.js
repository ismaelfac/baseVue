export const SET_TOOGLEBTN = 'SET_TOOGLEBTN';

export default {
    namespaced: true,
    state: {
        toogle_btn: false,
    },
    mutations: {
        [SET_TOOGLEBTN](state){
            console.log('SET_TOOGLEBTN'+state);
            state.toogle_btn = !state.toogle_btn;
        }
    },
    getters: {

    },
    actions: {
        
    }
};
