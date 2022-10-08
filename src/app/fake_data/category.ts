import { IDrink } from "@app/fake_data/drink_list";
import { IFood } from "@app/fake_data/food-list";
import { IFruit } from "@app/fake_data/fruit_list";

export interface ISubsCategory {
  name: string;
  url: string;
  isActive: boolean;
  id: number;
  thumbnail: string;
}

export type Product = IDrink | IFood | IFruit;

export interface ICategory {
  name: string;
  url: string;
  id: number;
  category: string;
  des?: string;
  isActive: boolean;
  subsCategory?: ISubsCategory[];
  productList?: Product[];
}

export const category: ICategory[] = [
  {
    name: "Thức uống",
    url: "thuc_uong",
    category: "drinks",
    des: "danh mục đồ uống",
    isActive: false,
    id: 1,
    subsCategory: [
      {
        name: "cà phê",
        url: "ca_phe",
        isActive: false,
        id: 11,
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
      },
      {
        name: "trà sữa",
        url: "tra_sua",
        isActive: false,
        id: 12,
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
      },
      {
        name: "trà",
        url: "tra",
        isActive: false,
        id: 13,
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
      },
      {
        name: "sinh tố",
        url: "sinh_to",
        isActive: false,
        id: 14,
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
      },
      {
        name: "nước khoáng",
        url: "nuoc_khoang",
        isActive: false,
        id: 15,
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
      },
    ],
  },
  {
    name: "Món ăn",
    url: "mon_an",
    category: "foods",
    des: "danh mục món ăn",
    id: 2,
    isActive: false,
    subsCategory: [
      {
        name: "Phở",
        url: "pho",
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
        isActive: false,
        id: 21,
      },
      {
        name: "Cơm",
        url: "com",
        isActive: false,
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
        id: 22,
      },
      {
        name: "Bánh mỳ",
        url: "banh_my",
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
        isActive: false,
        id: 23,
      },
      {
        name: "Bún",
        url: "bun",
        isActive: false,
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
        id: 24,
      },
      {
        name: "Miến",
        url: "mien",
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
        isActive: false,
        id: 25,
      },
    ],
  },
  {
    name: "Rau quả",
    url: "rau_qua",
    category: "fruits",
    des: "danh mục hoa quả",
    isActive: false,
    id: 3,
    subsCategory: [
      {
        name: "trái cây",
        url: "trai_cay",
        isActive: false,
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
        id: 31,
      },
      {
        name: "rau xanh",
        url: "rau_xanh",
        isActive: false,
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
        id: 32,
      },
      {
        name: "sa lát",
        url: "sa_lat",
        thumbnail:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/19/837524/Giam-Mo.jpg",
        isActive: false,
        id: 33,
      },
    ],
  },
];
