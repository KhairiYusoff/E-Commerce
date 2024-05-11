import { Badge } from "@material-ui/core";
import {
  AccountCircle,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/apiCalls";
import { toast } from "react-toastify";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const UserIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: teal;
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    logoutUser(dispatch);
    toast.success("You have been logged out.", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push("/");
  };
  console.log("currentUser", currentUser);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>KhaiR.</Logo>
          </Link>
        </Center>
        <Right>
          {!currentUser && (
            <>
              <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
          {currentUser && (
            <>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </Link>
              <UserIcon
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <AccountCircle />
                {showDropdown && (
                  <DropdownMenu>
                    <DropdownItem>{currentUser.username}</DropdownItem>
                    <DropdownItem>{currentUser.email}</DropdownItem>
                    <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                  </DropdownMenu>
                )}
              </UserIcon>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
