export type sizeList = "XS" | "S" | "M" | "L" | "XL";

export interface ISubsOption {
  name: string;
  value: number | string;
  id?: number | string;
}

export interface IOption {
  name: string;
  defaultOption: number | string;
  optionList: number[] | string[];
  id?: number | string;
}

export interface IDrink {
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

export const drink_list: IDrink[] = [
  {
    name: "Cà phê đen",
    url: "ca_phe_den",
    subCategory_id: 11,
    subCategory_url: "ca_phe",
    category_url: "thuc_uong",
    category_id: 1,
    id: 112312,
    des: "Cà phê đen, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    quantityItemsSelected: 0,
    optionSelected: [],
  },
  {
    name: "Cà phê sữa",
    url: "ca_phe_sua",
    category_url: "thuc_uong",
    subCategory_id: 11,
    subCategory_url: "ca_phe",
    category_id: 1,
    id: 1678678,

    des: "Cà phê sữa, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    quantityItemsSelected: 0,
    optionSelected: [],
  },
  {
    name: "Cà phê trứng",
    url: "ca_phe_trung",
    category_url: "thuc_uong",
    subCategory_id: 11,
    subCategory_url: "ca_phe",
    category_id: 1,

    id: 1978978,
    des: "Cà phê trung, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    quantityItemsSelected: 0,
    optionSelected: [],
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    name: "Cà phê Ý",
    url: "ca_phe_y",
    category_url: "thuc_uong",
    category_id: 1,

    subCategory_id: 11,
    subCategory_url: "ca_phe",
    id: 175676,
    des: "Cà phê ý, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    quantityItemsSelected: 0,
    optionSelected: [],
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    name: "Cà phê hoa quả",
    url: "ca_phe_hoa_qua",
    category_url: "thuc_uong",
    subCategory_id: 11,
    subCategory_url: "ca_phe",
    category_id: 1,

    id: 13453454,
    des: "Cà phê đen, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    quantityItemsSelected: 0,
    optionSelected: [],
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    name: "Cà phê đen",
    url: "ca_phe_den",
    category_url: "thuc_uong",
    subCategory_id: 11,
    subCategory_url: "ca_phe",
    category_id: 1,

    id: 134534580,
    des: "Cà phê đen, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    quantityItemsSelected: 0,
    optionSelected: [],
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    name: "Trà sữa",
    url: "tra_sua",
    category_url: "thuc_uong",
    subCategory_id: 12,
    subCategory_url: "tra_sua",
    category_id: 1,

    id: 1314534580,
    des: "Trà sữa, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    quantityItemsSelected: 0,
    optionSelected: [],
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    name: "Trà sữa chân trâu",
    url: "tra_sua_chan_trau",
    category_url: "thuc_uong",
    subCategory_id: 12,
    subCategory_url: "tra_sua",
    category_id: 1,

    id: 1345345080,
    des: "Trà sữa chân trâu, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    quantityItemsSelected: 0,
    optionSelected: [],
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    name: "Trà sữa đường đen",
    url: "tra_sua_duong_den",
    category_url: "thuc_uong",
    subCategory_id: 12,
    subCategory_url: "tra_sua",
    category_id: 1,

    id: 1980,
    des: "Trà sữa đường đen, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    quantityItemsSelected: 0,
    optionSelected: [],
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    name: "Trà sữa thạch dừa",
    url: "tra_sua_thach_dua",
    category_url: "thuc_uong",
    subCategory_id: 12,
    subCategory_url: "tra_sua",
    category_id: 1,

    id: 13453477,
    des: "Trà sữa thạch dừa, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    quantityItemsSelected: 0,
    optionSelected: [],
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    name: "Trà sữa nha đam",
    url: "tra_sua_nha_dam",
    category_url: "thuc_uong",
    subCategory_id: 12,
    subCategory_url: "tra_sua",
    category_id: 1,
    id: 134534589123,

    des: "Trà sữa nha đam, có các size: M, L, S",
    quantity: 0,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    quantityItemsSelected: 0,
    optionSelected: [],
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
    name: "Trà sữa quất chanh",
    url: "tra_sua_quat_chanh",
    category_id: 1,
    category_url: "thuc_uong",
    subCategory_id: 12,
    subCategory_url: "tra_sua",
    id: 1366666,
    des: "Trà sữa quất chanh, có các size: M, L, S",
    quantity: 0,

    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    quantityItemsSelected: 0,
    optionSelected: [],
    thumbnail:
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    sale: 0.2,
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
