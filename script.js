let clickCount = 0;

function toggleMusicAndMoon() {
    let sun = document.querySelector('.sun');
    let moon = document.getElementById('moon');
    let body = document.body;
    let music = document.getElementById('eidMusic');
    let greeting = document.getElementById('greeting');
    let darkMessage = document.getElementById('darkMessage');
    let eidiBtn = document.getElementById('eidiBtn');
    
    if (moon.style.display === 'none' || moon.style.display === '') {
        moon.style.display = 'flex';
        sun.style.display = 'none';
        body.style.background = 'radial-gradient(circle, #2c3e50, #000000)';
        music.play();
        greeting.style.display = 'none';
        darkMessage.style.display = 'block';
        eidiBtn.style.display = 'inline-block';
    } else {
        moon.style.display = 'none';
        sun.style.display = 'flex';
        body.style.background = 'radial-gradient(circle, rgb(255, 236, 210), rgb(252, 182, 159))';
        music.pause();
        greeting.style.display = 'block';
        darkMessage.style.display = 'none';
        eidiBtn.style.display = 'none';
        clickCount = 0;
    }
}

function stopMusic() {
    toggleMusicAndMoon();
}

function trickEidi() {
    let eidiBtn = document.getElementById('eidiBtn');
    clickCount++;
    if (clickCount < 3) {
        let xOffset = Math.random() * 80 - 40; // Increase horizontal movement
        let yOffset = Math.random() * 40 - 20; // Increase vertical movement
        eidiBtn.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    } else {
        eidiBtn.innerText = "Pehle khud tw Eidi do! 😜";
        eidiBtn.style.color = "red"; 
        eidiBtn.style.transform = "none";
        eidiBtn.disabled = true;
    }
}

