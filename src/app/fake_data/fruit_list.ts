import { IOption, ISubsOption } from "./drink_list";

export interface IFruit {
  name: string;
  url: string;
  category_url: string;
  category_id: number | string;
  id: number | string;
  des: string;
  image: string[];
  prices: number;
  quantity: number;
  subCategory_id: number;
  option: IOption[];
  optionSelected: ISubsOption[];
  subCategory_url: string;
  quantityItemsSelected: number;

  sale?: number;
  thumbnail?: string;
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
    sale: 0.5,
    quantityItemsSelected: 0,
    optionSelected: [],
    option: [
      {
        name: "Size",
        defaultOption: "M",
        optionList: ["S", "M", "L", "L", "XL"],
      },
      {
        name: "Đá",
        defaultOption: "mặc định",
        optionList: ["0", "25%", "50%", "75%", "mặc định"],
      },
      {
        name: "Đường",
        defaultOption: "mặc định",
        optionList: ["0", "25%", "50%", "75%", "mặc định"],
      },
    ],
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
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.5,
    quantityItemsSelected: 0,
    optionSelected: [],
    option: [
      {
        name: "Size",
        defaultOption: "M",
        optionList: ["S", "M", "L", "L", "XL"],
      },
      {
        name: "Đá",
        defaultOption: "mặc định",
        optionList: ["0", "25%", "50%", "75%", "mặc định"],
      },
      {
        name: "Đường",
        defaultOption: "mặc định",
        optionList: ["0", "25%", "50%", "75%", "mặc định"],
      },
    ],
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
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.5,
    quantityItemsSelected: 0,
    optionSelected: [],
    option: [
      {
        name: "Size",
        defaultOption: "M",
        optionList: ["S", "M", "L", "L", "XL"],
      },
      {
        name: "Đá",
        defaultOption: "mặc định",
        optionList: ["0", "25%", "50%", "75%", "mặc định"],
      },
      {
        name: "Đường",
        defaultOption: "mặc định",
        optionList: ["0", "25%", "50%", "75%", "mặc định"],
      },
    ],
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
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.5,
    quantityItemsSelected: 0,
    optionSelected: [],
    option: [
      {
        name: "Size",
        defaultOption: "M",
        optionList: ["S", "M", "L", "L", "XL"],
      },
      {
        name: "Đá",
        defaultOption: "mặc định",
        optionList: ["0", "25%", "50%", "75%", "mặc định"],
      },
      {
        name: "Đường",
        defaultOption: "mặc định",
        optionList: ["0", "25%", "50%", "75%", "mặc định"],
      },
    ],
  },
  {
    name: "Sầu riêng",
    url: "/sau_rieng",
    category_url: "trai_cay",
    category_id: 3,
    id: 9111187687,
    des: "táo, có các size: nhỏ, vừa, lớn",
    quantity: 0,
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
    sale: 0.5,
    quantityItemsSelected: 0,
    optionSelected: [],
    option: [
      {
        name: "Size",
        defaultOption: "M",
        optionList: ["S", "M", "L", "L", "XL"],
      },
      {
        name: "Đá",
        defaultOption: "mặc định",
        optionList: ["0", "25%", "50%", "75%", "mặc định"],
      },
      {
        name: "Đường",
        defaultOption: "mặc định",
        optionList: ["0", "25%", "50%", "75%", "mặc định"],
      },
    ],
  },
];
