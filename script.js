
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
        console.log(element)
        const div = document.createElement('div');
        div.innerHTML = `
            <button
                class="btn hover:outline hover:outline-green-800 hover:bg-green-100 hover:rounded-full font-extrabold text-base py-8 px-10">
                <img class="w-2/6" src="${element.category_icon}" alt="" srcset="">
                ${element.category}
            </button>
        
        `
        catContainer.appendChild(div)

    });
}





loadCategories()