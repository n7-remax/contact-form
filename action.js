function hideEveryThirdElement() {
    let htmlList = [...document.querySelectorAll('.zA:nth-child(3n)')];
    let i = 0;
    while (htmlList[i] !== undefined) {
        htmlList[i].style.visibility = "hidden";
        i++;
    }
}

hideEveryThirdElement();