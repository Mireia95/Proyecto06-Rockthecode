//creo datos para la semilla
const libros = [
  {
    title: 'El nombre del viento',
    price: 25,
    year: 2007,
    img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202402/02/00106520549764____57__640x640.jpg',
    avaiable: true,
    categories: ['fantasy', 'novel']
  },
  {
    title: 'Orgullo y prejuicio',
    price: 10,
    year: 1813,
    img: 'https://m.media-amazon.com/images/I/61wAZk6G8mL._AC_UF894,1000_QL80_.jpg',
    avaiable: false,
    categories: ['romance']
  },
  {
    title: '1984',
    price: 13,
    year: 1949,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhmShFUDp8WI71z1RSVfz-xhqoiBEetPAEQ&s',
    avaiable: false,
    categories: ['science fiction']
  },
  {
    title: 'El principito',
    price: 8,
    year: 1943,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/El_principito.jpg/640px-El_principito.jpg',
    avaiable: true,
    categories: ['novel']
  },
  {
    title: 'El gran Gatsby',
    price: 11,
    year: 1925,
    img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/db/4f/db4f7c8407da4f233726273715c21685.jpg',
    avaiable: true,
    categories: ['romance']
  },
  {
    title: 'El temor de un hombre sabio',
    price: 23,
    year: 2011,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMtkf7M6QjJrDgJ3Np3aR-UwDijGWrQQ34w&s',
    avaiable: false,
    categories: ['fantasy', 'novel']
  },
  {
    title: 'La sombra del viento',
    price: 14,
    year: 2001,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkDdY_1W3XpygS1ouzjTmBci-7m8ErqBrtg&s',
    avaiable: true,
    categories: ['romance', 'thriller', 'mystery', 'drama']
  },
  {
    title: 'El juego del ángel',
    price: 9,
    year: 2008,
    img: 'https://imagessl0.casadellibro.com/a/l/s5/80/9788408081180.webp',
    avaiable: true,
    categories: ['romance', 'thriller', 'mystery', 'drama']
  },
  {
    title: 'El prisionero del cielo',
    price: 9,
    year: 2011,
    img: 'https://m.media-amazon.com/images/I/71vPL9236wL._AC_UF894,1000_QL80_.jpg',
    avaiable: false,
    categories: ['romance', 'thriller', 'mystery', 'drama']
  }
];

//exporto el seed
module.exports = libros;
