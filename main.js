const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active")
    $(".cities .Search-Here").css({"height": "0"});
});

optionList.forEach( o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        $(".cities .Search-Here").css({"height": "auto"});
    });
});

function send(){
        let inputCity = document.querySelector('#inputText');
        var inputText = inputCity.value;

        const stateChoice = selected.innerHTML;

        var jsonUrl = 'https://data.covid19india.org/state_district_wise.json'

        var data = ''

        $.get(jsonUrl, function(data){

            console.log(data[stateChoice].districtData[inputText].recovered);
            
            data = `
            <td>${data[stateChoice].districtData[inputText].confirmed}</td>
            <td>${data[stateChoice].districtData[inputText].recovered}</td>
            <td>${data[stateChoice].districtData[inputText].deceased}</td>
            `

            $('#data').html(data)
        })
    }