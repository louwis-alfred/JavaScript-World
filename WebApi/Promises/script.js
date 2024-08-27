const fakerequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}

fakerequest('Dog')
.then(() => {
    console.log('Done')
})