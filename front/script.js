function getCharacterInfo() {
    const characterNameInput = document.getElementById('characterName')
    const characterInfo = document.getElementById('characterInfo')

    const characterName = characterNameInput.value.toLowerCase()

    fetch(`http://localhost:3000/character/${characterName}`)
    .then(response => response.json())
    .then(data => {
        const {name, status, species, gender, origin: { name: originName }, image} = data
        characterInfo.innerHTML = `
        <h2>${name}</h2>
        <img src="${image}" alt="${name}"/>
        <p>${status}</p>
        <p>${species}</p>
        <p>${gender}</p>
        <p>${originName}</p>
        `
    })
    .catch(error => characterInfo.innerHTML = `<p>Imposible acceder al personaje</p>`)
}