
/*
Please consider that the JS part isn't production ready at all, I just code it to show the concept of merging filters and titles together !
*/
// $(document).ready(function(){
//     // $('.filterable .btn-filter').click(function(){
//     //     var $panel = $(this).parents('.filterable'),
//     //     $filters = $panel.find('.filters input'),
//     //     $tbody = $panel.find('.table tbody');
//     //     if ($filters.prop('disabled') == true) {
//     //         $filters.prop('disabled', false);
//     //         $filters.first().focus();
//     //     } else {
//     //         $filters.val('').prop('disabled', true);
//     //         $tbody.find('.no-result').remove();
//     //         $tbody.find('tr').show();
//     //     }
//     // });

//     $('.filterable .filters input').keyup(function(e){
//         /* Ignore tab key */
//         var code = e.keyCode || e.which;
//         if (code == '9') return;
//         /* Useful DOM data and selectors */
//         var $input = $(this),
//         inputContent = $input.val().toLowerCase(),
//         $panel = $input.parents('.filterable'),
//         column = $panel.find('.filters th').index($input.parents('th')),
//         $table = $panel.find('.table'),
//         $rows = $table.find('tbody tr');
//         /* Dirtiest filter function ever ;) */
//         var $filteredRows = $rows.filter(function(){
//             var value = $(this).find('td').eq(column).text().toLowerCase();
//             return value.indexOf(inputContent) === -1;
//         });
//         /* Clean previous no-result if exist */
//         $table.find('tbody .no-result').remove();
//         /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
//         $rows.show();
//         $filteredRows.hide();
//         /* Prepend no-result row if all rows are filtered */
//         if ($filteredRows.length === $rows.length) {
//             $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No result found</td></tr>'));
//         }
//     });
// });

// $(document).ready(function(){
//     $("#jobmanagement td.Status:contains('Unassigned')").css('background-color','#00ff7f');
//     $("#jobmanagement td.Status:contains('Assigned')").css('background-color','#00ff7f');
//     $("#jobmanagement td.Status:contains('Started')").css('background-color','#00ff7f');
//     $("#jobmanagement td.Status:contains('Pending')").css('background-color','#fee8a3');
//     $("#jobmanagement td.Status:contains('Cancelled')").css('background-color','#fee8a3');
//     $("#jobmanagement td.Status:contains('Completed')").css('background-color','#00ff7f');
//     $("#jobmanagement td.Status:contains('Rescheduled')").css('background-color','#00aad2');    


//         // $('#jobmanagement').Tabledit({
//         //     columns: {
//         //     identifier: [0, 'JobId'],
//         //     editable: [[1, 'Job Description'], [2, 'Job Location'],[3, 'Job Time'],
//         //     [4, 'Job Status'],[5, 'Customer Name'],[6, 'Customer Number'],[7, 'Customer Address'],[8, 'Field Force']]
//         //     }
//         // });


//         // $('#jobmanagement').Tabledit({

//         // // link to server script
//         // // e.g. 'ajax.php'
//         // url: window.location.href,

//         // // class for form inputs
//         // inputClass: 'form-control input-sm',

//         // // // class for toolbar
//         // toolbarClass: 'btn-toolbar',

//         // // class for buttons group
//         // groupClass: 'btn-group btn-group-sm',

//         // // class for row when ajax request fails
//         // dangerClass: 'danger',

//         // // class for row when save changes
//         // warningClass: 'warning',

//         // // class for row when is removed
//         // mutedClass: 'text-muted',

//         // // trigger to change for edit mode.
//         // // e.g. 'dblclick'
//         // eventType: 'click',

//         // // change the name of attribute in td element for the row identifier
//         // rowIdentifier: 'id',

//         // // activate focus on first input of a row when click in save button
//         // autoFocus: true,

//         // // hide the column that has the identifier
//         // hideIdentifier: false,

//         // // activate edit button instead of spreadsheet style
//         // editButton: true,

//         // // activate delete button
//         // deleteButton: false,

//         // // activate save button when click on edit button
//         // saveButton: true,

//         // // activate restore button to undo delete action
//         // restoreButton: true,

//         // // custom action buttons
//         // buttons: {
//         //   edit: {
//         //     class: 'btn btn-sm btn-default',
//         //     html: '<span class="glyphicon glyphicon-pencil"></span>',
//         //     action: 'edit'
//         //   },
//         //   delete: {
//         //     class: 'btn btn-sm btn-default',
//         //     html: '<span class="glyphicon glyphicon-trash"></span>',
//         //     action: 'delete'
//         //   },
//         //   save: {
//         //     class: 'btn btn-sm btn-success',
//         //     html: 'Save'
//         //   },
//         //   restore: {
//         //     class: 'btn btn-sm btn-warning',
//         //     html: 'Restore',
//         //     action: 'restore'
//         //   },
//         //   confirm: {
//         //     class: 'btn btn-sm btn-danger',
//         //     html: 'Confirm'
//         //   }
//         // },

//         // // executed after draw the structure
//         // onDraw: function() { return; },

//         // // executed when the ajax request is completed
//         // // onSuccess(data, textStatus, jqXHR)
//         // onSuccess: function() { return; },

//         // // executed when occurred an error on ajax request
//         // // onFail(jqXHR, textStatus, errorThrown)
//         // onFail: function() { return; },

//         // // executed whenever there is an ajax request
//         // onAlways: function() { return; },

//         // // executed before the ajax request
//         // // onAjax(action, serialize)
//         // onAjax: function() { return; }

//         // });


//     // $('#table').editableTableWidget();

//   //   $('#table').editableTableWidget({
//   //   cloneProperties: ['background', 'border', 'outline']
//   //   });

//   //   $('table td').on('validate', function(evt, newValue) {
//   //       if (true) { 
//   //           return false; // mark cell as invalid 
//   //       }
//   //   });

//   //   $('table td').on('change', function(evt, newValue) {
//   //       // do something with the new cell value 
//   //       if (true) { 
//   //           return false; // reject change
//   //       }
//   //   });


//   // $('#table').editableTableWidget().numericInputExample().find('td:first').focus();
//   // $('#textAreaEditor').editableTableWidget({editor: $('<textarea>')});
//   // window.prettyPrint && prettyPrint();


//    $("table tr").editable({
//     keyboard: true,
//     dblclick: true,
//     click: true,
//     button: true,
//     buttonSelector: ".edit",
//     dropdowns: {},
//     maintainWidth: true,
//     edit: function(values) {},
//     save: function(values) {
//           var id = $(this).data('JobId');
//       $.post('/api/object/' + id, values);
//     },
//     cancel: function(values) {}
// });



// });

//  $(function() {
//       var pickers = {};

//       $('table tr').editable({
//         dropdowns: {
//           sex: ['Male', 'Female']
//         },
//         edit: function(values) {
//           $(".edit i", this)
//             .removeClass('fa-pencil')
//             .addClass('fa-save')
//             .attr('title', 'Save');

//           pickers[this] = new Pikaday({
//             field: $("td[data-field=birthday] input", this)[0],
//             format: 'MMM D, YYYY'
//           });
//         },
//         save: function(values) {
//           $(".edit i", this)
//             .removeClass('fa-save')
//             .addClass('fa-pencil')
//             .attr('title', 'Edit');

//           if (this in pickers) {
//             pickers[this].destroy();
//             delete pickers[this];
//           }
//         },
//         cancel: function(values) {
//           $(".edit i", this)
//             .removeClass('fa-save')
//             .addClass('fa-pencil')
//             .attr('title', 'Edit');

//           if (this in pickers) {
//             pickers[this].destroy();
//             delete pickers[this];
//           }
//         }
// });
//     });


function EditJob(data) {
                editableGrid = new EditableGrid("DemoGridJSON"); 
                editableGrid.tableLoaded = function() { this.renderGrid("tablecontent", "testgrid"); };
                editableGrid.loadJSON("grid.json");
            } 


// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;

// const { document } = (new JSDOM('')).window;
// global.document = document;

// // Load jQuery with the simulated jsdom window.
// $ = require('jquery')(document.defaultView);

