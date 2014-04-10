

var first = true;

$(document).ready(function() {

    tinymce.init({
        selector: "textarea"
    });    
});

function sendText(sender){   

    if(first){
        $('#annotate').annotator();
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



