//CREARE UN ARRAY DI OGGETTI CON LE INFORMAZIONI FORNITE

const infoTeamArray = [
    //MEMBRO 1
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    //MEMBRO 2
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },

    //MEMBRO 3
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },

    //MEMBRO 4
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'scott-estrada-developer.jpg',
    },

    //MEMBRO 5
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'angela-lopez-social-media-manager.jpg',
    },

    //MEMBRO 6
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
]

const domElement = document.querySelector('.infos');

// STAMPARE IN CONSOLE LE INFORMAZIONI PER OGNI MEMBRO

    for (let i = 0; i < infoTeamArray.length; i++) {
        const singolarInfo = infoTeamArray[i];
        console.log(singolarInfo.nome, singolarInfo.ruolo, singolarInfo.foto);

        const domElementInfo = document.createElement('div')
        domElementInfo.className = 'col'
        domElement.append(domElementInfo)
        //STAMPARE LE STESSE INFORMAZIONI SUL DOM SEMPLICEMENTE COME STRINGA
        domElementInfo.innerHTML = `${singolarInfo.nome},${singolarInfo.ruolo},${singolarInfo.foto}`
    }











