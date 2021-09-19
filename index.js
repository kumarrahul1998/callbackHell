function create(count){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
      resolve(--count)
    ,1000)   
    })
  }
  var timer = document.getElementById('timer');
  create(11).then(count=>{
    timer.innerHTML= count;
    return create(count)
  }).then(count=>{
    timer.innerHTML= count;
    return create(count)
  }).then(count=>{
    timer.innerHTML= count;
    return create(count)
  }).then(count=>{
    timer.innerHTML= count;
    return create(count)
  }).then(count=>{
    timer.innerHTML= count;
    return create(count)
  }).then(count=>{
    timer.innerHTML= count;
    return create(count)
  }).then(count=>{
    timer.innerHTML= count;
    return create(count)
  }).then(count=>{
    timer.innerHTML= count;
    return create(count)
  }).then(count=>{
    timer.innerHTML= count;
    return create(count)
  }).then(count=>{
    timer.innerHTML= count;
    return create(count)
  }).then(count=>{
    timer.innerHTML="Happy New Year!!";
  })


  fetch("https://restcountries.eu/rest/v2/all").then(res=>res.json()).then(res=>res.filter(i=>i.population>20_000_00_0_0).map(i=>i.name)).then(res=>{
  console.log(res)
})