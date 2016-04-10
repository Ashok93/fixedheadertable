// This JS file is an example file. Please feel free to use the code for your case by modifying the names.

$(document).ready(function() {
  fixedHeaderTable($(“.outer-div”));
}

function fixedHeaderTable($cover){
 //finding and setting the table
 var $table;
 var tables_inside_cover = $cover.find(‘table’);
 $table = (tables_inside_cover.length == 1) ? tables_inside_cover : tables_inside_cover.last();

 //removing previously added header cover for table
 $cover.find(‘.fixed-header’).remove();

//constructing the cloned table
 var $cloned_table = $table.clone();
 $cloned_table.removeAttr(‘id’);
 $cloned_table.find(‘tbody’).remove();
 $cover.prepend($(‘<div>’).addClass(‘fixed-header’));
 var $fixed_header = $cover.find(‘.fixed-header’);
 $fixed_header.prepend($cloned_table);

//Setting scroll for fixed headers based on table scroll
 $table.parent().scroll(function(){
 $fixed_header.scrollLeft($(this).scrollLeft());
 });
}
