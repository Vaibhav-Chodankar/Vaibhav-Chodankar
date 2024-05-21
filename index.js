function scrollHorizontally(val, sel) {
    const container = document.getElementById(sel);
    container.scrollBy({
        left: val,
        behavior: 'smooth'
    });
}
