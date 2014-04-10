

var first = true;

$(document).ready(function() {

    tinymce.init({
        selector: "textarea"
    });

    $('#annotate').annotator();
    
});

function sendText(sender){

    if(first){
        $('#annotate div.annotator-wrapper').append(tinymce.activeEditor.getContent());
         first = false;
    }
    else{

        $('#annotate').annotator('destroy');
        $('#annotate').html('');
        $('#annotate').annotator();
        $('#annotate div.annotator-wrapper').append(tinymce.activeEditor.getContent());
    }
}



