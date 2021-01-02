import { useDispatch } from 'react-redux'
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

const SearchBar = ({ page }) => {
  const dispatch = useDispatch()

  const searchHandler = async (e) => {
    const search = await import('../../actions/searchActions')
    if (page !== 'explore') {
      dispatch(search.filterTweets(e.target.value))
    } else {
      dispatch(search.searchUsers(e.target.value))
    }
  }

  return (
    <SearchContainer page={page}>
      <div style={{ width: '100%' }}>
        <RelativeDiv>
          <FormContainer>
            <form action='#'>
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
                    <SearchInput onChange={searchHandler} />
                  </SearchInputDiv>
                </ElementsContainer>
              </FormDiv>
            </form>
          </FormContainer>
        </RelativeDiv>
      </div>
    </SearchContainer>
  )
}

export default SearchBar
