import styled from '@emotion/styled';
import { observer } from "mobx-react";
import store from '../src/store';

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
    return (
        <Input
            type="text"
            value={store.filter}
            onChange={(evt) => store.setFilter(evt.target.value)}
        />
    )
}

export default observer(PokemonFilter);