function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //Buat Objek Rute 
    var obj2 = {}
    for (let i = 0; i < rute.length; i++) {
        obj2[rute[i]] = i + 1
    }
    
    //Buat Objek untuk Output yang diminta
    var tmp = []
    for (let i = 0; i < arrPenumpang.length; i++) {
        for (let j = 0; j < arrPenumpang[i].length; j++) {
            var obj = {
                
            }
            obj.penumpang = arrPenumpang[i][0]
            obj.naikDari = arrPenumpang[i][1]
            obj.tujuan = arrPenumpang[i][2]
            //untuk menghitung tarif menggunakan bantuan objek rute 
            obj.bayar = (obj2[arrPenumpang[i][2]] - obj2[arrPenumpang[i][1]]) * 2000
        }tmp.push(obj)
    }
    return tmp
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]