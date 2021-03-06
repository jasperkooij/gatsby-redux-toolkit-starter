import styled from 'styled-components';
import tw from 'tailwind.macro';

export const MainNavWrapper = styled.div`
  ${tw`flex items-center sm:mr-auto ml-0 sm:ml-5 order-first sm:order-none`};
`;

export const Nav = styled.nav`
  ${tw`fixed sm:relative flex flex-col sm:flex-row w-full sm:w-auto left-0 top-0 h-screen sm:h-auto justify-center items-center bg-purple-600 `};
  ${({ open }) => !open && tw`hidden sm:flex`};
`;

export const NavItem = styled.span`
  ${tw`m-2`};

  a {
    ${tw`p-2 text-white hover:text-purple-100 text-base font-light`};
  }

  a.active {
    ${tw`p-2 text-purple-800 bg-yellow-300 rounded-sm`};
  }
`;

export const OpenNavButton = styled.button`
  ${tw`flex items-center justify-center sm:hidden w-8 p-2`};

  svg {
    ${tw`fill-current text-purple-200`};
  }

  &:hover svg {
    ${tw`fill-current text-purple-100`};
  }
`;

export const CloseNavButton = styled(OpenNavButton)`
  ${tw`absolute top-0 left-0 m-5`}
`;
