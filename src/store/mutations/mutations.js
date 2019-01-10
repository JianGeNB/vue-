export default {
      changeCity(state, value) {
        state.currentCity = value;
        localStorage.setItem('currentCity',value)
      }
}