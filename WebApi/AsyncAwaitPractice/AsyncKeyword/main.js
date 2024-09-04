async function myDisplay () {

    let myPromise = new Promise((resolve, reject) => {
        resolve('I love you!')
    });

    document.getElementById('display').innerHTML = await myPromise
}

myDisplay();


async function getUrl(url) {
    try {
        const response = await fetch(url)
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

getUrl('facebook.com')