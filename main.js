const product = [
    {
      id: 0,
      Image: 'white cupcakes.jpeg',
      title: 'sweet cupcakes',
      price: 10,
    },
    {
      id: 1,
      Image: 'white cake.jpeg',
      title: 'sweet cakes',
      price: 100,
    },
    {
      id: 2,
      Image: 'parfait cups.jpeg',
      title: 'sweet cake parfait',
      price: 20,
    },
    {
      id: 3,
      Image: 'sweetet cake.jpeg',
      title: 'sweet round cakes',
      price: 120,
    },
  ];
  
  const categories = product.map((item) => item);
  
  let i = 0;
  document.getElementById('root').innerHTML = categories
    .map((item) => {
      var { Image, title, price } = item;
      return (
        `<div class='box'>
           <div class='img-box'>
             <img class='images' src='./images/${Image}'></img>
           </div>
           <div class='bottom'>
             <p>${title}</p>
             <h2>$ ${price}.00</h2>
             <div>
               <button onclick='decreaseQuantity(${i})'>-</button>
               <span id='quantity_${i}'>0</span>
               <button onclick='increaseQuantity(${i})'>+</button>
             </div>
             <button onclick='addtocart(${i++})'>Add to cart</button>
           </div>
        </div>`
      );
    })
    .join('');
  
  var cart = [];
  function addtocart(a) {
    cart.push({ ...categories[a], quantity: 1 });
    displaycart();
  }
  function likeItem(index, button) {
    console.log(`Liked item at index ${index}`);
    button.classList.toggle('liked'); // Toggle the "liked" class on the button
  }
  
  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }
  function increaseQuantity(index) {
    cart[index].quantity++;
    displaycart();
  }
  function decreaseQuantity(index) {
    if (cart[index].quantity > 0) {
      cart[index].quantity--;
      displaycart();
    }
  }
  function displaycart(a) {
    let j = 0;
    total = 0;
    document.getElementById('count').innerHTML = cart.length;
    document.getElementById('total').innerHTML = '$ ' + 0 + '.00';
    if (cart.length == 0) {
      document.getElementById('cartItem').innerHTML = 'your cart is empty';
    } else {
      document.getElementById('cartItem').innerHTML = cart
        .map((items, index) => {
          var { Image, title, price, quantity } = items;
          total = total + price * quantity;
          document.getElementById('total').innerHTML = '$ ' + total + '.00';
          return (
            `<div class='cart-item'>
              <div class='row-img'>
                <img class='rowimg' src='./images/${Image}'>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size:15px;'>${price}.00</h2>
              <div>
                <button onclick='decreaseCartItemQuantity(${index})'>-</button>
                <span id='cartItemQuantity_${index}'>${quantity}</span>
                <button onclick='increaseCartItemQuantity(${index})'>+</button>
              </div>
              <button onclick='delElement(${j++})'><i class='fa-solid fa-trash'></i></button>
              <button onclick='likeItem(${index}, this)' class='like-btn'><i class='fa-solid fa-heart'></i></button>
            </div>`
          );
        })
        .join('');
    }
  }
  function increaseCartItemQuantity(index) {
    cart[index].quantity++;
    displaycart();
  }
  function decreaseCartItemQuantity(index) {
    if (cart[index].quantity > 0) {
      cart[index].quantity--;
      displaycart();
    }
  }
  