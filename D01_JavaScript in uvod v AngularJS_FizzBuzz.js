    var izpis = [];
    var stevilo = prompt('Vpisi stevilo:');
    if (stevilo < 1) {
        alert('Premajhno stevilo');
    }
    else {
        for(var i = 1;i <= stevilo;i++) {
            if (i%15==0) {
                izpis.push('fizzbuzz');
            }
            else if (i%5==0) {
                izpis.push('buzz');
            }
            else if (i%3==0) {
                izpis.push('fizz');
            }
            else {
                izpis.push(i);
            }
        }

    alert(izpis);
    }
