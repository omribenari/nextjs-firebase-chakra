import {
  Avatar,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';
import { useAuth } from '../firebase/auth';

const UserMenu: React.FC = () => {
  const auth = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton>
        <Avatar name={auth?.user?.name} src={auth?.user?.photoUrl} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={toggleColorMode}>
          <Icon name={colorMode === 'light' ? 'moon' : 'sun'} mr="12px" />
          <span>{colorMode === 'light' ? 'Dark mode' : 'Light mode'}</span>
        </MenuItem>
        <MenuDivider />
        {auth?.user ? (
          <MenuItem onClick={(e) => auth.signOut()}>
            <Icon name="arrow-back" mr="12px" />
            <span>Logout</span>
          </MenuItem>
        ) : (
          <MenuItem onClick={(e) => auth.signInWithGoogle()}>
            <Icon name="lock" mr="12px" />
            <span>Login</span>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
