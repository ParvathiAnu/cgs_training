        window.addEventListener('DOMContentLoaded', (event) => {
            const role = getQueryParam('role');
            const name = getQueryParam('name');
            const email=getQueryParam('email');
            const id =getQueryParam('id');
            const Gender =getQueryParam('Gender')
        
            if (role) {
                const toastBody = document.querySelector('.toast-body');
                toastBody.textContent = `You are logged in as ${role}.`;
        
                const toastEl = document.getElementById('roleToast');
                const toast = new bootstrap.Toast(toastEl, { autohide: false }); // Initialize toast with no auto-hide
                toast.show(); // Show the toast
            }
        
            if (name) {
                const welcomeMessage = document.querySelector('.user-options');
                welcomeMessage.innerHTML = `<a href="profile.html?id=${id}&name=${name} &email=${email}&Gender=${Gender}"><i class="fas fa-user-circle icon-blue icon-medium p-2"></i></a> Welcome ${name}`;

            }
        });
        
        // Helper function to get query parameters from the URL
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }
       