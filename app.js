function filterAll(params) {
    let x;
    x = document.getElementsByClassName('box');
    if (params == 'all') params = '';
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('show');
        if (x[i].className.indexOf(params) > -1){
            x[i].classList.add('show');
        };

    }
}

filterAll('all')