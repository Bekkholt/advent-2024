fetch('1.txt').then(response => {
    if (!response.ok) {
        throw new Error (`ERROR`);
    } 
    return response.text();
}).then(data => {
    const list1 = [];
    const list2 = [];
    const dataLines = data.split('\n');
    console.log(dataLines.length);
    for (const line of dataLines) {
        const numbers = line.split('   ');
        console.log(numbers.length);
        list1.push(Number.parseInt(numbers[0]));
        list2.push(Number.parseInt(numbers[1]));
    }
    console.log(list1);
    console.log(list2);




}).catch(error =>
    console.error('ERROR 2')
);