let filter = document.getElementById('Input');

filter.addEventListener('keyup',search);

function search(){

    let value = document.getElementById('Input').value.toUpperCase();

    let ul = document.getElementById('list');

    let li = ul.querySelectorAll('li.collection-item');

    for(let i=0;i<li.length;i++)
    {
        let a = li[i].getElementsByTagName('a')[0];

        if (a.innerHTML.toUpperCase().indexOf(value) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
