var sheetList = [];
var currentSheet = 0;

function setSheetList(infoArr) {
    sheetList = infoArr;
}

function calcNextElem(total, current) {
    return (current + 1) % total;
}


function nextSheet(linkid) {
    if(sheetList.length > 0){
        currentSheet = calcNextElem(sheetList.length, currentSheet);
        document.getElementById(linkid).href = sheetList[currentSheet];
    }else{
        console.log('No stylesheet was set to make the swap.')
    }
}