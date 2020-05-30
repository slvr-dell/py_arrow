function arrowInput(arrowname) {    
    var result;
    $.ajax({ type: "GET",
         url: "http://localhost:8010/input",
         data: { n: arrowname },
         async: false,
         dataType: "json",
         success: function(data){
         result = data;
         }
       });
    return result;
}