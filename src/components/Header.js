import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownTrigger, Dropdown, Avatar} from "@nextui-org/react";
import { Link } from "react-router-dom";
// import {AcmeLogo} from "./AcmeLogo.jsx";

const Header = () => {
  return (
    <Navbar className="bg-gray-300">
      <NavbarBrand>
        <Link to='/'>
        <p className="font-bold text-inherit">BENX</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem className='hover:scale-105'>
          <Link color="foreground" href="#">
            Clips
          </Link>
        </NavbarItem>
        <NavbarItem isActive className='hover:scale-105'>
          <Link to='/merchandise' aria-current="page" color="secondary">
            Merchandise
          </Link>
        </NavbarItem>
        <NavbarItem className='hover:scale-105'>
          <Link color="foreground" href="#">
            About Me
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Link to='/'>

            <Avatar
              isBordered
              as="button"
              className="transition-transform hover:scale-110 hover:outline"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://media.licdn.com/dms/image/C5603AQGTTKGmmmAerA/profile-displayphoto-shrink_800_800/0/1661962912299?e=1698278400&v=beta&t=jxCTgSSk_wp099NbQpht2w_tSvbjqvvk4WlZISGbkIA"
            />
            </Link>
          </DropdownTrigger>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default Header