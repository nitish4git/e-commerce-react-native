import appleBuds from '../assets/images/ProductImages/Apple_AirPods.png';
import galaxybuds from '../assets/images/ProductImages/Samsung_Buds.png';
import headphoneBlack from '../assets/images/ProductImages/Sony_Headphones_01.png';
import SonyCamera from '../assets/images/ProductImages/Sony_Camera.png';
import studioMicrophone from '../assets/images/ProductImages/Shure_Microphone.png';
import watchImage from '../assets/images/ProductImages/watchImage.png';
import whiteHeadphone from '../assets/images/ProductImages/Sony_Headphones_02.png';
import Rode_Microphone from '../assets/images/ProductImages/Rode_Microphone.png';

// import GooglePixel_Smartphone from "../assets/images/ProductImages/GooglePixel_Smartphone.png"
// import Lenovo_PC from "../assets/images/ProductImages/Lenovo_PC.png"
// import Samsung_Television from "../assets/images/ProductImages/Samsung_Television.png"
import ApplePay from '../assets/images/paymentGateway/ApplePay.png';
import GPay from '../assets/images/paymentGateway/GPay.png';
import Mastercard from '../assets/images/paymentGateway/Mastercard.png';
import Paypal from '../assets/images/paymentGateway/Paypal.png';
import Visa from '../assets/images/paymentGateway/Visa.png';
import Amex from '../assets/images/paymentGateway/Amex.png';

export const products = [
  {
    id: '1',
    price: '349.99',
    productName: 'SONY Premium Wireless Headphones',
    model: 'WH-1000XM4, Black',
    image: headphoneBlack,
  },
  {
    id: '2',
    price: '179.00',
    productName: 'APPLE AirPods Pro MagSafe Case',
    model: 'NC, 4 h, Wireless',
    image: appleBuds,
  },
  {
    id: '3',
    price: '119.99',
    discountPrice: '$149.99',
    productName: 'SAMSUNG Galaxy Buds 2 Pro',
    model: 'NC, 6 h, Wireless',
    image: galaxybuds,
  },
  {
    id: '4',
    price: '1,499.99',
    //   discountPrice:"$149.99",
    productName: 'SONY Alpha 7 IV ',
    model: 'Full-frame Interchangeable Lens Camera',
    image: SonyCamera,
  },
  {
    id: '5',
    price: '379.49',
    //   discountPrice:"$149.99",
    productName: 'SHURE SM7B',
    model: 'Studio microphone',
    image: studioMicrophone,
  },
  {
    id: '6',
    price: '94.90',
    //   discountPrice:"$149.99",
    productName: 'XIAOMI Redmi Watch 3',
    model: '42.58 mm, Aluminium, Plastic, One size',
    image: watchImage,
  },
  {
    id: '7',
    price: '349.99',
    //   discountPrice:"$149.99",
    productName: 'SONY Premium Wireless Headphones',
    model: 'Model: WH-1000XM4, Beige',
    image: whiteHeadphone,
  },
  {
    id: '8',
    price: '108.20',
    discountPrice: '$199.99',
    productName: 'RØDE PodMic',
    model: 'Dynamic microphone, Speaker microphone',
    image: Rode_Microphone,
  },
];

export const paymentGatewayIcons = [
  {
    id: '1',
    name: Paypal,
  },
  {
    id: '2',
    name: Visa,
  },
  {
    id: '3',
    name: ApplePay,
  },
  {
    id: '4',
    name: Mastercard,
  },
  {
    id: '5',
    name: GPay,
  },
  {
    id: '6',
    name: Amex,
  },
];
