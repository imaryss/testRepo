// JavaScript Document
    window.onload = function () {
        document.getElementById("button").onclick = function () {
            // 1. XHR is a JavaScript predefined object
            let xhr = new XMLHttpRequest();

            //parametrii: methoda prin care trimitem requestul:
            // GET - adica vreau sa primesc ceva!
            // POST - in momentul in care vreau sa salvez/update datele
            // PUT - in momentul in care vreau sa salvez/update datele
            // DELETE - sterge aceste date din fisiere/baza de date
            //+ adresa unde trimitem requestul
            // 2. We specify request method and address
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums/');
            // 3. We send the request
            xhr.send();
            // 4. We add an event listener, waiting for the answer
            xhr.onload = function (data) {
                console.log(data);
                //we do something with the data obtained
                document.getElementById("some_div").innerHTML = data.target.response;
            };

            /*xhr.onreadystatechange = function (e) {  
                 if (xhr.status === 200) {  
                     //everything is OK, do something with the data
                     console.log(xhr.responseText);  
                 } else {  
                     //some error occured, log it in the console
                     console.log("Error", xhr.statusText);  
                 }  
             }; */
        }
    }
