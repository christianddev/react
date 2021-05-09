// const arr = [1,2,3,4];
// let arr2 = [...arr, 5];


// arr2.map((a) => a +1);
// console.log('arr2', arr2)

// const getUser = () => {
//     return {
//         uid: 123123,
//         username: 'lola'
//     }
// }
// const getUser2 = () => (
//     {
//         uid: 123123,
//         username: 'lola'
//     })

// console.log( getUser())
// console.log( getUser2())

// const getUserActive = ( username) => ({
//     uid: 1111,
//     username
// });

// console.log('getUserActive', getUserActive('loal'))


// // Destructaración 

// const person = {
//     username: 'lola',
//     age:  20,
//     key: 'pan'
// }
// const desperson= (person) => {
//     const { username, age, key, hash = 'maco'} = person;
//     console.log(username, age, key, hash);

//     return {
//         keyUsername: key,
//         fullAge: age,
//         lanlng: {
//             lat: 1.111,
//             lng: -1.222
//         }
//     }
// }
// const secretperson = desperson(person);
// const { keyUsername, fullAge, lanlng: {lat, lng} } = secretperson;
// console.log('secretperson', keyUsername, fullAge, lat, lng);


// Destructuración de arreglos

// const persons = ['A', 'B', 'C'];
// const [ ,p2 ] = persons;

// console.log('p2', p2)

// const returnArray = () => ([ 'abc', 123])

// const [letters, number ] = returnArray();
// console.log('letters, number', letters, number)

// const useStato = (value) => {
//     return [ value, () => {console.log('Hola mundo')}];
// }
// const [nombre, setNombre] = useStato('lolita');
// console.log(nombre)
// setNombre();


import heroes, {owners} from './data/heroes';

const getHeriById = (id) => heroes.find( (h) => h.id === id);
const getHeriByowner = (owner) => heroes.filter( (h) => h.owner === owner);

// console.log('owners', owners)
// console.log('heroes', getHeriByowner('DC') )

// Promises

// const promesa = new Promise((resolve, reject) => {
    
//     setTimeout( () => {
//         const hero = getHeriById(1);
//         // if 
//         reject(hero);

//     }, 2000)
// } );


// promesa.then((hero) => {
//     console.log('promesa.then', hero)
// }).catch( err => console.warn(err))

// const getHeriByIdAsync = (id) => {
//    return new Promise((resolve, reject) => {
        
//         setTimeout( () => {
//             const hero = getHeriById(id);
//             if (hero) {
//                 resolve(hero);
//             }
//             reject('Not found')
    
//         }, 2000)
//     } );
// }

// getHeriByIdAsync(1)
//     .then(console.log)
//     .catch(console.error);



// const apiKey = 'esni5sGWXdIrldNyN0GvLFTa3AJr26sS';
// const request= fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// request
//     .then((res) => res.json())
//     .then(({data}) => {
//         const { url } = data.images.original;
//         console.log('url', url)
        
//         const img = document.createElement('img');
//         img.src =url;
//         document.body.append(img);
//     })
//     .catch(console.warn)


    // const getImage = async() => {
    //     try {
    //         const apiKey = 'esni5sGWXdIrldNyN0GvLFTa3AJr26sS';
    //         const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    //         const resp = await request.json();
    //         const { url } = resp.data.images.original;
            
    //         const img = document.createElement('img');
    //         img.src =url;
    //         document.body.append(img);
            
    //     } catch (error) {
    //         console.log('error', error)
    //     }
    // }

    // getImage();


