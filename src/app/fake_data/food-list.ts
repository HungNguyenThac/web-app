export type sizeFood = "nhỏ" | "vừa" | "lớn";

export interface IFoods {
  name: string;
  url: string;
  category: string;
  category_id: number;
  drink_id: number;
  des: string;
  image: string[];
  thumbnail?: string;
  prices: number;
  size?: sizeFood[];
  quantity: number;
  sale?: number;
  option: string[];
}

export const food_list: IFoods[] = [
  {
    name: "Phỏ bò",
    url: "/pho_bo",
    category: "foods",
    category_id: 1,
    drink_id: 1,
    des: "Cà phê đen, có các size: nhỏ, vừa, lớn",
    quantity: 999999,
    option: [],
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["nhỏ", "vừa", "lớn"],
    sale: 0.5,
  },
  {
    name: "Phỏ bò",
    url: "/pho_bo",
    category: "foods",
    category_id: 1,
    drink_id: 1,
    des: "Cà phê đen, có các size: nhỏ, vừa, lớn",
    quantity: 999999,
    option: [],
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["nhỏ", "vừa", "lớn"],
    sale: 0.5,
  },
  {
    name: "Phỏ bò",
    url: "/pho_bo",
    category: "foods",
    category_id: 1,
    drink_id: 1,
    des: "Cà phê đen, có các size: nhỏ, vừa, lớn",
    quantity: 999999,
    option: [],
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["nhỏ", "vừa", "lớn"],
    sale: 0.5,
  },
  {
    name: "Phỏ bò",
    url: "/pho_bo",
    category: "foods",
    category_id: 1,
    drink_id: 1,
    des: "Cà phê đen, có các size: nhỏ, vừa, lớn",
    quantity: 999999,
    option: [],
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["nhỏ", "vừa", "lớn"],
    sale: 0.5,
  },
  {
    name: "Phỏ bò",
    url: "/pho_bo",
    category: "foods",
    category_id: 1,
    drink_id: 1,
    des: "Cà phê đen, có các size: nhỏ, vừa, lớn",
    quantity: 999999,
    option: [],
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["nhỏ", "vừa", "lớn"],
    sale: 0.5,
  },
];
