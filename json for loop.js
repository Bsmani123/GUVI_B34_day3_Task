



// for in loop
// -----------

var resume ={
    "name": "Balasubramanian",
    "Dob": "04/03/1986",
    "Father name": "Thirugnanam",
    "Mother toungue": "Tamil",
    "Language known": "Tamil,English,kannadam",
    "Education": [
        {
            "Diploma": "Information Technology",
            "college": "RVS polythechnic",
            "Year of passing": "2011",
            "percentage": "68%"
        },
        {
            "Degree": "BE computer science",
            "college": "Rathinam Technical campus",
            "Year of passing": "2016",
            "percentage": "70%"
        }
    ],
    "phone": [
        9108059804,
        7708350993
    ],
    "Marital status": "Married",
    "Address": {
        "Village": "Veeranatham",
        "Post": "Thirunaraiyur",
        "Distict": "cuddalore dist"
    },
    "Experience":[
        {
        "Role": "Customer care excutive",
        "Company": "JustDial",
        "Location": "Coimbatore",
        "Year": "2011/04/15 to 2013/02/30",
       
    },
    {
        "Role": "Business Development Executive",
        "Company": "Red Apple cunsultancy Private limited",
        "Location": "Bangalore",
        "Year": "2017/07/16 to 2021/02/30",
        
    }]
}
for (var i in resume){
    console.log(i, resume[i]);
}


// output:-

// VM380:48 name Balasubramanian
// VM380:48 Dob 04/03/1986
// VM380:48 Father name Thirugnanam
// VM380:48 Mother toungue Tamil
// VM380:48 Language known Tamil,English,kannadam
// VM380:48 Education (2) [{…}, {…}]0: {Diploma: 'Information Technology', college: 'RVS polythechnic', Year of passing: '2011', percentage: '68%'}Diploma: "Information Technology"Year of passing: "2011"college: "RVS polythechnic"percentage: "68%"[[Prototype]]: Object1: {Degree: 'BE computer science', college: 'Rathinam Technical campus', Year of passing: '2016', percentage: '70%'}Degree: "BE computer science"Year of passing: "2016"college: "Rathinam Technical campus"percentage: "70%"[[Prototype]]: Objectlength: 2[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// VM380:48 phone (2) [9108059804, 7708350993]0: 91080598041: 7708350993length: 2[[Prototype]]: Array(0)
// VM380:48 Marital status Married
// VM380:48 Address {Village: 'Veeranatham', Post: 'Thirunaraiyur', Distict: 'cuddalore dist'}Distict: "cuddalore dist"Post: "Thirunaraiyur"Village: "Veeranatham"[[Prototype]]: Object
// VM380:48 Experience (2) [{…}, {…}]0: {Role: 'Customer care excutive', Company: 'JustDial', Location: 'Coimbatore', Year: '2011/04/15 to 2013/02/30'}Company: "JustDial"Location: "Coimbatore"Role: "Customer care excutive"Year: "2011/04/15 to 2013/02/30"[[Prototype]]: Object1: {Role: 'Business Development Executive', Company: 'Red Apple cunsultancy Private limited', Location: 'Bangalore', Year: '2017/07/16 to 2021/02/30'}Company: "Red Apple cunsultancy Private limited"Location: "Bangalore"Role: "Business Development Executive"Year: "2017/07/16 to 2021/02/30"[[Prototype]]: Objectlength: 2[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// -----------------------------------------------------------------
 