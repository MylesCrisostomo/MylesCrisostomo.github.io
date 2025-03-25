document.addEventListener("DOMContentLoaded", function () {
    const modals = document.querySelectorAll(".modal");
    const closeAllBtn = document.getElementById("closeAllModals");

    closeAllBtn.addEventListener("click", function () {
        modals.forEach(modal => {
            let modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    });
});

