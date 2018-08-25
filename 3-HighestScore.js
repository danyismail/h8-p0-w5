function highestScore (students) {
  var obj = {}
  
  for (let i = 0; i < students.length; i++) {
    obj[students[i].class] = undefined
    
  }
  var compareCLass =  Object.keys(obj)
  

  var nampungClass = []
  
  for (let i = 0; i < compareCLass.length; i++) {
    nampungClass.push([])
    var banding = 0
    for (let j = 0; j < students.length; j++) {
      if (compareCLass[i] === students[j].class) {
        if (banding < students[j].score ) {
          banding = students[j].score
          obj[students[j].class] = {
            name : students[j].name,
            score : students[j].score
          }
        }
        
      }
      
    }
  }//return nampungClass

  var isiObjek = []
  for (let i = 0; i < nampungClass.length; i++) {
   for (let j = 0; j < nampungClass[i].length; j++) {
     var hasil = {}
     hasil.name = nampungClass[i][0]
     hasil.score = nampungClass[i][1]
     }
    isiObjek.push(hasil)
    
  }

  return obj
  
  
  




  
  
  
  
}//end of funcction
  

// TEST CASE 
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


// console.log(highestScore([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


// console.log(highestScore([])); //{}