var sheetList = [];
var currentSheet = 2;

function setSheetList(infoArr) {
    sheetList = infoArr;
}

function calcNextElem(total, current) {
    return (current + 1) % total;
}

function nextSheet(linkId){
    currentSheet = calcNextElem(sheetList.length, currentSheet);
    document.getElementById(linkId).href = sheetList[currentSheet];
    localStorage.setItem('cssswap',currentSheet);
}

function restoreLastSheet(linkid) {
    if (!localStorage.getItem('cssswap')) {
        nextSheet(linkid);

    } else {
        currentSheet = localStorage.getItem('cssswap');
        document.getElementById(linkid).href = sheetList[currentSheet];
    }
}
