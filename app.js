const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target, entry.isIntersecting); // Log the target and its visibility state
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => {
    observer.observe(el);
    console.log('Observing:', el); // Confirm each element is being observed
});
