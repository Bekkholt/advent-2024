fetch('1.txt').then(response => {
    if (!response.ok) {
        throw new Error (`ERROR`);
    } 
    return response.text();
}).then(data => {
    const list1 = [];
    const list2 = [];
    const dataLines = data.split('\n');
    for (const line of dataLines) {
        const numbers = line.split('   ');
        list1.push(Number.parseInt(numbers[0]));
        list2.push(Number.parseInt(numbers[1]));
    }

    list1.sort();
    list2.sort();


    let totalDistance = 0;


    for (let index = 0; index < dataLines.length; index++) {
        const num1 = list1[index];
        const num2 = list2[index];
        const distance = Math.abs(num2 - num1);

        totalDistance += distance;
    }

    console.log(totalDistance);
    //2086478

}).catch(error =>
    console.error('ERROR 2')
);