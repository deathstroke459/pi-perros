const axios = require('axios')
const { YOUR_API_KEY } = process.env

const getapiinfo = async ()=>{
    const apiurl= await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    
    const apiinfo=await apiurl.data.map(e=>{
        return{
            id:e.id,

            name:e.name,

            height_Min:e.height.metric.split("-")[0] && e.height.metric.split("-")[0]!=="null"?e.height.metric.split("-")[0]:Math.round(e.height.imperial.split("-")[0]*0.001).toString(),

            heigh_Max:e.height.metric.split("-")[1] && e.height.metric.split("-")[1]!=="null"?e.height.metric.split("-")[1]:Math.round(e.height.imperial.split("-")[1]*0.001).toString(),

            weight_Min:e.weight.metric.split("-")[0] && e.weight.metric.split("-")[0]!=="null"?e.weight.metric.split("-")[0]:Math.round(e.weight.imperial.split("-")[0]*0.001).toString(),

            weight_Max:e.weight.metric.split("-")[1] && e.weight.metric.split("-")[1]!=="null"?e.weight.metric.split("-")[1]:Math.round(e.weight.imperial.split("-")[1]*0.001).toString(),


            life_span: e.life_span !== null ? e.life_span : 'Esperanza de vida no encontrada',

            temperaments: e.temperament ? e.temperament : 'Sin datos de temperamentos',

            image: e.image.url,
        }
    })
    // console.log(apiinfo)
    return apiinfo
}

module.exports={getapiinfo}

/* [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
[ ] Altura
[ ] Peso
[ ] Años de vida
[{"weight":{"imperial":"6 - 13","metric":"3 - 6"},
"height":{"imperial":"9 - 11.5","metric":"23 - 29"},
"id":1,
"name":"Affenpinscher",
"bred_for":"Small rodent hunting, lapdog",
"breed_group":"Toy",
"life_span":"10 - 12 years",
"temperament":"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
"origin":"Germany, France",
"reference_image_id":"BJa4kxc4X",
"image":{"id":"BJa4kxc4X","width":1600,"height":1199,"url":"https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"}} */