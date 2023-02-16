import styled from "@emotion/styled";
import { Common } from "./Common";
import addIcon from '../public/icon/add_icon.png';


export const AttatchPhotoList = styled.ul({
  display: 'flex',
  gap: '2.4rem',
  '& li': {
    backgroundColor: Common.colors.gray4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '.5rem',
    width: '7.8rem',
    height: '7.8rem',
    '::before': {
      content: "''",
      width: '1.4rem',
      height: '1.4rem',
      display: 'block',
      background: `url(${addIcon.src})`,
    }
  }
});