import { useDispatch } from 'react-redux'
import { filterTweets } from '../../actions/searchActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
  ElementsContainer,
  FormContainer,
  FormDiv,
  RelativeDiv,
  SearchContainer,
  SearchIconDiv,
  SearchInput,
  SearchInputDiv,
} from './SearchBar'

const SearchBar = () => {
  const dispatch = useDispatch()

  return (
    <SearchContainer>
      <div style={{ width: '100%' }}>
        <RelativeDiv>
          <FormContainer>
            <form action='#'>
              <div>
                <FormDiv>
                  <ElementsContainer>
                    <SearchIconDiv>
                      <FontAwesomeIcon
                        icon={faSearch}
                        size='sm'
                        style={{
                          height: '1.25em',
                          minWidth: '30px',
                          maxWidth: '100%',
                          paddingLeft: '10px',
                        }}
                      />
                    </SearchIconDiv>
                    <SearchInputDiv>
                      <SearchInput
                        onChange={(e) => dispatch(filterTweets(e.target.value))}
                      />
                    </SearchInputDiv>
                  </ElementsContainer>
                </FormDiv>
              </div>
            </form>
          </FormContainer>
        </RelativeDiv>
      </div>
    </SearchContainer>
  )
}

export default SearchBar
