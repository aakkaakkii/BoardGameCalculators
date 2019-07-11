let incrementLvlButton;
let decrementLvlButton;
let lvlScore;
let incrementItemButton;
let decrementItemButton;
let itemScore;

$( document ).ready(function() {
    incrementLvlButton = $("#increment_lvl");
    decrementLvlButton = $("#decrement_lvl");
    lvlScore = $("#lvl_score");
    incrementItemButton = $("#increment_item");
    decrementItemButton = $("#decrement_item");
    itemScore = $("#item_score");

    incrementLvlButton.click(function () {
        lvlScore.text(parseInt(lvlScore.text(), 10)+1);
    });

    decrementLvlButton.click(function () {
        let currVal = parseInt(lvlScore.text());
        if(currVal > 0){
            lvlScore.text(currVal - 1);
        }
    });

    incrementItemButton.click(function () {
        itemScore.text(parseInt(itemScore.text(), 10)+1);
    });

    decrementItemButton.click(function () {
        let currVal = parseInt(itemScore.text());
        if(currVal > 0){
            itemScore.text(currVal - 1);
        }
    });
});
