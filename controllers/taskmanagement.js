/*
Please consider that the JS part isn't production ready at all, I just code it to show the concept of merging filters and titles together !
*/
$(document).ready(function(){
    // $('.filterable .btn-filter').click(function(){
    //     var $panel = $(this).parents('.filterable'),
    //     $filters = $panel.find('.filters input'),
    //     $tbody = $panel.find('.table tbody');
    //     if ($filters.prop('disabled') == true) {
    //         $filters.prop('disabled', false);
    //         $filters.first().focus();
    //     } else {
    //         $filters.val('').prop('disabled', true);
    //         $tbody.find('.no-result').remove();
    //         $tbody.find('tr').show();
    //     }
    // });

    $('.filterable .filters input').keyup(function(e){
        /* Ignore tab key */
        var code = e.keyCode || e.which;
        if (code == '9') return;
        /* Useful DOM data and selectors */
        var $input = $(this),
        inputContent = $input.val().toLowerCase(),
        $panel = $input.parents('.filterable'),
        column = $panel.find('.filters th').index($input.parents('th')),
        $table = $panel.find('.table'),
        $rows = $table.find('tbody tr');
        /* Dirtiest filter function ever ;) */
        var $filteredRows = $rows.filter(function(){
            var value = $(this).find('td').eq(column).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });
        /* Clean previous no-result if exist */
        $table.find('tbody .no-result').remove();
        /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
        $rows.show();
        $filteredRows.hide();
        /* Prepend no-result row if all rows are filtered */
        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No result found</td></tr>'));
        }
    });
});

function TaskIdGenerator() {
     
    this.length = 4;
    this.timestamp = +new Date;

    var getRandomInt = function( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    var ts = this.timestamp.toString();
    var parts = ts.split( "" ).reverse();
    var id = "";

    for( var i = 0; i < this.length; ++i ) {
    var index = getRandomInt( 0, parts.length - 1 );
    id += parts[index];  
    }     
    return id;       
         
}
function AddNewEmployee(){
    alert("Added employee called");
}