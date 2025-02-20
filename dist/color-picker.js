setTimeout(() => {
    const picker=document.querySelector('input[type=color]'); 
    const initialColor = getComputedStyle(document.documentElement).getPropertyValue('--st-color').trim();

    if (initialColor.startsWith('#')) picker.value = initialColor;
    else picker.value = '#003366';//darkblue

    picker.addEventListener('input', function () {
        document.documentElement.style.setProperty('--st-color', this.value);
    });
});