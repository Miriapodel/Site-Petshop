function verificare_numar_produse(produse_cos)
{
    const numar_produse = produse_cos.length
    let bonus = localStorage.getItem("bonus")


    if (bonus == null)
        bonus = 0

    if (numar_produse >= 5 && bonus == 0)
    {


        let index = Math.floor((Math.random() * 100) % numar_produse)

        produse_cos[index].pret = 0

        localStorage.setItem("bonus", 1)
    }
}

function adaugare_produse_cos()
{
    const butoane = document.getElementsByClassName("butoane")
    for(let i = 0; i < butoane.length; i++)
    {
        const parinte = butoane[i].parentElement
        const poza = parinte.querySelector("figure > img").src
        const nume = parinte.querySelector("figure > figcaption").textContent
        const pret = parinte.querySelector('p')

        butoane[i].addEventListener('click', () =>
        {
            date = new Object()
            date.poza = poza
            date.nume = nume
            date.pret = pret.innerText

            let produse_cos = localStorage.getItem("produse")

            if(produse_cos != null)
            {
                produse_cos = JSON.parse(produse_cos)
            }
            else
            {
                produse_cos = []
            }

            produse_cos.push(date)

            verificare_numar_produse(produse_cos)

            produse_cos = JSON.stringify(produse_cos)

            localStorage.setItem("produse", produse_cos)


        })

    }
}

function generare_carduri(produse)
{
    for(let i = 0; i < produse.length; i++)
    {
        const main = document.getElementById('main')
        const card = document.createElement('div')
        const pret = document.createElement('p')
        const figure = document.createElement('figure')
        const buton = document.createElement('button')
        const poza = document.createElement('img')
        const denumire = document.createElement('figcaption')
        const sursa_img = produse[i].poza
        const nume = produse[i].nume
        const suma = produse[i].pret

        denumire.innerText = nume
        poza.src = sursa_img
        buton.innerText = 'Cumpara'
        pret.textContent = suma


        card.className = 'produse'
        poza.className = 'poze_produse'
        denumire.className = 'captions'
        buton.className = 'butoane'
        pret.className = 'pret'

        main.appendChild(card)
        card.appendChild(figure)
        figure.appendChild(poza)
        figure.appendChild(denumire)
        card.appendChild(buton)
        card.appendChild(pret)


    }
}

var Inventar = (function () {

    let instanta

    function generare_inventar() {
        var produse =
            [{nume: 'Fan Padovan 1kg', poza: 'Poze/fan_padovan.png', pret: '15 lei'}, {
                nume: 'Hrana Padovan',
                poza: 'Poze/Hrana%20Padovan.png',
                pret: '10 lei'
            }, {nume: 'Litiera Pisica', poza: 'Poze/Litiera%20Pisica.png', pret: '40 lei'},
                {nume: 'Os Sepie', poza: 'Poze/Os%20Sepie.png', pret: '5 lei'}, {
                nume: 'Cada Externa',
                poza: 'Poze/Cada%20Externa.png', pret: '7 lei'
            }, {nume: 'Acvariu', poza: 'Poze/Acvariu.png', pret: '200 lei'},
                {nume: 'Hranitor', poza: 'Poze/Hranitor%20.png', pret: '20 lei'}, {
                nume: 'Hrana umeda caini',
                poza: 'Poze/Hrana%20umeda%20caini.png', pret: '30 lei'
            }, {nume: 'Bazin testoase', poza: 'Poze/Bazin%20testoase.png', pret: '150 lei'},
                {nume: 'Terariu', poza: 'Poze/Terariu.png', pret: '250 lei'}, {
                nume: 'Planta decorativa',
                poza: 'Poze/Planta%20decorativa.png', pret: '12 lei'
            }, {nume: 'Jucarie Beeztees', poza: 'Poze/Jucatie%20Beeztees.png', pret: '20 lei'},
                {nume: 'Minge recompense', poza: 'Poze/Minge%20recompense.png', pret: '8 lei'}, {
                nume: 'Hrana semi-umeda',
                poza: 'Poze/Hrana%20semi-umeda.png', pret: '25 lei'
            }, {nume: 'Suport tocit gheare', poza: 'Poze/Suport%20tocit%20gheare.png', pret: '17 lei'},
                {nume: 'Ansamblu de joaca', poza: 'Poze/Ansamblu%20de%20joaca.png', pret: '175 lei'}, {
                nume: 'Jucarie Soricel',
                poza: 'Poze/Jucarie%20soricel.png', pret: '10 lei'
            },]

        return{
            getProduse: function (){
                return produse}
        }
    }

    return{
        getInstanta: function () {
            if(instanta == null)
                instanta = generare_inventar()

            return instanta}
            }
})()



window.onload = () =>
{

    let inventar = Inventar.getInstanta()

    generare_carduri(inventar.getProduse())
    adaugare_produse_cos()

}

