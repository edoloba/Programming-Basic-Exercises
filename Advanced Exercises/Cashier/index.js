function theCashier (total, paid) {
    let howManyNotes;
    let change = parseFloat((paid - total).toFixed(2));
    console.log(`Price: €${total}`);
    console.log(`Cash: €${paid}`);
    console.log(`Change: €${change}`)
    let currency = [
        ['one cent coin', .01],
        ['two cents coin', .02],
        ['five cents coin', .05],
        ['ten cents coin', .10],
        ['twenty cents coin', .20],
        ['fifthy cents coin', .50],
        ['one euro coin', 1],
        ['two euros coin', 2],
        ['five euros notes', 5],
        ['ten euros notes', 10],
        ['tenty euros notes', 20],
        ['fifthy euro notes', 50],
        ['hundred euros notes', 100],
        ['two hundred euros notes', 200],
        ['five hundred euros notes', 500]
    ]
    currency.reverse();
    for(let i = 0; i < currency.length; i++){
        if(change >= currency[i][1]) {
            howManyNotes = Math.floor(change/currency[i][1]);
            change = parseFloat((change % currency[i][1]).toFixed(2));
            console.log(`${howManyNotes} x ${currency[i][1]} // ${howManyNotes} x ${currency[i][0]}`);
        } 
    }
    if(paid < total) {
        console.log(`Cash not enough to process the purchase, €${total - paid} still needed.`)
    }
}
theCashier(3.75, 50);
console.log('___________');
theCashier(4.50, 20.00);
console.log('___________');
theCashier(107.00, 88.0);
console.log('___________');
theCashier(15.00, 10.00);
console.log('___________');
theCashier(4.00, 2.75);