size= 0;
$("#3x3")[0].onclick= function(){
  matrix_visibility("3x3");
    size = 3;
}
$("#4x4")[0].onclick= function(){
    matrix_visibility("4x4");
    size = 4;
}
$("#5x5")[0].onclick= function(){
    matrix_visibility("5x5");
    size = 5;
}
$("#6x6")[0].onclick= function(){
    matrix_visibility("6x6");
    size = 6;
}
$("#7x7")[0].onclick= function(){
    matrix_visibility("7x7");
    size = 7;
}
$("#8x8")[0].onclick= function(){
    matrix_visibility("8x8");
    size = 8;
}

function matrix_visibility(matrix_size) {
    let curret_table = ("#table_") + matrix_size;
    $("#table_3x3")[0].style.visibility='hidden';
    $("#table_4x4")[0].style.visibility='hidden';
    $("#table_5x5")[0].style.visibility='hidden';
    $("#table_6x6")[0].style.visibility='hidden';
    $("#table_7x7")[0].style.visibility='hidden';
    $("#table_8x8")[0].style.visibility='hidden';
    $("#table_3x3")[0].style.visibility='hidden';
    $(curret_table)[0].style.visibility='visible';
return
}
