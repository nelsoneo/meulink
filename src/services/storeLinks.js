//Buscar os links salvos
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linsSaves = JSON.parse(myLinks) || [];

  return linsSaves;
}

//Salvar um link no localStorage
export async function saveLinks(key, newLink) {
  let linksStored = await getLinksSave(key);

  //Se já tiver um link salvo com algum ide eu não vou duplicar
  const hasLink = linksStored.some((item) => item.id === newLink.id);

  if (hasLink) {
    return;
  }

  //adiciono o novo link
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
}

//eliminar link salvo
export function deleteLink(links, id) {
  let myLink = links.filter( item => {
    return (item.id !== id)
  });

  localStorage.setItem('@neoLinkey', JSON.stringify(myLink))

  return myLink;
}
