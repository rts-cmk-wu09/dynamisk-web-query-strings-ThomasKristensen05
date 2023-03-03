document.querySelector(".destinationList").addEventListener("click", (e) => {
    let destinationsId = e.target.closest("figure").attributes.id.value
    console.log(e)
    if (e.target.classList.contains("fa-heart")) {

        if (!localStorage.getItem(destinationsId)) {

            localStorage.setItem(destinationsId, 'whatever')
            e.target.classList.add('fa-solid')

        } else { 

            localStorage.removeItem(destinationsId)
            e.target.classList.remove('fa-solid')
        }
    }
})