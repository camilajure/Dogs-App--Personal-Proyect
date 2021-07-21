function dog(b){
   const id= b.id || 'Id not found'
    const name= b.name || 'Name not found'
    const image=
        b.image.url ||
        'https://scontent.fsfn4-1.fna.fbcdn.net/v/t1.6435-9/213878167_4203688373058500_520078069889842109_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=YgbPo73GeloAX_8B1cH&_nc_ht=scontent.fsfn4-1.fna&oh=bf5a950858fd6f35db91644a51a2cfd4&oe=60E9A82A'
    
        const weight= b.weight.metric || 'Weight not found'
        const  height= b.height.metric || 'Height not found'
        const  life_span= b.life_span || 'Life span not found'


    let temperaments=[]   
    if(b.temperament){
        let temp=b.temperament
        let temps=temp.split(',');
        temps.forEach(t=>temperaments.push(t.trim()))//le quito espacio inicial y final
    }else{  
        if(b.temperaments)
        b.temperaments.forEach(t=>temperaments.push(t.id))
    }
    return { id,name,image,weight,height,life_span,temperaments}
}
module.exports={
dog
}