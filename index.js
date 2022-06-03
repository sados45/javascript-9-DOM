//_____________DOM  (DOCUMENT OBJECT MODEL) HTML KODLARINA MÜDAHALE EDILIR DOM ILE___



//getElementById konusu:

let fName= document.getElementById("first-name")

let lastName=document.getElementById("lastName")
// console.log(fName)
// console.log(lastName)

//biz id yi bir elemente verebiliriz. ama class i cok daha fazla kullaniriz. buradan da yakalayabiliriz. yaptigimiz isi denetmeleme esnasinda.

//getElementsByClassName:

let formControl = document.getElementsByClassName("form-control")[0]
//console.log(formControl)//burada HTML colection icindeki tüm kullanilan input form kontrollerinini sundu. 

//getElementById hizli calisir. buldugu anda sonucu önümüze sunar. getElementByClassName ise daha agir calisiyor. 

//getElementByTagName:

let input = document.getElementsByTagName("input")
//console.log(input)//bu usekilde tüm inputlarin toplamini nerede ne var consola döker. eger sona [] köseli paranteze sayi belirtirsek ilgili inputa bizi götürür. 

// querySelector : burada All icindeyken id, Tagname yada classname de kullanabiliyoruz. querySelectorAll önemli.

let firstName= document.querySelector("#first-name")
//console.log(firstName)
let div = document.querySelector("div")
//console.log(div)
let fControl = document.querySelector(".form-control")
//console.log(fControl)

let fControlAll = document.querySelectorAll(".form-control")
//console.log(fControlAll)// burada tüm form-controllerin hepsini görmek istersek, All kelimesini kullanmaliyiz. 
//console.log(fControlAll[1])// burada sadece tüm form-controllerinin icinden 1. siradakini secmis olduk.


//HTML elementlere su sekilde müdahale ediyoruz. 

//firstName.value="Sedat"

//yada

document.querySelector("#first-name").value= "Ziya" //bu sekilde de yazabiliriz. 

let formItems= document.querySelectorAll(".form-items").innerHTML
console.log(formItems)

let first3 = document.querySelector("#first-three")
console.log(first3)






/*innerText diye yazdigimizda icerigi text innerHTML yazildiginda ise icindeki tüm Tagleri aliyor.*/

// AppendChild: ekleme demek. mesela yeni bir div ekelemek istiyorsunuz ama element olusturulmali. 

let node= document.createElement("div")

let text = document.createTextNode("Sedat")

node.appendChild(text)

first3.appendChild(node)// son yazdiklarimizla html sayfasina müdahale edebiliyoruz. element olusturduk  ve element olarak Sedat i yazdik. yazdirabildik. burada div actik ve texti yerlestirdik. biz yapilan html calismasinin icine birseyler eklemek istedigimizde append etmeliyiz. bunu da silerek degil ekleyerek yapiyoruz. appendChild  ile. 