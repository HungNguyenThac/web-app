export type size = "XS" | "S" | "M" | "L" | "LL";

export interface IDrinks {
  name: string;
  url: string;
  category: string;
  category_id: number;
  drink_id: number;
  des: string;
  image: string[];
  thumbnail?: string;
  prices: number;
  size: size[];
  quantity: number;
  sale?: number;
}

export const drinks_list: IDrinks[] = [
  {
    name: "Cà phê đen",
    url: "/ca_phe_den",
    category: "drinks_list",
    category_id: 1,
    drink_id: 1,
    des: "Cà phê đen, có các size: M, L, S",
    quantity: 999999,
    image: [
      "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
      "https://noithatcaphe.vn/images/2022/07/20/ca-phe-den-3.jpg",
      "https://cafedidong.vn/wp-content/uploads/2018/12/1-CAFE-%C4%90EN.jpg",
    ],
    prices: 49000,
    thumbnail: "https://lepathcoffee.com/wp-content/uploads/2021/12/nen-uong-ca-phe-den-hay-ca-phe-sua.jpg",
    size: ["S", "M", "L"],
    sale: 0.2,
  },
];
