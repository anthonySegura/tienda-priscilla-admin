const api_url = 'localhost:44356/api/';

let myHeaders = new Headers();
myHeaders.append("Access-Control-Allow-Origin", "*");

async function getProducts() {
  let response = await fetch(`${api_url}/product/`, headers);
  let json = await response.json();
  console.log(json);
  return json;
  // return {
  //   products:
  //     [
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }, {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }, {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }, {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }, {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }, {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }, {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }, {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }, {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }, {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }, {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       },
  //       {
  //         name: 'producto genérico',
  //         id: '1',
  //         img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //         price: 12345,
  //         stock: 25,
  //         tax: 0
  //       }
  //     ]
  // }
}

async function getProduct(id) {
  let response = await fetch(`${api_url}/product/${id}`, headers);
  let json = await response.json();
  console.log(json);
  return json;
  // return {
  //   name: 'producto genérico',
  //   id: '1',
  //   img: 'https://pbs.twimg.com/media/D6T-BpiX4AE3k-l.jpg',
  //   price: 12345,
  //   stock: 25,
  //   tax: 0
  // }
}

async function getOrders() {
  return {
    orders: [
      {
        id: 1,
        address: 'por ahí',
        email: 'correo@gmail.com',
        state: 'pendiente'
      },
      {
        id: 1,
        address: 'por ahí',
        email: 'correo@gmail.com',
        state: 'pendiente'
      },
      {
        id: 1,
        address: 'por ahí',
        email: 'correo@gmail.com',
        state: 'pendiente'
      },
      {
        id: 1,
        address: 'por ahí',
        email: 'correo@gmail.com',
        state: 'pendiente'
      },

    ]
  }
}

async function postProduct (product) {
  let response = await fetch(`${api_url}/product`, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: myHeaders,
  });
  let json = await response.json()
  return json;
}

async function editProduct(id, product){
  let response = await fetch(`${api_url}/product/${id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: myHeaders,
  });
  let json = await response.json()
  return json;
}

async function deleteProduct(id) {
  let response = await fetch(`${api_url}/product/${id}`, {
    method: 'DELETE',
    headers: myHeaders,
  });
  let json = await response.json()
  return json;
}

export {
  getProducts,
  getProduct,
  getOrders,
  postProduct,
  editProduct,
  deleteProduct
};