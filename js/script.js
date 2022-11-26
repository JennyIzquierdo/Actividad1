const restaurants = [
    {
        name:'Pacifico Mar', 
        description: 'Deliciosa comida de mar', 
        addres: 'Av 85 Nro 45 - 85', 
        city: 'Barranquilla',
        image : './media/Restaurant_0.jpg'
    },
    {
        name:'Italiano 65',
        description: 'Deliciosa comida italiana', 
        addres: 'Av. 45 Nro. 1 - 85', 
        city: 'Medellín',
        image : './media/Restaurant_1.jpg'
    },
    {
        name:'Fritos y Más', 
        description: 'Comida Rápida', 
        addres: 'Calle 45', 
        city: 'Medellín',
        image : './media/Restaurant_3.jpg'
    },
    {
        name:'Pollo Frito', 
        description: 'Lo mejor del pollo frito', 
        addres: 'Cr 32 # 56 - 89', 
        city: 'Bogotá',
        image : './media/Restaurant_4.jpg'
    }
    
];


const polaroids = document.querySelector(".item");
for (var i = 0; i < restaurants.length; i++) {
    

    let pol = document.createElement('div');
    pol.className = 'polaroid';
    
    let imgpol = document.createElement('img');
    imgpol.src = restaurants[i]['image'];

   let namepol = document.createElement('div');
   namepol.className = 'caption';
   namepol.innerHTML = restaurants[i]['name'];

   let descpol = document.createElement('div');
   descpol.className = 'caption';
   descpol.innerHTML = restaurants[i]['description'];

   let addpol = document.createElement('div');
   addpol.className = 'caption';
   addpol.innerHTML = restaurants[i]['addres'];

   let citypol = document.createElement('div');
   citypol.className = 'caption';
   citypol.innerHTML = restaurants[i]['city'];
    
    // Add the element to the parent

    pol.appendChild(imgpol);
    pol.appendChild(namepol);
    pol.appendChild(descpol);	
    pol.appendChild(addpol);
    pol.appendChild(citypol);
    polaroids.appendChild(pol);

}


console.log(polaroids);
