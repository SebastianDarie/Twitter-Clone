import styled from 'styled-components'

export const SideProfile = styled.div`
  margin-top: 70%;
  margin-bottom: 10px;
  cursor: pointer;
`

export const ProfileLogoContainer = styled.div`
  border-radius: 999px;
  height: 39px;
  width: 39px;
  overflow: hidden;
`

export const Image = styled.img`
  align-self: flex-end;
  height: 100%;
  width: 100%;
  z-index: -1;
`

export const InvisibleDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px inset;
  border-color: rgba(0, 0, 0, 0.4);
  border-radius: 999px;
  border-width: 1px;
`

export const ProfileHeaderContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  max-width: 100%;
`

export const ProfileHigh = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(15, 20, 25);
  max-width: 100%;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3125;
`

export const ProfileLow = styled.div`
  display: flex;
  flex-direction: row;
  color: rgb(91, 112, 131);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3125;
`

export const DotContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: flex-end;
`
