join_paragragh_array=[];
function get_paragraph_1(){
    var display_paragraph_array = [];
    for (var j = 1; j <= 5; j++) {
       var join_paragraph = document.getElementById("join_paragraph_" + j).value;
        console.log(join_paragraph);
        join_paragragh_array.push(join_paragraph);
    }
    console.log(join_paragragh_array);
    var length_of_the_array = join_paragraph_array.length;
    console.log(length_of_the_array);
    
    for (var k = 0; k < length_of_the_array; k++) {
        display_paragraph_array.push("<h4> PARAGRAPH -" + join_paragraph_array[k]+ "</h4>");
        console.log(display_paragraph_array);
    }
    console.log(display_paragraph_array);
    document.getElementById("get_paragraph_1").innerHTML = display_paragraph_array;
    display_student_array.join(". ");
    console.log (display_paragraph_array);
  }
  join_paragragh_array1=[];
function get_paragraph_2(){
    var display_paragraph_array1 = [];
    for (var j = 1; j <= 5; j++) {
       var join_paragraph1 = document.getElementById("join_paragraph_" + j).value;
        console.log(join_paragraph1);
        join_paragragh_array1.push(join_paragraph1);
    }
    console.log(join_paragragh_array1);
    var length_of_the_array1 = join_paragraph_array1.length;
    console.log(length_of_the_array1);
    
    for (var k = 0; k < length_of_the_array1; k++) {
        display_paragraph_array1.push("<h4> PARAGRAPH -" + join_paragraph_array1[k]+ "</h4>");
        console.log(display_paragraph_array1);
    }
    console.log(display_paragraph_array1);
    document.getElementById("get_paragraph_2").innerHTML = display_paragraph_array1;
    display_student_array1.join(". ");
    console.log (display_paragraph_array1);
  }