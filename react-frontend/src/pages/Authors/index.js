import React from 'react';
import { ReactComponent as SearchIcon } from './search-solid.svg';
import { ReactComponent as AuthorIcon } from './address-card-regular.svg';
import { ReactComponent as PlusIcon } from './plus-circle-solid.svg';
import { ReactComponent as UserEditIcon } from './user-edit-solid.svg';
import { ReactComponent as TrashIcon } from './trash-alt-solid.svg';
import '../scss/utilities/_variables.scss';
import '../scss/Author.scss';
import BtnGeneric from '../../components/BtnGeneric';
import TableCell from '../../components/TableCell/index';
import TableRow from '../../components/TableRow/index';
import TableBody from '../../components/TableBody/index';
import TableHead from '../../components/TableHead/index';
import Table from '../../components/Table/index';

const mockAuthors = [
  { name: 'Neville Longbottom', courses: 3, rating: 5 },
  { name: 'Severus Snape', courses: 9999, rating: 1.1 },
  { name: 'Filius Flitwick', courses: 75, rating: 1.7 },
  { name: 'Quirinus Quirrell', courses: 3, rating: 5 },
  {
    name: 'Albus Percival Wulfric Brian Dumbledore',
    courses: 9999,
    rating: 3.5
  },
  { name: 'Aurora Sinistra', courses: 75, rating: 1.7 },
  { name: 'Remus Lupin', courses: 3, rating: 5 },
  { name: 'Gilderoy Lockhart', courses: 2, rating: 4.8 }
];

const breakpointSm = 576;

export default () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [showSearchBar, setShowSearchBar] = React.useState(false);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (window.innerWidth < breakpointSm) setShowSearchBar(!showSearchBar);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      if (window.innerWidth < breakpointSm) setShowSearchBar(!showSearchBar);
      event.currentTarget.blur();
    }
  };

  React.useEffect(() => {
    const results = mockAuthors
      .filter(author =>
        author.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const authorNameA = a.name.toUpperCase();
        const authorNameB = b.name.toUpperCase();
        if (authorNameA < authorNameB) {
          return -1;
        }
        if (authorNameA > authorNameB) {
          return 1;
        }
        return 0;
      });

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className='container'>
      <BtnGeneric
        btnIcon={<PlusIcon />}
        btnText='Adauga autor'
        btnType='success add-btn'
      />
      <div className='table-container'>
        <div className='table-nav'>
          <AuthorIcon />
          <h3>Autori</h3>
          <div className='search-container'>
            <input
              className={showSearchBar ? 'show' : ''}
              type='text'
              name='search'
              value={searchTerm}
              placeholder='Caută dupa nume autor'
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <SearchIcon onClick={handleSearchClick} />
          </div>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component='th'>Nume Autor</TableCell>
              <TableCell component='th'>Cursuri</TableCell>
              <TableCell component='th'>Evaluare Cursuri</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResults.map((author, i) => (
              <TableRow key={`${i}-&{author.name}`}>
                <TableCell component='th' scope='row'>
                  {author.name}
                  <span className='edit'>
                    <UserEditIcon />
                  </span>
                  <span className='delete'>
                    <TrashIcon />
                  </span>
                </TableCell>
                <TableCell>{author.courses}</TableCell>
                <TableCell>{author.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
