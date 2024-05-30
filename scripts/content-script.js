var count = 0;
function click_listener(event) {
    event.preventDefault();
    window.open(this.href, '_blank');
    event.stopImmediatePropagation();
}
document.querySelectorAll('a[href]').forEach(a => {
    props = a.getAttributeNames()
    if (props.includes("ng-reflect-router-link")) {
        a.removeEventListener("click", click_listener);
        a.addEventListener("click", click_listener, capture=true);
    } else {
        a.setAttribute("target", "_blank");
    }
});