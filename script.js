var cars = [{"id": 1, "bildurl": "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F1.png", "typ": "Typ 1", "artal": "2020", "pris": "100000"}, {"id": 2, "bildurl": "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F2.png", "typ": "Typ 2", "artal": "2019", "pris": "110000"}, {"id": 3, "bildurl": "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F3.png", "typ": "Typ 3", "artal": "2018", "pris": "120000"}, {"id": 4, "bildurl": "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F4.png", "typ": "Typ 4", "artal": "2017", "pris": "130000"}, {"id": 5, "bildurl": "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F5.png", "typ": "Typ 5", "artal": "2016", "pris": "140000"}, {"id": 6, "bildurl": "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F6.png", "typ": "Typ 6", "artal": "2015", "pris": "150000"}, {"id": 7, "bildurl": "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F7.png", "typ": "Typ 7", "artal": "2014", "pris": "160000"}, {"id": 8, "bildurl": "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F8.png", "typ": "Typ 8", "artal": "2013", "pris": "170000"}, {"id": 9, "bildurl": "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F9.png", "typ": "Typ 9", "artal": "2012", "pris": "180000"}, {"id": 10, "bildurl": "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F10.png", "typ": "Typ 10", "artal": "2011", "pris": "190000"}];


// Function to create a paragraph with given text
function createParagraph(text) {
    var paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

// Function to handle email field change
function handleEmailChange() {
    var email = document.getElementById('email').value;
    var swedishPostalCodeField = document.getElementById('swedishpostalcode');

    // Show the swedish postal code field if the email ends with '.se'
    if (email.endsWith('.se')) {
        swedishPostalCodeField.style.display = 'block';
    } else {
        swedishPostalCodeField.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the button click
    document.getElementById('button-contact').addEventListener('click', function(event) {
        event.preventDefault(); // Preventing the default action
        console.log(document.getElementById('email').value); // Logging the email value
    });

    // Event listener for changes in the phone input
    document.getElementById('phone').addEventListener('change', function() {
        console.log(createParagraph(this.value)); // Logging the created paragraph
    });

    // Event listener for email field changes
    document.getElementById('email').addEventListener('change', handleEmailChange);
});


// Function to render cars
function renderCars() {
    var carsContainer = document.getElementById('cars-container'); // Assuming there is an element with this ID in your HTML
    if (!carsContainer) return;

    cars.forEach(function(car) {
        var carElement = document.createElement('div');
        carElement.className = 'car';
        carElement.innerHTML = '<img src="' + car.bildurl + '" alt="Bil ' + car.id + '">' +
                               '<p>ID: ' + car.id + '</p>' +
                               '<p>Typ: ' + car.typ + '</p>' +
                               '<p>Årtal: ' + car.artal + '</p>' +
                               '<p>Pris: ' + car.pris + ' SEK</p>';
        carsContainer.appendChild(carElement);
    });
}

document.addEventListener('DOMContentLoaded', renderCars);
