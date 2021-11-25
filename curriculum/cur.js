$(".testa").click(function () {

    $testa = $(this);
    //getting the next element
    $info = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $info.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $testa.text(function () {
            //change text based on condition
            return $info.is(":visible") ? "Andrea Vignali" : "Informazioni personali";
        });
    });

});
$(".corso").click(function () {

    $corso = $(this);
    //getting the next element
    $corsi = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $corsi.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $corso.text(function () {
            //change text based on condition
            return $corsi.is(":visible") ? "Andrea Vignali" : "Titolo di Studio e Corsi";
        });
    });

});
$(".lista").click(function () {

    $lista = $(this);
    //getting the next element
    $esp = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $esp.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $lista.text(function () {
            //change text based on condition
            return $esp.is(":visible") ? "Andrea Vignali" : "Esperienze lavorative";
        });
    });

});
