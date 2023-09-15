/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "30101",
title: "Calvin Klein Eternity for Men Eau de Toilette",
description: "Calvin Klein Eternity is a timeless fragrance designed for men. It features a blend of refreshing citrus notes, lavender, and aromatic herbs, creating a sophisticated and masculine scent. This eau de toilette is perfect for daily wear and special occasions, leaving a lasting impression with its classic and elegant aroma.",
price: 50,
discontinued: false,
categories: ["Male"],
imageUrl : "https://fimgs.net/mdimg/perfume/375x500.258.jpg"
  },

  {
    id: "30102",
title: "Chanel Coco Mademoiselle Eau de Parfum",
description: "Chanel Coco Mademoiselle is a captivating fragrance for women. It combines floral and oriental notes, including jasmine, rose, and patchouli, to create a luxurious and sensual scent. This eau de parfum embodies femininity and elegance, making it an ideal choice for sophisticated women.",
price: 120,
discontinued: false,
categories: ["Female"],
imageUrl : "https://image.s5a.com/is/image/TheBay/3145891166705_main?wid=233&hei=310&qlt=90&resMode=sharp2&op_usm=1.2,1,6,0"
  },

  {
    id: "30103",
title: "Johnson's Baby Shampoo",
description: "Johnson's Baby Shampoo is a gentle and tear-free formula specially designed for children. It cleanses delicate hair while being mild on the eyes and skin. This hypoallergenic shampoo is perfect for daily use and leaves children's hair soft, shiny, and easy to manage.",
price: 8,
discontinued: false,
categories: ["Kids"],
imageUrl : "https://assets.shop.loblaws.ca/products/21112357/b2/en/front/21112357_front_a06_@2.png"
  },

  {
    id: "30104",
title: "Clinique for Men Moisturizing Lotion",
description: "Clinique for Men Moisturizing Lotion is a lightweight and hydrating formula that keeps men's skin moisturized and healthy. It helps soothe razor burn and protects the skin from environmental damage. This non-greasy lotion is quickly absorbed, leaving the skin feeling smooth and refreshed.",
price: 25,
discontinued: false,
categories: ["Male"],
imageUrl : "https://m.media-amazon.com/images/I/71tBJjUg8NL.jpg"
  },

  {
    id: "30105",
title: "MAC Ruby Woo Retro Matte Lipstick",
description: "MAC Ruby Woo is an iconic red lipstick loved by women worldwide. Its retro matte finish offers intense color payoff and long-lasting wear. The bold and vibrant shade complements various skin tones, making it a staple in every woman's makeup collection.",
price: 30,
discontinued: false,
categories: ["Female"],
imageUrl : "https://m.media-amazon.com/images/I/51bVS4nc3LL.jpg"
  },

  {
    id: "30106",
title: "L'Oreal Kids Bubble Gum 2-in-1 Shampoo",
description: "L'Oreal Kids Bubble Gum 2-in-1 Shampoo is a fun and gentle shampoo specially formulated for children. It cleanses hair effectively and leaves a delightful bubble gum fragrance. This 2-in-1 shampoo and conditioner make bath time enjoyable for kids.",
price: 6,
discontinued: false,
categories: ["Kids"],
imageUrl : "https://i5.walmartimages.com/asr/1da353fe-fe87-44ef-a42d-f0ccd2677e2c_1.56ca31380e3fde3d8f86427a47105dc9.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"
  },

  {
    id: "30107",
title: "Old Spice High Endurance Deodorant",
description: "Old Spice High Endurance Deodorant is a popular choice for men. It offers long-lasting odor protection and a refreshing scent. This deodorant keeps men feeling confident and dry throughout the day, even during physical activities.",
price: 7,
discontinued: false,
categories: ["Male"],
imageUrl : "https://assets.shop.loblaws.ca/products/20663349001/b3/en/front/20663349001_front_a06_@2.png"
  },

  {
    id: "30108",
title: "Maybelline Lash Sensational Mascara",
description: "Maybelline Lash Sensational Mascara is a favorite among women for its volumizing and lengthening effect on lashes. Its unique brush captures every lash, providing a full and defined look. This mascara is smudge-proof and stays put all day long.",
price: 12,
discontinued: false,
categories: ["Female"],
imageUrl : "https://m.media-amazon.com/images/I/61OFOt+7PxL.jpg"
  },

  {
    id: "30111",
title: "Johnson's Baby Lotion",
description: "Johnson's Baby Lotion is a gentle and nourishing moisturizer for children's delicate skin. It helps keep their skin soft and smooth, preventing dryness. This lotion is dermatologist-tested and hypoallergenic, making it suitable for daily use on babies and kids.",
price: 6,
discontinued: false,
categories: ["Children"],
imageUrl : "https://m.media-amazon.com/images/I/717mbnWvVdL._AC_UF1000,1000_QL80_.jpg"
  },
];
