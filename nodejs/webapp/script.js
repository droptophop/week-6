let img = document.querySelector('#img-placeholder');

fetch('http://placecorgi.com/').then(
    function(res) {
        img.setAttribute('src', res);
    }
);
