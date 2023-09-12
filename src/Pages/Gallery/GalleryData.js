/* eslint-disable import/no-anonymous-default-export */
import art01 from '../../images/art01.jpg';
import art02 from '../../images/art02.jpg';
import art03 from '../../images/art03.jpg';
import art06 from '../../images/art06.jpg';
import art07 from '../../images/horse2.jpg';
import art08 from '../../images/art08.jpg';
import art09 from '../../images/art09.jpg';
import art10 from '../../images/art10.jpg';
import art11 from '../../images/art11.jpg';
import art12 from '../../images/newhorse2.jpeg';
import art16 from '../../images/IMG_20230703_164958.jpg';
import art17 from '../../images/IMG_9089.jpg';
import art18 from '../../images/IMG_9001.png';
import art19 from '../../images/IMG_9182.jpg';
import art20 from '../../images/IMG_9181.jpg';
import art21 from '../../images/IMG_9185.jpg';
import art22 from '../../images/IMG_9193.jpg';
import art23 from '../../images/IMG_9187.jpg';

const types = {
  sm: 'small',
  lg: 'large',
  arch: 'architectural',
};

const categories = {
  lg: 'Large Horse',
  sm: 'Small Horse',
  arch: 'Architectural Sculpture',
};

export default [
  // large horses
  {
    uuid: '143a6161-0c8b-403b-b33f-c2d1cb09447f',
    name: 'Pahlone, son of Chief Ouray Ute Tribe',
    sold: true,
    description: 'Built on site with on site materials',
    price: null,
    image: art17,
    type: types.lg,
    category: categories.lg,
    notes: null,
  },
  {
    uuid: 'b9e3fab6-6868-4b67-ad19-839c96502ff6',
    name: 'Curiosity',
    sold: true,
    description: 'Badger Creek Ranch',
    price: null,
    image: art18,
    type: types.lg,
    category: categories.lg,
    notes: null,
  },
  {
    uuid: '201fb3ea-0771-453e-841c-f623905ec00e',
    name: 'Snow',
    sold: true,
    description: 'Local private Salida ranch',
    price: null,
    image: art12,
    type: types.lg,
    category: categories.lg,
    notes: null,
  },
  {
    uuid: 'e15b18bd-9023-4dad-bcfc-669613bfac33',
    name: 'Garden Horse',
    sold: true,
    description: 'Built on site with on site materials',
    price: null,
    image: art16,
    type: types.lg,
    category: categories.lg,
    notes: null,
  },
  {
    uuid: '1bd45e17-07ae-43dd-939c-c50818dfaa93',
    name: 'Ranch Horse',
    sold: false,
    description: 'Coming September 2023',
    price: 7500,
    image: null,
    type: types.lg,
    category: categories.lg,
    notes: 'Delivery and installation no additional cost',
  },
  {
    uuid: 'ab368831-fce1-43a8-8380-94007c92c907',
    name: 'Shavano',
    sold: true,
    description: 'Built on site with on site materials',
    price: null,
    image: art07,
    type: types.lg,
    category: categories.lg,
    notes: null,
  },
  // small horses
  {
    uuid: '5d744626-6356-4c9b-a818-da6686375a89',
    name: 'Circus Horse',
    sold: true,
    description: '19x19x3',
    price: null,
    image: art01,
    type: types.sm,
    category: categories.sm,
    notes: null,
  },
  {
    uuid: '8ca764f5-7d69-448d-b2a3-1164cfab710a',
    name: 'Steely Dan',
    sold: true,
    description: '19x19x3',
    price: null,
    image: art03,
    type: types.sm,
    category: categories.sm,
    notes: null,
  },
  {
    uuid: 'd966e4dd-e8be-494f-8b32-ce899963904e',
    name: 'Relaxed',
    sold: true,
    description: '19x19x3',
    price: null,
    image: art06,
    type: types.sm,
    category: categories.sm,
    notes: null,
  },
  {
    uuid: '18a77ac8-e933-47ca-8539-7a68d5521202',
    name: 'Untitled',
    sold: true,
    description: '19x19x3',
    price: null,
    image: art10,
    type: types.sm,
    category: categories.sm,
    notes: null,
  },
  {
    uuid: '9f634913-a86d-4db6-ad0b-08a58c36708f',
    name: 'Boss',
    sold: false,
    description: 'Reclaimed steel - 11x14',
    price: 1000,
    image: art11,
    type: types.sm,
    category: categories.sm,
    notes: null,
  },
  {
    uuid: '6deb67bc-5ac0-4610-a510-bd2e1d4699c9',
    name: 'Barbed Reverence',
    sold: false,
    description: '11x14',
    price: 1000,
    image: art21,
    type: types.sm,
    category: categories.sm,
    notes: null,
  },
  {
    uuid: '4ffd9aa9-74e6-4620-9d88-4528e82bb26f',
    name: 'Sentry',
    sold: false,
    description: 'Reclaimed mining cable, barn steel - 19x19x3',
    price: 1000,
    image: art23,
    type: types.sm,
    category: categories.sm,
    notes: null,
  },
  // architectural sculptures
  {
    uuid: '61719c04-6db1-431d-9861-2d272a5c3aa6',
    name: 'Native Winds',
    sold: false,
    description: 'Juniper, pinion, latigo, turquoise and clavos nails',
    price: 1450,
    image: art20,
    type: types.arch,
    category: categories.arch,
    notes: null,
  },
  {
    uuid: '9db682b2-f945-484e-a187-a39729a5d144',
    name: 'Turquoise Wave',
    sold: false,
    description: 'Arizona rock base and clavos nails',
    price: 625,
    image: art22,
    type: types.arch,
    category: categories.arch,
    notes: null,
  },
  {
    uuid: '1d555f22-cbee-4f93-9611-671518287b89',
    name: 'Spirit Family',
    sold: true,
    description: 'Reclaimed steel and flagstone rock base',
    price: null,
    image: art02,
    type: types.arch,
    category: categories.arch,
    notes: null,
  },
  {
    uuid: 'd8ff66a3-5cab-4e47-965f-9a2431a4f86c',
    name: 'Moonrise on the Beach',
    sold: true,
    description: 'Turquoise',
    price: null,
    image: art08,
    type: types.arch,
    category: categories.arch,
    notes: null,
  },
  {
    uuid: '90dfdd2e-2535-4930-8d64-119950162546',
    name: 'Surfs Up',
    sold: true,
    description: 'Cherry wood',
    price: null,
    image: art09,
    type: types.arch,
    category: categories.arch,
    notes: null,
  },
/*   {
    uuid: 'd31dfb03-8cd8-4532-8051-ba159d8cf4ff',
    name: 'The Gift',
    sold: false,
    description: 'Reclaimed steel',
    price: 1000,
    image: art24,
    type: types.arch,
    category: categories.arch,
    notes: null,
  }, */
  {
    uuid: 'd31dfb03-8cd8-4532-8051-ba159d8cf4ff',
    name: 'The Gift and Presenting',
    sold: false,
    description: 'The Gift is on the left, Presenting is on the right. The Gift is $1,000 and Presenting is $1,250',
    price: null,
    image: art19,
    type: types.arch,
    category: categories.arch,
    notes: null,
  },
];
