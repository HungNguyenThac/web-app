import { size } from "./drink_list";

export interface IFruit {
  name: string;
  url: string;
  category_url: string;
  category_id: number;
  id: number;
  des: string;
  image: string[];
  thumbnail?: string;
  prices: number;
  size?: size[];
  quantity: number;
  sale?: number;
  option: string[];
  subCategory_id: number;
  subCategory_url: string;
}

export const fruit_list: IFruit[] = [
  {
    name: "Táo",
    url: "/tao",
    category_url: "trai_cay",
    category_id: 3,
    id: 1111817687,
    des: "táo, có các size: nhỏ, vừa, lớn",
    quantity: 0,
    option: [],
    subCategory_id: 31,
    subCategory_url: "trai_cay",
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["XS", "S", "M", "L", "XL"],
    sale: 0.5,
  },
  {
    name: "Bưởi",
    url: "/buoi",
    category_url: "trai_cay",
    category_id: 3,
    id: 1111287687,
    subCategory_id: 31,
    subCategory_url: "trai_cay",
    des: "táo, có các size: nhỏ, vừa, lớn",
    quantity: 0,
    option: [],
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["XS", "S", "M", "L", "XL"],
    sale: 0.5,
  },
  {
    name: "Cam",
    url: "/cam",
    category_url: "trai_cay",
    category_id: 3,
    id: 1131187687,
    subCategory_id: 31,
    subCategory_url: "trai_cay",
    des: "táo, có các size: nhỏ, vừa, lớn",
    quantity: 0,
    option: [],
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["XS", "S", "M", "L", "XL"],
    sale: 0.5,
  },
  {
    name: "Quít",
    url: "/quit",
    category_url: "trai_cay",
    category_id: 3,
    id: 4111187687,
    subCategory_id: 31,
    subCategory_url: "trai_cay",
    des: "táo, có các size: nhỏ, vừa, lớn",
    quantity: 0,
    option: [],
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["XS", "S", "M", "L", "XL"],
    sale: 0.5,
  },
  {
    name: "Sầu riêng",
    url: "/sau_rieng",
    category_url: "trai_cay",
    category_id: 3,
    id: 9111187687,
    des: "táo, có các size: nhỏ, vừa, lớn",
    quantity: 0,
    option: [],
    subCategory_id: 31,
    subCategory_url: "trai_cay",
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["XS", "S", "M", "L", "XL"],
    sale: 0.5,
  },
];
