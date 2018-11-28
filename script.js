var count = 0;
var font_size = 13;
function addBox(){
    count++;
    font_size++;

    var box = `<span class="box-wrap">${count}<span>`;
    $('#boxStack').append(box);

    checkBox();
}

function removeBox(){
    if(count !== 0){
        count--;
        font_size--;

        $('#boxStack').children().last().remove();
        
        checkBox();
    }
}

function checkBox(){    
    if(count == 0){
        $('#stackInfo').html('No boxes');
    }else{
        $('#stackInfo').html(count);
        $('#stackInfo').css('font-size',font_size);
    }
}
