import React from 'react';

import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Container>

      <S.Header>
        <button>
          <S.BackIcon />
        </button>

        <S.ProfileInfo>
          <strong>Paulo Mello</strong>
          <span>675 Tweets</span>
        </S.ProfileInfo>
      </S.Header>

      {/* <ProfilePage /> */}

      {/* <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}

    </S.Container>
  );
}

export default Main;