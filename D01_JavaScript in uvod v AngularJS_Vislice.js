        var besede = ['lestev','morje','drevo','avtomobil','televizija','stopnice','stolpnica','malahaja','tatamata'];
        var beseda;
        var IzbranaBeseda;
        var str = '_';
        var ugani;
        var i = 0;
        
        function IzberiBesedo() {
            var stevilo = Math.round(Math.random()*(besede.length-1)) + 1;
                return besede[stevilo-1].toUpperCase();   
            };
        
        function ZamenjajZnake() {
            for(var j=0; j < beseda.length; j++) {
                if (beseda.substr(j,1) == ugani) {
                    IzbranaBeseda = IzbranaBeseda.substr(0,j) + ugani + IzbranaBeseda.substr(j+1);
                }           
            };
        }
      
        beseda = IzberiBesedo();
        alert(beseda);
        IzbranaBeseda = beseda.substr(0,1) + str.repeat(beseda.length-2) + beseda.substr(beseda.length-1,1);
        ugani = beseda.substr(0,1);
        ZamenjajZnake();
        ugani = beseda.substr(beseda.length-1,1);
        ZamenjajZnake();
      
        while (IzbranaBeseda != beseda && i <= 10) {
            ugani = prompt('Ugani crko! ' + IzbranaBeseda);
            ugani = ugani.toUpperCase();
            if (beseda.indexOf(ugani) > -1) {
                
                    ZamenjajZnake();

               // alert(IzbranaBeseda);
            }
            else {
                alert('Ni prava crka.');
               i++;
            }
        }
        
        if (IzbranaBeseda == beseda) {
            alert('Bravo!\nUganil si. \nIskana beseda je bila ' + beseda);
        }
        else {
            alert('Nisi uganil! \nIskana beseda je bila ' + beseda);
        }
