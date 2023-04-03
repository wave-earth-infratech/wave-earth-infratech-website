const toggleSwitch = document.querySelector('.theme-switcher');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.setAttribute('data-background', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.querySelector("body").setAttribute("data-background", 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.querySelector("body").setAttribute("data-background", 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);