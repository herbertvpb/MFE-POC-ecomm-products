import faker from 'faker';

const mount = (element) => {
  let products = '';

  for (let index = 0; index < 6; index++) {
    const name = faker.commerce.product();
    products += `<div>${name}</div>`
  }
  
  element.innerHTML = products;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINETELY has an element with an id of 'dev-product'
// We want to immediately render our app into that element

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#dev-products');

  // Assuming our container doesnt have an element with id 'dev-products'
  if (element) {
    // We are probably running in isolation
    mount(element);
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of dev-product' exists
// WE DO NOT WANT try to immediately render the app

export { mount }