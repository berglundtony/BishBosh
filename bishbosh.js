
 // Get input elements
 const btn = document.querySelector('#btn'),
       maxnum = document.querySelector('#maxnumber'),
       fnumber = document.querySelector('#firstnumber'),
       snumber = document.querySelector('#secondnumber');
     
 // get output elements
 const error = document.querySelector('#error-msg'),
       result =  document.querySelector('#result'); 
       if (btn){
      document.addEventListener('DOMContentLoaded', function () {
        btn.addEventListener('click', Calculate);
        btn.onclick = function(){
            return false;
        }
      });
    }
        
          
    function Calculate(){
        error.style.visibility = 'hidden';
        const maxnumber = maxnum.value.trim();
        const fnum = fnumber.value.trim();
        const snum = snumber.value.trim();
        if (maxnumber.length == 0 || fnum.length == 0 || snum.length == 0) {
            error.textContent = 'Ange värden i alla fält.';
            error.style.visibility = 'visible';
           return;
        }
        const maxsize = parseInt(maxnumber);
        const firstnum = parseInt(fnum);
        const secondnum = parseInt(snum);
        if (isNaN(maxsize) || isNaN(firstnum) || isNaN(secondnum)) {
           error.textContent = 'Endast numeriska värden är tillåtna.';
           error.style.visibility = 'visible';
           return;
        }
        if (maxsize < 1 || firstnum < 0 || secondnum < 0) {
            error.textContent = 'Ange inte negativa tal.';
            error.style.visibility = 'visible';
           return;
        }
        let output = '';
        for (var i = 1; i <= maxnum.value; i++) {
            if(i % fnumber.value == 0 && i % snumber.value == 0){
                output +=  "Bish-Bosh, ";
                console.log(output);
            }else if(i % fnumber.value == 0){
                output +=  "Bish, ";
            }else if(i % snumber.value == 0){
                output +=  "Bosh, ";
          
            }else{
                output +=  i + ", ";
            }
             // remove last characters (', ') and write output string 
            const outputAdjusted = output.slice(0, -2);
            result.textContent = outputAdjusted;
          }
    };
 
   


