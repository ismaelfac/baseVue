export const SET_TOOGLEBTN = 'SET_TOOGLEBTN';

export default {
    namespaced: true,
    state: {
        toogle_btn: false,
        colsContent: '12',
        colsSideBar: '0'
    },
    mutations: {
        SET_TOOGLEBTN (state){
            console.log('SET_TOOGLEBTN'+state);
            state.toogle_btn = !state.toogle_btn;
            state.colsSideBar = state.colsSideBar == '2' ? '0' : '2';
            state.colsContent = state.colsContent == '10' ? '12' : '10';
        }
    },
    getters: {

    },
    actions: {
        
    }
};
