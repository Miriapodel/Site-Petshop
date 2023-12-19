window.onload = () =>
{
    const textarea = document.getElementById('mesaj')
    const formular = document.getElementById('form')

    textarea.addEventListener('keyup', function (event)
    {
        if (event.key === '§' || event.key === '±' || event.key === '|' || event.key ==="{" || event.key ==='}' || event.key === '~') {
            alert("Ati introdus un caracter nepermis. A fost sters automat.")

            let mesaj = textarea.value

            mesaj = mesaj.replace(mesaj[mesaj.length-1], "")
            textarea.value = mesaj
        }
    })

    formular.onsubmit = (event) =>{
       event.preventDefault()

        var review = new Object()

        review.nume = formular.nume.value
        review.prenume = formular.prenume.value
        review.email = formular.mail.value
        review.mesaj = formular.mesaj.value

        let reviews = localStorage.getItem("reviews")

        if (reviews != null)
        {
            reviews = JSON.parse(reviews)
        }
        else
        {
            reviews = []
        }

        if (!(review.nume === '' || review.prenume === '' || review.email === '' || review.mesaj === '')) {

            reviews.push(review)

            reviews = JSON.stringify(reviews)

            localStorage.setItem("reviews", reviews)

            formular.nume.value = ""
            formular.prenume.value = ""
            formular.mail.value = ""
            formular.mesaj.value = ""
        }
    }

}