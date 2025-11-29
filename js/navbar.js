
export function navbar() {
    const desktop_nav = document.getElementById("desktop-menu")
    const mobile_nav = document.getElementById("mobile-menu")
    const open_nav = document.getElementById("open-nav")
    const close_nav = document.getElementById("close-nav")

    open_nav.addEventListener("click", () => {
        desktop_nav.classList.add("hidden")
        mobile_nav.classList.add("active")
    })

    close_nav.addEventListener("click", () => {
        desktop_nav.classList.remove("hidden")
        mobile_nav.classList.remove("active")
    })
}

