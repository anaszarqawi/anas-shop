
"use client";
import Image from "next/image";
import { ProductCard as Product } from "@/types/ProductTypes";
import Link from "next/link";
import Icon from "./Icon";


const ProductCard = ({ product, isFavorite, isInCart }: { product: Product; isFavorite: boolean; isInCart: boolean }) => {

  return (
    <Link href={`products/${product.id}`} className="group bg-zinc-800 rounded-3xl p-2 transition-all hover:bg-zinc-800/80">
      <div className="relative flex items-center h-80 w-full rounded-2xl overflow-hidden mb-1 ">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={320}
        />
        <div className="absolute button-shadow transition-all rounded-lg p-3 top-3 right-3 bg-zinc-100 opacity-0 group-hover:opacity-100 hover:bg-zinc-200">
          {isFavorite ? (
            <div className="text-red-500">
              <Icon name="favorite" />
            </div>
          ) : (
            <div className="text-zinc-900">
              <Icon name="favorite" fill={false} color="zinc-900" />
            </div>
          )}
        </div>

        <div className="absolute button-shadow transition-all rounded-lg p-3 bottom-3 right-3 bg-zinc-100 opacity-0 group-hover:opacity-100 hover:bg-zinc-200">
          {isInCart ? (
            <div className="text-zinc-900" >
              <Icon name="shopping_cart" />
            </div>
          ) : (
            <div className="text-zinc-900">
              <Icon name="add_shopping_cart" fill={false} color="zinc-900" />
            </div>
          )}
        </div>

      </div>
      <div className="flex flex-col gap-2 p-2 text-zinc-100">
        <div className="text-base uppercase font-bold">{product.brand}</div>
        <h3 className="text-base font-normal line-clamp-2">{product.name}</h3>
        <div className="text-xl font-semibold">${product.price}</div>
      </div>
    </Link >
  );
};

export default ProductCard;