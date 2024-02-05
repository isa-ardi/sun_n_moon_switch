$(document).ready(function() {
    $('#checkbox').on('change', function () {
        if ($("#checkbox").is(":checked")) {
            $(".switch").addClass('night');
            $(".eclipse").animate({ left: "196px" }, 25);
            $(".eclipse").animate({ left: "176px" }, 25);
        } else {
            $(".switch").removeClass("night");
            $(".switch__sun").animate({ left: "-10px" }, 200);
            $(".switch__sun").animate({ left: "10px" }, 200);
            $(".eclipse").animate({ left: "26px" }, 25);
            $(".eclipse").animate({ left: "46px" }, 25);
        }
    })
    
})
