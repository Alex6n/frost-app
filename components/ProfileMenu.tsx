import { Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProfileMenu = ({ userMenu }: { userMenu: string[] }) => {
  const profile = true;
  return (
    <div className="mt-3">
      {profile ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:transparent outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 font-semibold">
            <DropdownMenuItem>{userMenu[0]}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{userMenu[1]}</DropdownMenuItem>
            <DropdownMenuItem>{userMenu[2]}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-rose-600">
              {userMenu[3]}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Loader2 className="text-zinc-500 animate-spin mt-3 mr-1 object-cover" />
      )}
    </div>
  );
};

export default ProfileMenu;
