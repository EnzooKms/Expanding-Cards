const li = document.getElementsByClassName("li")
const last = []

for (let i = 0; i < li.length; i++) {

    li[i].children[1].classList.add("hidden")

    li[i].addEventListener("click", () => {
        const para = li[i].children[1]

        if (last[0] && last[0] !== li[i]) {
            last[0].classList.add("animUnGo")
            last[0].classList.remove("animGo")
            last[0].children[1].classList.remove("visible")
            last[0].children[1].classList.add("hidden")
        }
        if (last[0] === li[i]) {
            last[0].classList.add("animUnGo")
            last[0].classList.remove("animGo")
            para.classList.remove("visible")
            para.classList.add("hidden")
            last[0] = undefined
        }
        else {
            if (para.classList.contains("hidden")) {
                li[i].classList.remove("animUnGo")
                li[i].classList.add("animGo")
                para.classList.remove("hidden")
                para.classList.add("visible")
            }
            else {
                li[i].classList.remove("animGo")
                li[i].classList.add("animUnGo")
                para.classList.remove("visible")
                para.classList.add("hidden")
            }
            last[0] = li[i]
        }
    })
}