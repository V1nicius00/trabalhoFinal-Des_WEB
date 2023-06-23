document.addEventListener("DOMContentLoaded", function() {

const mode = document.getElementById('mode-icon');

mode.addEventListener('click', () => {

    const header = document.getElementById('home-header');
    const bodyband = document.getElementById('body-band');

    //contact
    const bodycontact = document.getElementById('body-contact');
    const headercontact = document.getElementById('header-contact');
    const maincontact = document.getElementById('main-container');
    const aside = document.getElementById('aside');
    const footer = document.getElementById('footer');

    if(mode.classList.contains('fa-sun')){
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');

        header.classList.add('light');
        bodyband.classList.add('light');
        // contato

        bodycontact.classList.add('light');
        headercontact.classList.add('light');
        maincontact.classList.add('light');
        aside.classList.add('light');
        footer.classList.add('light');

        return;
    }

    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');

    header.classList.remove('light');
    bodyband.classList.remove('light');

    bodycontact.classList.remove('light');
    headercontact.classList.remove('light');
    maincontact.classList.remove('light');
    aside.classList.remove('light');
    footer.classList.remove('light');

});



// const ls = document.getElementById('img-ls');
// const lz = document.getElementById('img-lz');
// const metallica = document.getElementById('img-metallica');
// const doors = document.getElementById('img-doors');

// var clickACDC = 0;
// var clickLS = 0;
// var clickLZ = 0;
// var clickMetallica = 0;
// var clickDoors = 0;

// function countACDC() {
//     clickACDC++;
    
//     if (clickACDC === 10) {
//       alert('✝ RIP ✝ \n Bon Scott & Malcolm Young ');
//       clickACDC = 0;
//     }
//   }
  
  
//   function countLS() {
//       clickLS++;
      
//       if (clickLS === 3) {
//           alert('Você deu exatamente 3 cliques!');
//           clickLS = 0;
//         }
//     }
    
    
    
//     function countLZ() {
//         clickLZ++;
        
//         if (clickLZ === 3) {
//             alert('Você deu exatamente 3 cliques!');
//             clickLZ = 0;
//         }
//     }
    
    
    
//     function countMetallica() {
//         clickMetallica++;
        
//         if (clickMetallica === 3) {
//             alert('Você deu exatamente 3 cliques!');
//             clickMetallica = 0;
//         }
//     }
    
//     function countDoors() {
//         clickDoors++;
        
//         if (clickDoors === 3) {
//             alert('Você deu exatamente 3 cliques!');
//             clickDoors = 0;
//         }
//     }
    
// ls.addEventListener('click', countLS);
// acdc.addEventListener('click', countACDC);
// lz.addEventListener('click', countLZ);
// metallica.addEventListener('click', countMetallica);
// doors.addEventListener('click', countDoors);
});

document.addEventListener("DOMContentLoaded", function() {
    const acdc = document.getElementById('img-acdc');
    var clickACDC = 0;

    function countACDC() {
        clickACDC++;
        
        if (clickACDC === 10) {
          alert('✝ RIP ✝ \nBon Scott\nMalcolm Young ');
          clickACDC = 0;
        }
      }

    acdc.addEventListener('click', countACDC);

});

document.addEventListener("DOMContentLoaded", function() {
    const ls = document.getElementById('img-ls');
    var clickLS = 0;

        
        function countLS() {
            clickLS++;
            
            if (clickLS === 10) {
                alert('✝ RIP ✝ \nRonnie Van Zant\nSteve Gaines\nCassie Gaines\nAllen Collins\nGary Rossington\nLeon Wilkenson');
                clickLS = 0;
              }
          }

    ls.addEventListener('click', countLS);

});

document.addEventListener("DOMContentLoaded", function() {
    const lz = document.getElementById('img-lz');
    var clickLZ = 0;

        
        function countLZ() {
            clickLZ++;
            
            if (clickLZ === 10) {
                alert('✝ RIP ✝ \nJohn Bonham');
                clickLZ = 0;
              }
          }

    lz.addEventListener('click', countLZ);

});

document.addEventListener("DOMContentLoaded", function() {
    const metallica = document.getElementById('img-metallica');
    var clickMetallica = 0;

        
        function countMetallica() {
            clickMetallica++;
            
            if (clickMetallica === 10) {
                alert('✝ RIP ✝ \nCliff Burton');
                clickMetallica = 0;
              }
          }

    metallica.addEventListener('click', countMetallica);

});

document.addEventListener("DOMContentLoaded", function() {
    const doors = document.getElementById('img-doors');
    var clickDoors = 0;

        
        function countDoors() {
            clickDoors++;
            
            if (clickDoors === 10) {
                alert('✝ RIP ✝ \nJim Morrison\nRay Manzarek');
                clickDoors = 0;
              }
          }

    doors.addEventListener('click', countDoors);

});
