function generare_carduri(produse)
{
    for(let i = 0; i < produse.length; i++)
    {
        const main = document.getElementById('main')
        const card = document.createElement('div')
        const figure = document.createElement('figure')
        const buton = document.createElement('button')
        const poza = document.createElement('img')
        const denumire = document.createElement('figcaption')
        const pret = document.createElement('p')
        const sursa_img = produse[i].poza
        const nume = produse[i].nume


        pret.innerText = produse[i].pret
        denumire.innerText = nume
        poza.src = sursa_img
        buton.innerText = 'Sterge'

        buton.addEventListener('click', () => {

            let carduri = Array.from(main.querySelectorAll('div'))
            let parent = buton.parentElement
            let index_card = carduri.indexOf(parent) - 1


            produse.splice(index_card, 1)
            main.removeChild(card)


            produseJSON = JSON.stringify(produse)
            localStorage.setItem("produse", produseJSON)


            if (produse.length === 0)
            {
                const mesaj = document.getElementById('cos_gol')
                mesaj.hidden = false
                schimbare_css('index_cos.css')
            }
        })

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

function schimbare_css(target)
{
    const link = document.querySelector('link')
    link.href = target
}

window.onload = () =>
{

    const mesaj = document.getElementById('cos_gol')
    let produse_cos = localStorage.getItem("produse")


    Math.floor(Math.random()*10)



    if(produse_cos != null)
    {
        produse_cos = JSON.parse(produse_cos)

       if(produse_cos.length !== 0)
       {
           mesaj.hidden = true

           schimbare_css('index_produse.css')
           generare_carduri(produse_cos)
       }else
       {
           mesaj.hidden = false
       }
    }



    setInterval(setHighlight, 2000)
}

function setHighlight ()
{

    const text = document.getElementById('highlight')
    const cul_apr = '#E30A24FF'
    const cul_default = '#606c38'



    text.style.color = cul_apr

    setTimeout(() =>
    {
        text.style.color = cul_default
    }, 1000)

}

//TODO: Pagina pentru review uri -> apar la o mica diferenta