import { Injectable } from '@angular/core';

@Injectable()
export class ProductsModel {
  public data: any = [
    {
      p_id: '1',
      product_name: 'Casual Shirt',
      product_availability: true,
      product_price: '1379',
      product_size: ['38','39','40','42','44'],
      product_image:
        'https://imagescdn.planetfashion.in/img/app/product/6/666633-6855347.jpg?auto=format',
    },
    {
      p_id: '2',
      product_name: 'Navy Solid Casual Top',
      product_availability: true,
      product_price: '890',
      product_size: ['XS','S','M','L','XL'],
      product_image:
        'https://imagescdn.planetfashion.in/img/app/product/8/866142-10259915.jpg?auto=format',
    },
    {
      p_id: '3',
      product_name: 'Men Navy Solid Casual Jacket',
      product_availability: true,
      product_price: '2500',
      product_size: ['XS','S','M','L','XL'],
      product_image:
        'https://imagescdn.planetfashion.in/img/app/product/7/705179-7643738.jpg?auto=format',
    },
    {
      p_id: '4',
      product_name: 'Black Slim Fit Formal Trousers',
      product_availability: true,
      product_price: '2180',
      product_size: ['32','34','36','38','40'],
      product_image:
        'https://imagescdn.planetfashion.in/img/app/product/7/762276-8724319.jpg?auto=format',
    },
    {
      p_id: '5',
      product_name: 'Cream Solid Hooded Neck Sweatshirt',
      product_availability: true,
      product_price: '1175',
      product_size: ['XS','S','M','L','XL'],
      product_image:
        'https://imagescdn.planetfashion.in/img/app/product/7/759316-8669819.jpg?auto=format',
    },
    {
      p_id: '6',
      product_name: 'Yellow Graphic Print T-shirt',
      product_availability: true,
      product_price: '1180',
      product_size: ['XS','S','M','L','XL'],
      product_image:
        'https://imagescdn.planetfashion.in/img/app/product/8/868022-10296926.jpg?auto=format',
    },
    {
      p_id: '7',
      product_name: 'Girls Pink Print Regular Fit Jacke',
      product_availability: true,
      product_price: '1240',
      product_size: ['XS','S','M','L','XL'],
      product_image:
        'https://imagescdn.planetfashion.in/img/app/product/5/567017-4968947.jpg?auto=format',
    },
    {
      p_id: '8',
      product_name: 'Men White Graphic Print Flip Flops',
      product_availability: true,
      product_price: '1235',
      product_size: ['6','7','8','9','10'],
      product_image:
        'https://imagescdn.planetfashion.in/img/app/product/7/731801-8140168.jpg?auto=format',
    },
    {
      p_id: '9',
      product_name: 'Men Black Slip Ons',
      product_availability: true,
      product_price: '2293',
      product_size: ['6','7','8','9','10'],
      product_image:
        'https://imagescdn.planetfashion.in/img/app/product/8/860565-10159731.jpg?auto=format',
    },
    {
        p_id: '10',
        product_name: 'Men Brown Leather Lace Up Shoes',
        product_availability: true,
        product_price: '3293',
        product_size: ['6','7','8','9','10'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/7/764997-8777766.jpg?auto=format',
      },
      {
        p_id: '11',
        product_name: 'Men Black Lace Up Shoes',
        product_availability: true,
        product_price: '1293',
        product_size: ['6','7','8','9','10'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/8/809792-9639340.jpg?auto=format',
      },
      {
        p_id: '12',
        product_name: 'Men Black Shoes',
        product_availability: true,
        product_price: '2293',
        product_size: ['6','7','8','9','10'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/8/860565-10159731.jpg?auto=format',
      },
      {
        p_id: '13',
        product_name: 'Women Black Sandals',
        product_availability: true,
        product_price: '1293',
        product_size: ['4','5','6','7'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/7/790894-9259986.jpg?auto=format',
      },
      {
        p_id: '14',
        product_name: 'Women Brown Heels',
        product_availability: true,
        product_price: '2293',
        product_size: ['6','7','8','9','10'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/7/703524-7612222.jpg?auto=format',
      },
      {
        p_id: '15',
        product_name: 'Women Pink Heels',
        product_availability: true,
        product_price: '2293',
        product_size: ['6','7','8','9','10'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/7/703501-7611671.jpg?auto=format',
      },
      {
        p_id: '16',
        product_name: 'White Face Shield',
        product_availability: true,
        product_price: '293',
        product_size: ['6','7','8'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/6/627211-6106578.jpg?auto=format',
      },
      {
        p_id: '17',
        product_name: 'White Print Casual Dress',
        product_availability: true,
        product_price: '2293',
        product_size: ['XS','S','M','L','XL'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/7/742625-8342746.jpg?auto=format',
      },
      {
        p_id: '18',
        product_name: 'Women Black Solid Formal Dress',
        product_availability: true,
        product_price: '2293',
        product_size: ['XS','S','M','L','XL'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/6/648911-6523165.jpg?auto=format',
      },
      {
        p_id: '19',
        product_name: 'Green Skinny Fit Light Wash Jeans',
        product_availability: true,
        product_price: '2293',
        product_size: ['32','34','36','38','40'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/7/769860-8853462.jpg?auto=format',
      },
      {
        p_id: '20',
        product_name: 'Men Blue Super Slim Casual Shirt',
        product_availability: true,
        product_price: '2293',
        product_size: ['XS','S','M','L','XL'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/7/794401-9327786.jpg?auto=format',
      },
      {
        p_id: '21',
        product_name: 'Women Black Solid Formal Regular Fit Trousers',
        product_availability: true,
        product_price: '3293',
        product_size: ['26','28','30','32','34'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/7/786044-9166578.jpg?auto=format',
      },
      {
        p_id: '22',
        product_name: 'fashion accessories',
        product_availability: true,
        product_price: '293',
        product_size: ['6'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/8/869645-10337122.jpg?auto=format',
      },
      {
        p_id: '23',
        product_name: ' Men Black Leather Wallet',
        product_availability: true,
        product_price: '1293',
        product_size: ['6'],
        product_image:
          'https://imagescdn.planetfashion.in/img/app/product/7/755679-8610987.jpg?auto=format',
      },
  ];
}
