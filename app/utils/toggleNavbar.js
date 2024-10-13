// app/utils/toggleNavbar.js
export const toggleNavbar = (collapseID) => {
    const element = document.getElementById(collapseID);
    if (element) {
      element.classList.toggle('hidden');
      element.classList.toggle('block');
    }
  };
  