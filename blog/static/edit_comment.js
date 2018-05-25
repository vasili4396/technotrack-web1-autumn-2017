$(document).ready(function () {
    function openDialog() {
        $('.modal').modal('show');
    }

    $(document).on('click', '.editLinkForComment', function (event) {
        openDialog();
        $.get(this.href, function (data) {
            $('#commentEdit').html(data);
        });
        event.preventDefault();
    });

    $(document).on('submit', '[data-formtype="ajaxForm"]', function (event) {
        $.post(this.action, $(this).serialize(), function (data) {
            if (data === "OK") document.location.reload();
            else $('#commentEdit').html(data);
        });
        event.preventDefault();
    });
});



