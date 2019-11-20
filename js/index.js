$('#form').on('submit', e => {
    e.preventDefault();

    var input = $('#input').val();
    var $results = $('#results');
    var items = StartupNameGenerator(input);

    $results.html('');
    //Check domain name availability on namecheap.com
    items.forEach((item, idx) => {
        $('<a class="result-item" target="_blank">').
        html(`<span>${item}</span>`).
        attr('href', `https://www.namecheap.com/domains/registration/results.aspx?domain=${item.toLowerCase()}.com`).
        appendTo($results);
    });
});
