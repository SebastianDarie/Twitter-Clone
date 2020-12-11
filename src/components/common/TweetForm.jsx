import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChartBar,
  faImage,
  faSmile,
} from '@fortawesome/free-solid-svg-icons'
import { ImageLink, ProfileImage, ProfileImageDiv } from './GlobalStyles'
import { ReactComponent as Gif } from '../../assets/img/gif.svg'
import {
  FirstSVG,
  TweetFormBottomContainer,
  TweetFormBottomContent,
  TweetFormContainer,
  TweetFormContent,
  TweetFormContentContainer,
  TweetFormIcon,
  TweetFormImageContainer,
  TweetFormInputBorder,
  TweetFormInputContainer,
  TweetFormInputFlex,
  TweetFormInputPadding,
  TweetFormInputText,
  TweetFormPadding,
  TweetFormRow,
  TweetFormSidePadding,
  TweetFormSVGContainer,
  TweetFormTextArea,
  TweetFormTopLine,
} from './TweetForm'

const TweetForm = ({ profile }) => {
  return (
    <TweetFormContainer>
      <TweetFormPadding>
        <TweetFormTopLine />
        <TweetFormContent>
          <div>
            <div>
              <TweetFormSidePadding>
                <TweetFormRow>
                  <TweetFormImageContainer>
                    <ProfileImageDiv>
                      <div>
                        <ImageLink>
                          <ProfileImage imageURL={profile.photoURL} />
                        </ImageLink>
                      </div>
                    </ProfileImageDiv>
                  </TweetFormImageContainer>
                  <TweetFormContentContainer>
                    <div style={{ width: '100%' }}>
                      <TweetFormInputContainer>
                        <div>
                          <TweetFormInputFlex>
                            <div style={{ width: '100%' }}>
                              <TweetFormInputBorder>
                                <div>
                                  <TweetFormInputText>
                                    <TweetFormInputPadding>
                                      <TweetFormTextArea />
                                    </TweetFormInputPadding>
                                  </TweetFormInputText>
                                  <div></div>
                                </div>
                              </TweetFormInputBorder>
                            </div>
                          </TweetFormInputFlex>
                        </div>
                      </TweetFormInputContainer>
                    </div>
                    <div>
                      <div>
                        <TweetFormBottomContainer>
                          <TweetFormBottomContent>
                            <FirstSVG>
                              <TweetFormIcon>
                                <FontAwesomeIcon icon={faImage} size='lg' />
                              </TweetFormIcon>
                            </FirstSVG>
                            <TweetFormSVGContainer>
                              <TweetFormIcon>
                                <Gif />
                              </TweetFormIcon>
                            </TweetFormSVGContainer>
                            <TweetFormSVGContainer>
                              <TweetFormIcon>
                                <FontAwesomeIcon icon={faChartBar} size='lg' />
                              </TweetFormIcon>
                            </TweetFormSVGContainer>
                            <TweetFormSVGContainer>
                              <TweetFormIcon>
                                <FontAwesomeIcon icon={faSmile} size='lg' />
                              </TweetFormIcon>
                            </TweetFormSVGContainer>
                            <TweetFormSVGContainer>
                              <TweetFormIcon>
                                <FontAwesomeIcon icon={faCalendar} size='lg' />
                              </TweetFormIcon>
                            </TweetFormSVGContainer>
                          </TweetFormBottomContent>

                          <TweetFormBottomContent></TweetFormBottomContent>
                        </TweetFormBottomContainer>
                      </div>
                    </div>
                  </TweetFormContentContainer>
                </TweetFormRow>
              </TweetFormSidePadding>
            </div>
          </div>
          <div></div>
        </TweetFormContent>
      </TweetFormPadding>
    </TweetFormContainer>
  )
}

export default TweetForm
