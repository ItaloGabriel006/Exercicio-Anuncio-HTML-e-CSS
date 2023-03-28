const url = "https://www.instagram.com/italodev_/"
const btn = document.querySelector('#btnShare')

function handleSharedButton(url) {
    const win = window.open(url, '_Blank')
    win.focus()
}

btn.addEventListener('click', () => {
    handleSharedButton(url)
})

