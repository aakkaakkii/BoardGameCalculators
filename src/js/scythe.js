let result;
let population;
let star;
let territory;
let resources;
let money;

$( document ).ready(function() {
    result = $("#result");
    population = $("#population input");
    star = $("#star input");
    territory = $("#territory input");
    resources = $("#resources input");
    money = $("#money input");


    $("#calculate").click(function () {

        let res = 0;
        let m = multiplier(inputToIntValue(population));


        res += m.territory * inputToIntValue(territory);
        res += m.resources * (Math.floor(inputToIntValue(resources)/2));
        res += m.star * inputToIntValue(star);
        res += inputToIntValue(money);

        result.text(res);
    });

});

function multiplier(population) {
    if (population < 7)
        return {star:3, territory:2, resources:1};
    if (population < 13)
        return {star:4, territory:3, resources:2};
    if (population < 19)
        return {star:5, territory:4, resources:3};
    else
        return {star:0, territory:0, resources:0};
}


function inputToIntValue(obj) {
    if(RegExp(/[^0-9]/g).test(obj.val()))
        return 0;

    return parseInt(obj.val(), 10)
}
