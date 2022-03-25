const region = document.querySelectorAll('.region');

const countriesElement = document.querySelector('.countries')


async function getCountry() {
    const url = await fetch ("https://restcountries.com/v2/all");
    const response = await url.json();
    console.log(response);

    response.forEach( element => {
        showCountry(element)
    });
}

getCountry()


function showCountry(data) {

    const country = document.createElement('div');
    country.classList.add('country');
    country.innerHTML = `
        <div class="country-image">
            <img src=${data.flag} alt="">
        </div>
        <div class="country-info">
            <h3 class="countryName">${data.name}</h3>
            <p><strong>Population</strong>: ${data.population}</p>
            <p class="regionName"><strong>Region</strong>: ${data.region}</p>
            <p><strong>Capital</strong>: ${data.capital}</p>
        </div>
    `

    countriesElement.appendChild(country);

    country.addEventListener('click', ()=> {
        showCountryDetail(data)
    })
}



const filterDropDown = document.querySelector('.filter-dropdown');
const dropShow = document.querySelector('.dropdown');

filterDropDown.addEventListener('click', ()=> {
    dropShow.classList.toggle('showDropDown')
});


const regionName = document.getElementsByClassName('regionName');

region.forEach( element =>{
    element.addEventListener('click', ()=>{
        console.log( element ); 
        Array.from( regionName ).forEach( elem => {
            console.log( elem.innerText );
            if ( elem.innerText.includes(element.innerText) || element.innerText == "All" ){
                elem.parentElement.parentElement.style.display="grid"
            } else {
                elem.parentElement.parentElement.style.display="none"
            }
        }); 
    });
});

const search = document.querySelector(".search");
const countryName = document.getElementsByClassName('countryName');

search.addEventListener("input", () => {
    console.log(search.value.toLowerCase());
    Array.from(countryName).forEach( elem => {
        if ( elem.innerText.toLowerCase().includes(search.value.toLowerCase()) ){
            elem.parentElement.parentElement.style.display="grid"
        } else {
            elem.parentElement.parentElement.style.display="none"
        };
    });
});

const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    moon.classList.toggle("fas");
});




const countryModal = document.querySelector('.countryModal')


function showCountryDetail(data) {
    countryModal.classList.toggle('show')
    countryModal.innerHTML = `
        <button class="back">Back</button>
        <div class="modal">
            <div class="left-modal">
                <img src=${data.flag} alt="">
            </div>

            <div class="right-modal">
                <h1>${data.name}</h1>
                <div class="weird">
                    <div class="inner-left">
                        <p><strong>Native Name</strong>: ${data.nativeName}</p>
                        <p><strong>Population</strong>: ${data.population}</p>
                        <p><strong>Region</strong>: ${data.region}</p>
                        <p><strong>Sub-Region</strong>: ${data.subregion}</p>
                        <p><strong>Capital</strong>: ${data.capital}</p>
                    </div>
                    <div class="inner-right">
                        <p><strong>Top Level Domain</strong>: ${data.topLevelDomain.map(elem => elem)}</p>
                        <p><strong>Currencies</strong>: ${data.currencies.map(elem => elem.name)}</p>
                        <p><strong>Languages</strong>: ${data.languages.map(elem => elem.name)}</p>
                    </div>
                </div>
                
            </div>
        </div>
    `

    const back = countryModal.querySelector('.back')
    
    back.addEventListener('click', ()=> {
        countryModal.classList.toggle('show')
    })

}






