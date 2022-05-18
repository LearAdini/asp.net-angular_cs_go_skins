export interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  imageUrl: string;
  productSale:number;
}


// ***Only for more-products.component, not used to display any other data***
export const products = [
  {
    productId: 1,
    productName: "AK-47 Neon Revolution",
    productPrice: 100,
    productDescription: 'AK-47 | Neon Revolution was added to the game on August 18, 2016, as part of The Gamma 2 Collection, which was released alongside the “Double Exposure” update. The skin was created by Coridium and Gamersbook.',
    imageUrl:['https://cs.money/img/main/slider-items/cs/5.png'],
    productSale:52
  },
  {
    productId: 2,
    productName: "USP-S Kill Confirmed",
    productPrice: 38,
    productDescription: 'USP-S | Kill Confirmed was added to the game on September 17, 2015, as part of The Shadow Collection, which was released alongside the “Shadow Boxing” update. The skin was created by Tuna Melt.',
    imageUrl: ['https://cs.money/img/main/slider-items/cs/11.png'],
    productSale:67
  },
  {

    productId:3,
    productName: "AK-47 Neon Rider",
    productPrice: 149,
    productDescription: 'AK-47 | Neon Rider was added to the game on August 2, 2018, as part of The Horizon Collection, which was released alongside “A New Horizon” update. The skin was created by Puffin (•⌔• ), SIR, and Medic!',
    imageUrl: ['https://cs.money/img/main/slider-items/cs/3.png'],
    productSale:45
  },
  {
    productId:4,
    productName: "M4A4 Asiimov",
    productPrice: 320,
    productDescription:"M4A4 | Asiimov was added to the game on December 18, 2013, as part of The Winter Offensive Collection, which was released alongside the “Winter Offensive” update. The skin was created by Coridium.",
    imageUrl: ['https://cs.money/img/main/slider-items/cs/15.png'],
    productSale:66
  },
  {
    productId:5,
    productName: "AK-47 Redline",
    productPrice: 25,
    productDescription:"AK-47 | Redline was added to the game on February 20, 2014, as part of The Phoenix Collection, which was released alongside the start of Operation Phoenix. The skin was created by EmKay.",
    imageUrl: ['https://cs.money/img/main/slider-items/cs/1.png'],
    productSale:55
  },
  {
    productId:6,
    productName: "MAC-10 Last Dive",
    productPrice: 45,
    productDescription:"MAC-10 | Last Dive was added to the game on March 15, 2017, as part of The Spectrum Collection, which was released alongside the “Take a trip to the Canals” update. The skin was created by mara_der.",
    imageUrl: ['https://s1.cs.money/gQEBIDs_icon.png'],
    productSale:38
  },
  {
    productId:7,
    productName: "AK-47 Bloodsport",
    productPrice: 150,
    productDescription:"AK-47 | Bloodsport was added to the game on March 15, 2017, as part of The Spectrum Collection, which was released alongside the “Take a trip to the Canals” update. The skin was created by SLIMEface.",
    imageUrl: ['https://cs.money/img/main/slider-items/cs/9.png'],
    productSale:47
  },
  {
    productId:8,
    productName: "AWP Asiimov",
    productPrice: 550,
    productDescription:"AWP | Asiimov was added to the game on February 20, 2014, as part of The Phoenix Collection, which was released alongside the start of Operation Phoenix. The skin was created by Coridium.",
    imageUrl: ['https://cs.money/img/main/slider-items/cs/10.png'],
    productSale:17
  },
  {
    productId:9,
    productName: "AK-47 Asiimov",
    productPrice: 45,
    productDescription:"With its stylish, compact design and generous capacity, the Cruzer Blade USB Flash Drive makes it easy to back up, transfer, and share your files.",
    imageUrl: ['https://cs.money/img/main/slider-items/cs/2.png'],
    productSale:44
  },
  {
    productId:10,
    productName: "AWP Neo-Noir",
    productPrice: 24,
    productDescription:"AWP | Neo-Noir was added to the game on December 7, 2018, as part of The Danger Zone Collection, which was released alongside the “Welcome to the Danger Zone” update. The skin was created by donschi and Blazer.",
    imageUrl: ['https://cs.money/img/main/slider-items/cs/8.png'],
    productSale:53
  },
  {
    productId:11,
    productName: "Butterfly Knife Doppler Sapphire",
    productPrice: 37000,
    productDescription:"The blade of the knife is painted with metallic paints and adorned with a pattern of translucent wavy lines resembling smoke. The color scheme of the skin includes various shades of blue creating gradient transitions. The design of the skin resembles the texture of the sapphire. The handle is unpainted and complemented with dark blue inserts.",
    imageUrl: ['https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqOT1I6vZn3lU18hwmOvN8IXvjVCLqSwwOj6rYJiRdg42NAuE-lW5kri5hpbuvM7AzHtmsnMh4imPzUa3gB4aaOw9hfCeVxzAUJ5TOTzr'],
    productSale:10
  },
  {
    productId:12,
    productName: "MP5-SD Dirt Drop",
    productPrice: 35,
    productDescription:"MP5-SD | Dirt Drop was added to the game on August 31, 2018, as part of The 2018 Inferno Collection, which was released alongside the “FACEIT 2018 - Ways to Watch” update.",
    imageUrl: ['https://s1.cs.money/D2Io7h0_icon.png'],
    productSale:70
  },
  {
    productId:13,
    productName: "CZ75-Auto Eco StatTrack",
    productPrice: 65,
    productDescription:"CZ75-Auto | Eco was added to the game on August 3, 2018, as part of The Horizon Collection, which was released alongside “A New Horizon” update. The skin was created by LoveCroissant.",
    imageUrl: ['https://s1.cs.money/PbBqzl2_icon.png'],
    productSale:44
  },
  {
    productId:14,
    productName: "Glock-18 Sacrifice",
    productPrice: 26,
    productDescription:"Glock-18 | Sacrifice was added to the game on October 18, 2019, as part of The CS20 Collection, which was released alongside the “Cache and Release” update. The skin was created by MultiH and S1lent.",
    imageUrl: ['https://s1.cs.money/33ojOWT_icon.png'],
    productSale:58
  },
  {
    productId:15,
    productName: "Sawed-Off Amber Fade",
    productPrice: 205,
    productDescription:"Sawed-Off | Amber Fade was added to the game on November 27, 2013, as part of The Train Collection, which was released alongside the “Out with the old, in with the new” update.",
    imageUrl: ['https://s1.cs.money/nCVJIwY_icon.png'],
    productSale:46
  },
  {
    productId:16,
    productName: "Karambit Crimson Web",
    productPrice: 7500,
    productDescription:"Karambit | Crimson Web (Kara CW) was added to the game on August 14, 2013, alongside The Arms Deal update. The skin is available in 11 cases released in 2013-2015.",
    imageUrl: ['https://s1.cs.money/Ue3Grx6_icon.png'],
    productSale:33
  },
  {
    productId:17,
    productName: "Specialist Gloves Field Agent",
    productPrice: 1500,
    productDescription:"Specialist Gloves | Field Agent were added to the game on December 3, 2020. The gloves are available in the Operation Broken Fang Case.",
    imageUrl: ['https://s1.cs.money/Gb2jc8j_icon.png'],
    productSale:42
  },
  {
    productId:18,
    productName: "AK-47 The Empress",
    productPrice: 796,
    productDescription:"AK-47 | The Empress was added to the game on September 14, 2017, as part of The Spectrum 2 Collection, which was released alongside the “China, are you ready?” update. The skin was created by OniLolz, Zaphk, and 2Minds.",
    imageUrl: ['https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn8f7p0gjrnDpdvxi1Xn80JqYGygLI_DdQJsMgyC_AO4xb_p0ce66ZXImmwj5Hei5N5mVw'],
    productSale:38
  },
  {
    productId:19,
    productName: "Bayonet Doppler Ruby",
    productPrice: 8000,
    productDescription:"The blade of the knife is painted with metallic paints and adorned with a pattern of translucent wavy lines resembling smoke. The color scheme of the skin includes various shades of red creating gradient transitions. The design of the skin resembles the texture of the ruby. The guard and the handle remain unpainted.",
    imageUrl: ['https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJQ-d6vq42KhfX4NrLLk29u5Mx2gv2P9o6njA3mrxVrNm2iItXAdAY7ZFuEq1e2wri-gsTousjBn3Nqs3Fw5GGdwUIbpPL9uQ'],
    productSale:28
  },
  {
    productId:20,
    productName: "M4A1-S Player Two",
    productPrice: 529,
    productDescription:"M4A1-S | Player Two was added to the game on March 31, 2020, as part of The Prisma 2 Collection, which was released alongside the “Clearing Out the Cobwebs” update. The skin was created by kadzor.",
    imageUrl: ['https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITShWxeupUl0tbN_Iv9nGu4qgE7Nnf1IYWUcAQ7MgnS-FW6wOi705Lo75uYmHNh6SZ3tiqMmh210xkZb-Rvm7XAHs3vPuvv'],
    productSale:25
  },
  {
    productId:21,
    productName: "Glock-18 Bullet Queen",
    productPrice: 250,
    productDescription:"Glock-18 | Bullet Queen was added to the game on March 31, 2020, as part of The Prisma 2 Collection, which was released alongside the Clearing Out the Cobwebs update. The skin was created by 2Minds.",
    imageUrl: ['https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-cluX5MrLVk2Vu5Mx2gv3--Y3nj1H6r0plMm-lcNSRIQc6Z1GE-1e6wObt1JG46cmbmHo37yAn4HjfmUTmhAYMMLKVxXRrDQ'],
    productSale:38
  }
];
