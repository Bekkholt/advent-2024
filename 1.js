console.log();

fetch('1.txt').then(response => {
    if (!response.ok) {
        throw new Error (`ERROR`);
    } 
    return response.text();
}).then(data => {
    console.log(data);
}).catch(error =>
    console.error('ERROR 2')
);