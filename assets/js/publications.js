(function () {
    var controls = document.querySelector('.publication-filter');
    var papers = document.querySelectorAll('.paper-box');
    if (!controls || !document.querySelector('.paper-box[data-selected]')) return;

    var select = controls.querySelector('select');

    function showPapers(filter) {
        papers.forEach(function (paper) {
            paper.hidden = filter === 'selected' && !paper.hasAttribute('data-selected');
        });
    }

    select.addEventListener('change', function () {
        showPapers(select.value);
    });

    showPapers(select.value);
    controls.hidden = false;
})();
