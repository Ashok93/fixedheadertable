# fixedheadertable
Fixing the header for HTML table

1) Please ensure your table is covered with two div at the top. The structure will look like

<div class=”outer-div”>
<div class=”inner-div”>
<table id=”my-table”>
……..
……..
</table>
</div>
</div>

2) Then use the function fixedHeaderTable($(“.outer-div”)); //pass the reference of your outer div as params
3) Copy and use the function and the css.
4) Bingo! All is set.

