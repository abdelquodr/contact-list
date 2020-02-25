const peopleImage= [
    'https://images.unsplash.com/photo-1527118643732-4a1189706a82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
    'https://images.unsplash.com/photo-1550246141-363ccad4018d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    'https://images.unsplash.com/photo-1542368826-9a7df1d9fd0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
    'https://images.unsplash.com/photo-1522872641108-bcb51e2aff69?ixlib=rb-1.2.1&auto=format&fit=crop&w=409&q=80',
    'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
    'https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3658708/pexels-photo-3658708.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/944761/pexels-photo-944761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1698937/pexels-photo-1698937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1545587/pexels-photo-1545587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/3284031/pexels-photo-3284031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3189280/pexels-photo-3189280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1820574/pexels-photo-1820574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1820574/pexels-photo-1820574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
    'https://images.pexels.com/photos/2887874/pexels-photo-2887874.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1079791/pexels-photo-1079791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3219766/pexels-photo-3219766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3048715/pexels-photo-3048715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3061814/pexels-photo-3061814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2811088/pexels-photo-2811088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2689401/pexels-photo-2689401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];




// variable UI
let collection = document.querySelector('.collection');
let collectionItem =  document.querySelectorAll('.collection-item');
let search = document.querySelector('.search-txt');
let addName =  document.getElementById('add-name');
console.log(addName);

// get random images
const getRandomImage = (picked)  => {
    // console.log(weatherPics.chosen);
    let selected = picked[Math.floor(Math.random() * 30)];
    let personImage =  document.querySelector('.person-image');
     personImage.src= selected ;
    console.log(selected);
    return selected
}

getRandomImage(peopleImage)


// add list element to the name list
const addListElement = (enteredInput) => {
    // create li element
    let li = document.createElement('li');
    li.className = 'collection-item m-3';
    
    // create a element
    let a = document.createElement('a');
    a.href = '#';
    let img = document.createElement('img')
    img.src = getRandomImage(peopleImage);
    img.className = 'rounded-circle person-image person-image';
    img.width = 50;
    img.height = 50;
    a.appendChild(img);
    li.appendChild(a);

    // create span element
    let span = document.createElement('span');
    let spanTextNode = document.createTextNode(enteredInput);
    span.appendChild(spanTextNode);
    span.className = 'p-3 lead';
    li.appendChild(span)

    // create i element
    let i = document.createElement('i');
    i.className = 'float-right mt-3 fas fa-trash';
    li.appendChild(i)
    

    collection.appendChild(li)
    console.log(li)
}

addListElement('adenike tinubu');


// add input-value to the contact list 
//  search.addEventListener('keyup', (e) => {
//     const userSearch = e.target.value.toLowerCase();

//     // loop through the people in contact
//     collectionItem.forEach((task) => {
//         item = task.getElementsByTagName('span');  
//         console.log(item);
//        if(item[0].innerHTML.toLowerCase().indexOf(userSearch) !== -1) {
        
//         Item[0].style.display = 'block';
//        }else{
//         Item[0].style.display = 'none';
//         }
//     })
// } )    
  




// Add more contact to the list if character is entered and enter key is pressed
if(addName.value !== '' && characterCode == 13){
    console.log(addName.value)
//    addListElement(addName.target.value);
//    addName.className += 'is-valid';
//    addName.value = '';
}else{
    addName.value = '';
}