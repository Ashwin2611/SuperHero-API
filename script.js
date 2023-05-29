//access Token-111739391835082
// // reference-https://superheroapi.com/api.php/access-token/character-id
// const image=document.getElementById('random')
// const change=document.getElementById('change')
// const superhero=()=>{
//     fetch('https://superheroapi.com/api.php/111739391835082/254')
//     .then(response=>response.json())
//     .then(json=>{
//     console.log(json.image)
//     document.querySelector('body').innerHTML=`<img src='${json.image.url}' height=200 width=200/>`
//     })
// }
// change.onclick=()=>superhero()
// superhero()

const btn=document.getElementById('change')
const searchbtn=document.getElementById('search')
const img=document.getElementById('random')
const name=document.getElementById('name')
const stat=document.getElementById('stats')
const heroId=document.getElementById('superNo')
const token=111739391835082
const urli=`https://superheroapi.com/api.php/${token}`
const superH=(id)=>{
  fetch(`${urli}/search/${id}`)
  .then(response=>response.json())
  .then(json=>{
    console.log(json)
    console.log(json.results[0].image.url)
    img.innerHTML=`<img src='${json.results[0].image.url}' height=300 width=300/>`
    console.log(json)
    name.innerText=`${json.results[0].name}`
    stat.innerText=""
    for(const key in json.results[0].powerstats){
      let value = json.results[0].powerstats[key]
      console.log(value)
      console.log(json.result)
      stat.innerText+=`${key.toUpperCase()}: ${value}\n`
    }
    })
}
const hero=()=>{
  let random=Math.ceil(Math.random()*731)
  fetch(`${urli}/${random}`)
  .then(response=>response.json())
  .then(json=>{
    console.log(json)
    // console.log(json.powerstats)
    console.log(json.image.url)
    img.innerHTML=`<img src='${json.image.url}' height=300 wodth=300/>`
    // for(const stats in json.powerstats){
      let s=json.powerstats
      console.log(s)
      let value=JSON.stringify(s)
      name.innerText=`${json.name}\n`
      stat.innerText= " "
      for(const a in s){
        let v=json.powerstats[a]
        stat.innerText+=`${a.toUpperCase()}: ${v} \n`
      }
    // }
    
    
    
  })
}

btn.onclick=()=>hero()
searchbtn.onclick=()=>superH(heroId.value)



