import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";


export default function Home() {
  const favorites = ["1", "3"];
  const cart = ["1", "2"];

  const products = [
    {
      id: "1",
      brand: "Samsung",
      name: "Galaxy S24 Ultra Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Zoom Camera, Long Battery Life, S Pen, US Version, 2024, Titanium Gray",
      price: 1699.99,
      image: "/assets/images/product1.png",
    },
    {
      id: "2",
      brand: "Apple",
      name: "iPhone 14 Pro Max, 256GB, Unlocked, Graphite",
      price: 1399.99,
      image: "/assets/images/product2.png",
    },
    {
      id: "3",
      brand: "Google",
      name: "Pixel 7 Pro, 256GB, Unlocked, Stormy Black",
      price: 999.99,
      image: "/assets/images/product3.png",
    },
  ];


  return (
    <div className="flex flex-col mt-8 gap-8 container mx-auto ">
      <Banner />
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            isInCart={cart.includes(product.id)}
          />
        ))}
      </div>
    </div>

  );
}