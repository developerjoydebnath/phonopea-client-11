import React, { useState } from 'react';
import useSearch from '../../../../hooks/useSearch';
import SearchResult from '../SearchResult/SearchResult';
import './SearchBar.css'

const SearchBar = () => {

    const [searchText, setSearchText] = useState(null);
    const { searchResult, error, loading } = useSearch(searchText);
    const [modalShow, setModalShow] = useState(false);


    const handleSearch = e => {
        const searchValue = e.target.parentElement.children[0].value.toLowerCase();
        setSearchText(searchValue);
        setModalShow(true);
    };



    return (
        <div className='text-center'>
            <div>
                <input type="text" className={error ? 'border border-danger outline ' : 'border-0 outline'} placeholder={error} name="search" id="" />
                <button className='search-btn' onClick={handleSearch}>Search</button>
            </div>

            <div>
                {
                    error ?
                        <>
                        
                        </>
                        :
                        <SearchResult
                            searchresult={searchResult}
                            show={modalShow}
                            searchText={searchText}
                            onHide={() => setModalShow(false)}
                        ></SearchResult>
                }
            </div>

        </div>
    );
};

export default SearchBar;