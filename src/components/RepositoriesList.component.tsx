import { useState } from 'react';
import { useAction } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const RepositoriesList: React.FC = () => {
  const [ term, setTerm ] = useState('');
  const { searchRepositories } = useAction();
  const { data, error, loading } = useTypedSelector((state) => state.repositories)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              onChange={(e) => setTerm(e.target.value)}
              value={term}  />
            <button>Search</button>
          </form>
        </div>;
};

export default RepositoriesList;
