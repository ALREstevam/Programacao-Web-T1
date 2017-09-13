var sheetList = [];
var currentSheet = 0;

function setSheetList(infoArr) {
    sheetList = infoArr;
}

function calcNextElem(total, current) {
    return (current + 1) % total;
}


function restoreLastSheet(linkid) {
    console.log('RESTORING');

    if (typeof(Storage) !== "undefined") {
        console.log('IS UNDEFINED');
        if(localStorage.length == 0){
            var style = nextSheet(linkid);
            console.log('SETTING TO '+style);
            localStorage.setItem("cssswap", style);
        }else{
            document.getElementById(linkid).href = localStorage.getItem('cssswap');
        }

    } else {
        console.log('No Web Storage support')
    }
}

function nextSheet(linkid) {
    console.log('NEXSHEET');

    if(sheetList.length > 0){
        currentSheet = calcNextElem(sheetList.length, currentSheet);
        document.getElementById(linkid).href = sheetList[currentSheet];
        return sheetList[currentSheet];
    }else{
        console.log('No stylesheet was set to make the swap.')
        return null;
    }
}