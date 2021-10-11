const body = document.body
body.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        try {
            const button = document.querySelector('.ytp-ad-skip-button-text')
            button?.click()
        } catch (e) { console.log(e) }
    }
})