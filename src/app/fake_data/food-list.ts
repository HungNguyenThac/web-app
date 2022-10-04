import { size } from "./drink_list";

export interface IFood {
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

export const food_list: IFood[] = [
  {
    name: "Phỏ bò",
    url: "/pho_bo",
    category_url: "do_an",
    category_id: 2,
    id: 11111111111,
    subCategory_id: 11,
    subCategory_url: "pho",
    des: "Cà phê đen, có các size: nhỏ, vừa, lớn",
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
    name: "Phỏ bò tái",
    url: "/pho_bo_tai",
    category_url: "do_an",
    category_id: 2,
    subCategory_id: 11,
    subCategory_url: "pho",
    id: 122222222222,
    des: "Cà phê đen, có các size: nhỏ, vừa, lớn",
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
    name: "Phỏ bò dừ",
    url: "/pho_bo_du",
    category_url: "do_an",
    category_id: 2,
    id: 1333333333,
    subCategory_id: 11,
    subCategory_url: "pho",
    des: "Cà phê đen, có các size: nhỏ, vừa, lớn",
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
    name: "Phỏ bò trứng",
    url: "/pho_bo_trung",
    category_url: "do_an",
    category_id: 2,
    subCategory_id: 11,
    subCategory_url: "pho",
    id: 14444444444444444,
    des: "Cà phê đen, có các size: nhỏ, vừa, lớn",
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
    name: "Phỏ bò huế",
    url: "/pho_bo_bue",
    category_url: "do_an",
    subCategory_id: 11,
    subCategory_url: "pho",
    category_id: 2,
    id: 1666666666666666,
    des: "Cà phê đen, có các size: nhỏ, vừa, lớn",
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
];
