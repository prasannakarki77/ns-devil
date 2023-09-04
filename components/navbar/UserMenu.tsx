"use client";
import { LogOut, User2Icon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut } from "next-auth/react";
import { getInitials } from "@/lib/utils";
import { User } from "@prisma/client";
import Link from "next/link";
interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="relative">
          {currentUser?.image ? (
            <AvatarImage src={currentUser?.image} alt="@shadcn" />
          ) : (
            <AvatarFallback>
              {currentUser?.firstname && getInitials(currentUser?.firstname)}
            </AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/profile"}>
            <DropdownMenuItem>
              <User2Icon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            signOut({ callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })
          }
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
