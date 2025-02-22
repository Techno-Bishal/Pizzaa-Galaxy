import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import { Phone, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="container py-5 mx-auto md:px-40 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg cursor-pointer font-bold">
            Pizza <span className="text-orange-600">Galaxy</span>
          </h1>
          <Select>
            <SelectTrigger className="w-[180px] focus:ring-0">
              <SelectValue placeholder="Select Restaurant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cheesy-delight">Cheesy Delight</SelectItem>
              <SelectItem value="pizza-hut">Pizza Hut</SelectItem>
              <SelectItem value="kids-corner">Kids Corner</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex items-center font-medium space-x-4">
            <li>
              <Link className="hover:text-primary duration-300" href={"/"}>
                Menu
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300" href={"/"}>
                Orders
              </Link>
            </li>
          </ul>
          <div className="relative">
            <Link href="/cart" className="hover:text-primary duration-300">
              <ShoppingBasket />
            </Link>
            <span
              className="absolute -top-4 -right-3 h-5 w-5 flex items-center justify-center
            rounded-full bg-primary text-center font-semibold text-sm text-white "
            >
              3
            </span>
          </div>
          <div className="flex items-center ">
            <Phone />
            <span>+977 9847363271</span>
          </div>
         <Button>Logout</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
