export function toggleScrollOnBody(action: "lock" | "unlock") {
    const body = document.body
    if (action === "lock") {
        body.dataset.scrollable = "false"
    } else {
        body.removeAttribute("data-scrollable")
    }
}
