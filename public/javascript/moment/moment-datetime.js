/**
 * This plug-in will provide date sorting for the "dd/mm/YYYY hh:ii:ss" 
 * formatting, which is common in France and other European countries. It can 
 * also be quickly adapted for other formatting as required. Furthermore, this 
 * date sorting plug-in allows for empty values in the column.
 *
 * Please note that this plug-in is **deprecated*. The
 * [datetime](//datatables.net/blog/2014-12-18) plug-in provides enhanced
 * functionality and flexibility.
 *
 *  @name Date (dd/mm/YYYY hh:ii:ss) 
 *  @summary Sort date / time in the format `dd/mm/YYYY hh:ii:ss`
 *  @author [Ronan Guilloux](http://coolforest.net/)
 *  @deprecated
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'date-moment', targets: 0 }
 *       ]
 *    } );
 */

jQuery.extend(jQuery.fn.dataTableExt.oSort, {

    "date-moment-pre": function (a) {
        return ~~moment(a, "DD/MM/YYYY HH:mm:ss a").format("X");
    },
    "date-moment-asc": function (a, b) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
    "date-moment-desc": function (a, b) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
  });