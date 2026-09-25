// woah, what are you doing here?
// if you see this, text john the number 6.02 * 10^23!

function removeBlur() {
    try {
        blurred = document.querySelectorAll('[class*="blur"]')[0];
        blurred.className = "";
    } catch (ex) {
        // console.log(ex);
    }

    setTimeout(removeBlur, 1024);
}

setTimeout(removeBlur, 1024); // i like powers of two they make me feel cool
