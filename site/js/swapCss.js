var sheetList = [];
var sheetSize = 0;

function setSheetList(infoArr) {
	console.log("CALLED: setSheetList(infoArr: "+infoArr+")");
    sheetList = infoArr;
    sheetSize = sheetList.length;
}

function calcNextElem() {
	console.log("CALLED: calcNextElem()");
	console.log("\tFUNC_MESSAGE: current style index is: " + localStorage.getItem('swap'));
	var ret = (parseInt(localStorage.getItem('swap')) + 1)%2;
	console.log("\tFUNC_MESSAGE: next style index is: " + ret);

	return ret;
}

function nextSheet(linkId){
	console.log("CALLED: nextSheet(linkId: "+linkId+")");
    var nextelem = calcNextElem();
    setSheet(linkId, nextelem);
}

function setSheet(linkId, index) {
	console.log("CALLED: setSheet(linkId: "+linkId+", index: "+index+")");
    localStorage.setItem('swap', index);
    document.getElementById(linkId).href = sheetList[index];
}

function restoreLastSheet(linkId) {
	console.log("CALLED: restoreLastSheet(linkId: "+linkId+")");
    if (!localStorage.getItem('swap')) {
		console.log("\tFUNC_MESSAGE: No style selected: defining style as default.");
        localStorage.setItem('swap', 0);
        document.getElementById(linkId).href = sheetList[0];
    } else {
		console.log("\tFUNC_MESSAGE: Old style choice detected: restoring.")
        document.getElementById(linkId).href = sheetList[localStorage.getItem('swap')];
    }
}