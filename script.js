var count = 0;
function addBox(){
    count++;
    var box = `<span class="box-wrap">${count}<span>`;
    $('#boxStack').append(box);

    checkBox();
}

function removeBox(){
    count--;
    $('#boxStack').children().last().remove();

    checkBox();
}

function checkBox(){    
    if(count == 0){
        $('#stackInfo').html('No boxes');
    }else{
        $('#stackInfo').html(count);
    }
}