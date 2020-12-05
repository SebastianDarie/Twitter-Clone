import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  height: 53px;
  min-height: 30px;
  margin-bottom: 10px;
  width: 350px;
  z-index: 2;
`

export const RelativeDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  z-index: 4;
`

export const FormContainer = styled.div`
  border-style: solid;
  border-width: 0px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  min-height: 0px;
  min-width: 0px;
  position: relative;
  z-index: 0;
`

export const FormDiv = styled.div`
  background-color: rgb(235, 238, 240);
  border-color: rgba(0, 0, 0, 0);
  border-radius: 999px;
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: center;
`

export const ElementsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SearchIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`

export const SearchInputDiv = styled.div`
  display: flex;
  flex-grow: 1;
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 400;
  height: 40px;
`

export const SearchInput = styled.input.attrs({
  placeholder: 'Search Twitter',
})`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  border-width: 0px;
  color: inherit;
  font-size: inherit;
  outline-style: none;
  padding: 10px;
  resize: none;
  text-align: left;
  width: 100%;
`
