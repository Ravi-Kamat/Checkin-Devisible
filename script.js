

let num = [8, 9, 6, 15, 10, 18, 30, 45, 40, 51, 21]

function devisible(n) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0) {
            continue
        }
        if (n[i] % 3 === 0) {

            console.log(n[i]);
        }
    }

}
devisible(num)