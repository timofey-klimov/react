import { FC, useRef } from 'react';
import styles from './SearchComponent.module.scss';
import {ReactComponent as IconSearch} from 'assets/icon-search.svg';
import { Button } from 'components/Button';

interface SearchComponentProps {
  hasError: boolean,
  onSubmit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement;
}

export const SearchComponent: FC<SearchComponentProps> = ({hasError, onSubmit}) =>  {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.username.value;
    console.log(text);
    if (text) {
      onSubmit(text);
      e.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.searchlabel}>
          <IconSearch/>
        </label>
        <input
          id='search'
          name='username'
          placeholder='Найти github по имени' 
          type='text' 
          className={styles.textField}
        />
        {hasError && 
          <div className={styles.error}>
            No result
          </div>
        }
        <Button children='Поиск'/>
      </div>
    </form>
  );
}