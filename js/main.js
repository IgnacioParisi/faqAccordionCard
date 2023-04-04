window.addEventListener("load", () => {
    let faqs = document.querySelectorAll('.question');
    console.log(faqs);

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');           
        })
    })
})