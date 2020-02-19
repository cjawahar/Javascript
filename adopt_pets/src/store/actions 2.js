export default {
  // ({ commit }, pet) -- also works. Can then just call commit('appendPet')
  // payload will be { pet, species } object.
  addPet: (context, payload) => {
    context.commit('appendPet', payload)
  }
}
