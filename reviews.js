function generare_reviews(reviews)
{
    const main = document.getElementById('main')
    const delay = 500

    for(let i = 0; i < reviews.length; i++)
    {
        setTimeout(() =>
        {
            const div = document.createElement('div')
            const nume = document.createElement('p')
            const prenume = document.createElement('p')
            const email = document.createElement('p')
            const mesaj = document.createElement('p')

            nume.innerText = String.prototype.concat('Nume: ', reviews[i].nume)
            prenume.innerText = String.prototype.concat('Prenume: ', reviews[i].prenume)
            email.innerText = String.prototype.concat('Email: ', reviews[i].email)
            mesaj.innerText = String.prototype.concat('Mesaj: ', reviews[i].mesaj)


            div.className = 'reviews'
            mesaj.className = 'mesaj'

            main.appendChild(div)
            div.appendChild(nume)
            div.appendChild(prenume)
            div.appendChild(email)
            div.appendChild(mesaj)
        }, delay * (i + 1))




    }
}

window.onload = () =>{

    let reviews = localStorage.getItem('reviews')

    if (reviews != null)
    {
        reviews = JSON.parse(reviews)
    }
    else
    {
        reviews = []
    }

    generare_reviews(reviews)
}