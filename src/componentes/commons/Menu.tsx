import React, { FC } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { ILink } from '../../interfaces/ILinks'
import Cookies from "js-cookie";

interface Props {
    links: ILink[]
}

//Componentes parametrizado (RECIBE PARAMETROS)
export const Menu:FC<Props> = ({links}) => {

  return (
    <Navbar>
      <NavbarBrand>
        { /*<AcmeLogo />*/ }
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map ( (link) => ( //return
            <NavbarItem>
              <Link color="foreground" href={ link.href }>
                { link.name}
              </Link>
            </NavbarItem>
          ))
        }
    { ! Cookies.get('email')}
      ?     
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

