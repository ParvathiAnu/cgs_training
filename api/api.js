window.onload = function() {
    var btn = document.getElementById("btn");

    async function funname() {
        try {
            var result = await fetch("https://randomuser.me/api/");
            var data = await result.json();
            var userData = data.results[0];
            console.log(userData);

            var image = document.getElementById("image");
            image.src = userData.picture.large;
  

            var name = document.getElementById("name");
            name.innerText = `Name:${userData.name.title}  ${userData.name.first} `;

            var address = document.getElementById("address");
            address.innerText = `Street Number: ${userData.location.street.number}\nStreet Name: ${userData.location.street.name}\nCity: ${userData.location.city}\nState: ${userData.location.state}\nCountry: ${userData.location.country}`;

            var details = document.getElementById("details");
            details.innerText = `DOB: ${userData.dob.date}\nAge: ${userData.dob.age}\nEmail: ${userData.email}\nGender: ${userData.gender}`;

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    funname();
    btn.addEventListener("click", funname);
};
