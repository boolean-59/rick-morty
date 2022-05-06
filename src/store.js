import Vue from 'vue'

const state = Vue.observable({ search: '' });
export const setSearch = (val) => state.search = val;
export default state;
