export const goBack = (history) => {
  history.goBack();
};

export const goHomePage = (history) => {
  history.push('/');
};

export const goToPokedex = (history) => {
  history.push('/pokedex');
};

export const goToDetails = (history,id) => {
  history.push(`/pokedex/details/${id}`)
}
