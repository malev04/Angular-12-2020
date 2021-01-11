var isFromValid;

function navigateSearchResults(currentPage) {

	var queryTxt = document.getElementById("secSearchText").value;
	var datastring = 'currentPage=' + currentPage + '&queryString=' + queryTxt;

	$("#search_area")
			.html(
					'<img alt="loading" src="/assets/small-loader.gif">');

	$.ajax({
		url : "/navigate-results",
		global : false,
		type : "post",
		cache : false,
		data : datastring,
		dataType : "html",
		async : false,
		success : function(html) {
			$("#search_area").empty();
			$("#search_area").append(html);
		}
	});
}

function submitSearchQuery() {

	isFormValid = true;
	var queryTxt = document.getElementById("searchText").value;

	if (queryTxt == "Search..." || queryTxt.length == 0) {
		isFormValid = false;
	}
	if (isFormValid) {
		document.forms["search"].action = "/search";
		document.forms["search"].submit();
	} else {
		return false;
	}
}

function submitSecSearchQuery() {

	isFormValid = true;
	var queryTxt = document.getElementById("secSearchText").value;
	if (queryTxt == "Search..." || queryTxt.length == 0) {
		isFormValid = false;
	}
	if (isFormValid) {
		document.forms["search"].action = "/search";
		document.forms["search"].submit();
	} else {
		return false;
	}
}

function clearText() {
	document.getElementById("searchText").value = "";
}

function showText() {
	var queryTxt = document.getElementById("searchText").value;
	if(queryTxt.length==1){
		document.getElementById("searchText").value = "Search..." ;
	}
	

}



function Search(myEvent)
{
        if (myEvent.keyCode == 13) 
                                {
         submitSearchQuery();
                                                
        }
		
}		