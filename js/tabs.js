$(document).ready(function(){
    $(".tabbable").find(".tab").hide();
    $(".tabbable").find(".tab").first().show();
    $(".tabbable").find(".tabs li").first().find("a").addClass("active");
    $(".tabbable").find(".tabs").find("a").click(function(){
        tab = $(this).attr("href");
        $(".tabbable").find(".tab").hide();
        $(".tabbable").find(".tabs").find("a").removeClass("active");
        $(tab).show();
        $(this).addClass("active");
        return false;
    });
});