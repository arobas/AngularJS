    var ugani;
    var stevilo = Math.round(Math.random()*100);
    //alert(stevilo);
    while(stevilo!=ugani) {
        ugani = prompt('Vpisi stevilo:');
        if (ugani < stevilo) {
            alert('Stevilo je manjse od iskanega');
        }
        else if (ugani > stevilo) {
            alert('Stevilo je vecje od iskanega');
        }
    }
    alert('Uganil si. Iskano stevilo je ' + stevilo + '.');
    
