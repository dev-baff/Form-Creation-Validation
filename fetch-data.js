// Fetch user data once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    fetchUserData();
});

// Async function to fetch and display user data
async function fetchUserData() {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container where data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch from API
        const response = await fetch(apiUrl);

        // Convert response into JSON
        const users = await response.json();

        // Clear "Loading user data..."
        dataContainer.innerHTML = "";

        // Create a <ul> to hold user names
        const userList = document.createElement("ul");

        // Loop through all users and display names
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // If something goes wrong
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data.";
    }
}
