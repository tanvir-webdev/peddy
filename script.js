
// Fetch All Pet Categories

const loadCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await res.json();
    displayCategories(data.categories)
}

// Display pet categories

const displayCategories = (catData) => {
    const catContainer = document.getElementById('categories_container');
    catData.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
            <button
                onclick= "petByCategory('${element.category}')"
                class="btn hover:outline hover:outline-green-800 hover:bg-green-100 hover:rounded-full font-extrabold text-base py-8 px-10">
                <img class="w-2/6" src="${element.category_icon}" alt="" srcset="">
                ${element.category}
            </button>
        
        `
        catContainer.appendChild(div)

    });
}

// Fetch Pets by Category

const petByCategory = async (petName) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${petName}`);
    const data = await response.json();
    displayPets(data.data);
}

// Display pets by category

const displayPets = (pets) => {
    const petsContainer = document.getElementById('pets_container');
    const petsImageContainer = document.getElementById('pet_image_container');
    petsContainer.innerHTML = ""
    petsImageContainer.innerHTML = ""
    pets.forEach(pet =>{
        console.log(pet)
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        div.innerHTML = `
            <div class="card bg-base-100 border border-gray-300">
                <figure class="px-4 pt-4">
                    <img src="${pet.image}"
                        alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title font-extrabold text-xl">${pet.pet_name}</h2>
                    <p class="text-gray-600"><i class="fa-solid fa-toolbox pr-1"></i> Breed : ${pet.breed}</p>
                    <p class="text-gray-600"><i class="fa-solid fa-calendar-days pr-1"></i> Birth : ${pet.date_of_birth}</p>
                    <p class="text-gray-600"><i class="fa-solid fa-venus-mars pr-1"></i> Gender : ${pet.gender}</p>
                    <p class="text-gray-600"><i class="fa-solid fa-dollar-sign pr-1"></i> Price : ${pet.price}$</p>
                    <hr class="border-gray-300 my-3">
                    <div class="card-actions flex justify-around">
                        <button class="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                        </button>
                        <button class="btn btn-outline btn-accent">Adopt</button>
                        <button class="btn btn-outline btn-accent">Details</button>
                    </div>
                </div>
            </div>
        `
        div2.innerHTML = `
            <img class="rounded-lg mb-5" src="${pet.image}" alt="">
        `
        petsContainer.appendChild(div)
        petsImageContainer.appendChild(div2)
    })
}



loadCategories()