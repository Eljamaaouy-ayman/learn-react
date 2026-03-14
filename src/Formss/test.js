// #!/usr/bin/env node
let pr = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 3)
        resolve("succeed")
    else
        reject("failed")
})


pr.then(result => console.log(result))
.catch(result => console.log(result))