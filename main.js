var obj = {
    "person":[{
        "fname":"marcus",
        "lname":"warnsley",
        "age":"28",
        "dob":"02161987",
        "email":"marcus.warnsley@gmail.com",
        "movieGenre":"horror",
        "favFood":"chinese"
    }]
};

(function(){
    var arr = [];
    for(var i = 0; i < obj.person.length; i++){
        obj2 = obj.person[i];
    }
    for(var prop in obj2){
        arr.push(prop);
    }

    for(var t = 0; t < arr.length; t++){
        var li = document.createElement("li");
        $("#prop-ul").append(li);
        arrSort = arr[t];
        li.innerHTML = arrSort;
    }
    $("#sort").on("click",function(){
        var $sort = this;
        var $ul = $("#prop-ul");
        var $listLi = $('li',$ul);
        $ul.toggleClass("asc");
        $listLi.sort(function(a, b){
            var keyA = $(a).text();
            var keyB = $(b).text();
            if($($ul).hasClass('asc')){
                return (keyA > keyB) ? 1 : 0;
            } else {
                return (keyA < keyB) ? 1 : 0;
            }
        });
        $.each($listLi, function(index, row){
            $ul.append(row);
        });
    });
})();