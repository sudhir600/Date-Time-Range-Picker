
/* 
	Calendar Script Start
	Documentation at - http://www.daterangepicker.com/#usage
	Fill exiting date time in picker
*/

var todayStartDateTime = moment().startOf('minutes');
var todayEndDateTime   = moment().startOf('hour').add(1, 'hour');
var dateTimeFormat = 'MM-DD-YYYY HH:mm:ss';

updateDateTimeField(todayStartDateTime, todayEndDateTime);


function updateDateTimeField(startDate, endDate){
	var startDateFormatted = moment(startDate).format(dateTimeFormat);
	var endDateFormatted   = moment(endDate).format(dateTimeFormat);
	$('.dateTimerPickerValue').val(startDateFormatted + ' - ' + endDateFormatted);
}



$('.myDateRange').daterangepicker({
    startDate: todayStartDateTime,
    endDate: todayEndDateTime,
	timePicker: true,
	timePicker24Hour:true,
	timePickerSeconds:true,
	drops:'down',
	opens:'right',
    locale: {
      format: 'M-DD-YYYY hh:mm:ss',
	   //cancelLabel: 'Clear'
    },
	ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
});
$('.myDateRange').on('apply.daterangepicker', function(ev, picker) {
   var startDate 	=	picker.startDate.format(dateTimeFormat);
   var endDate 		=	picker.endDate.format(dateTimeFormat);
   updateDateTimeField(startDate, endDate);
});

$('.myDateRange').on('hide.daterangepicker', function(ev, picker) {
	console.log('calendar hidden');
	$('.overlay').addClass('hideAll');
});

$('.myDateRange').on('show.daterangepicker', function(ev, picker) {
	console.log('picker shown');
	$('.overlay').removeClass('hideAll');
});

$('.myDateRange').on('cancel.daterangepicker', function(ev, picker) {
	console.log('cancel clicked');
	$('.overlay').addClass('hideAll');
});

$('document').ready(function(){
	$('.dateTimerPickerValue').click(function(){
		$('.myDateRange').click();
	})
});
/* Calendar Script End */