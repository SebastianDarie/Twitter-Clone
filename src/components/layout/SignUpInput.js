import styled from 'styled-components'

export const ModalInputContainer = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
`

export const ModalLabel = styled.label`
  display: flex;
  flex-direction: row;
  background-color: rgb(247, 249, 250);
  border-color: rgb(91, 112, 131);
  color: rgb(91, 112, 131);
  border-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  font-weight: 400;
  line-height: 1.3125;
  height: 57px;
  width: 100%;

  &:focus-within {
    border-color: rgb(29, 161, 242);
    color: rgb(29, 161, 242);
  }

  div {
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;
  }
`

export const ModalInputPlaceholder = styled.div`
  align-self: flex-start;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 15px;
`

export const ModalInputDiv = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  color: rgb(15, 20, 25);
  font-size: 19px;
`

export const ModalInput = styled.input.attrs({
  name: 'name',
  type: 'text',
  placeholder: 'John Doe',
})`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  border-width: 0px;
  text-align: left;
  margin-left: 10px;
  padding-top: 2px;
  padding-bottom: 5px;
  font-family: inherit;
  font-size: inherit;
  appearance: none;
  resize: none;
  outline-style: none;
  width: 100%;
`

export const EmailInput = styled(ModalInput).attrs({
  name: 'email',
  type: 'email',
  placeholder: 'test@gmail.com',
})``

export const PasswordInput = styled(ModalInput).attrs({
  name: 'password',
  type: 'password',
  placeholder: '123456',
})``
