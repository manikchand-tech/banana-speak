
var btn = document.querySelector('#btn-translate');
var intxt = document.querySelector('#inputtxt');
var outtext = document.querySelector('#outputtxt');
//var username;
// username = prompt("enter " + "username :");
// alert("welcome " + username + " ! ");
var inValue;
outtext.innerHTML = "your output";
var url = "https://api.funtranslations.com/translate/minion.json?text=";
var url2;
var defaulText = " default text";
btn.addEventListener("click", function myListner() {

    console.log("clicked");
    console.log("translating your text")
    inValue = intxt.value;

    // outtext.innerText = inValue;
    function translateUrl(defaulText) {
        // url2 = url + defaulText;
        url2 = url + defaulText;
        console.log(url2)


    }

    function doFetch(translateUrl) {
        fetch(url2).then(response => response.json()).then(json => {
            console.log(json)
            var c = json.contents.translated;
            outtext.innerText = c;
        }).catch(errorHandler);

    }
    translateUrl(inValue);//defaulText
    doFetch(translateUrl);

})

function errorHandler(error) {
    console.log("error ha bro" + error);
}











