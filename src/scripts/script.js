import { sha256, sha224 } from 'js-sha256';

const overlay = document.querySelector('#overlay');
const popup = document.querySelector('#popup');
const popupInput = document.querySelector('#popup-input');

window.addEventListener('load', function() {
  overlay.style.display = 'block';
  popup.style.display = 'block';

  document.body.classList.add('disable');
  document.querySelector('#content').classList.add('disable');
});

popupInput.addEventListener('input', () => {
    if (sha224(sha256(popupInput.value)) === 'c7ffe87f0a89c45ec246fd4274829e75fb1258b218e4f4885ad19fb4') {
        popup.style.backgroundColor = '#B3E5BE';
        setTimeout(() => {
            overlay.style.display = 'none';
            popup.style.display = 'none';
            document.body.classList.remove('disable');
            document.querySelector('#content').classList.remove('disable');
        }, 1000);
    }
    else if (popupInput.value ==='') {
        popup.style.backgroundColor = '#FFFFFF';
    }
    else {
        popup.style.backgroundColor = '#DF7857';
    }
});
