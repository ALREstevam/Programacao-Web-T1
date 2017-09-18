var sheetList = [];
var sheetSize = 0;

function setSheetList(infoArr) {
    sheetList = infoArr;
    sheetSize = sheetList.length;
}

function calcNextElem(total, current) {
    //var rsp = ((current + 1) % total);
    //console.log("("+current +"+1) % "+total+" = "+rsp);

    if(current == 0){
        return 1;
    }else{
        return 0;
    }

    //return rsp;
}

function nextSheet(linkId){
    var current = localStorage.getItem('swap');

    var nextelem = calcNextElem(sheetSize, current);
    setSheet(linkId, nextelem);
    console.log('current: '+current+', next: '+ nextelem+', size: '+sheetSize);
}

function setSheet(linkId, index) {
    localStorage.setItem('swap', index);
    document.getElementById(linkId).href = sheetList[index];
}

function restoreLastSheet(linkId) {
    if (!localStorage.getItem('swap')) {
        localStorage.setItem('swap', 0);
        document.getElementById(linkId).href = sheetList[0];
    } else {
        document.getElementById(linkId).href = sheetList[localStorage.getItem('swap')];
    }
}