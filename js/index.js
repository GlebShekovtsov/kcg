document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (event) {
      const dropdownMenu = this.querySelector('.nav__dropdown-menu');

      dropdowns.forEach(function (otherDropdown) {
        if (otherDropdown !== dropdown) {
          otherDropdown.querySelector('.nav__dropdown-menu').style.display =
            'none';
        }
      });

      if (dropdownMenu.style.display === 'flex') {
        dropdownMenu.style.display = 'none';
      } else {
        dropdownMenu.style.display = 'flex';
      }

      event.stopPropagation();
    });
  });
  document.addEventListener('click', function () {
    dropdowns.forEach(function (dropdown) {
      dropdown.querySelector('.nav__dropdown-menu').style.display = 'none';
    });
  });

  document.getElementById('burger').addEventListener('click', function () {
    document.body.classList.toggle('open');
  });
});
