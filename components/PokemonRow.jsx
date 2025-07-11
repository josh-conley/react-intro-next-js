import Link from "next/link";
import { Button } from '@mui/material';
import PokemonType from '../src/PokemonType';

const PokemonRow = ({ pokemon, onSelect }) => (
    <tr>
        <td>
            <Link href={`/pokemon/${pokemon.id}`}>
                {pokemon.name.english}
            </Link>
        </td>
        <td>{pokemon.type.join(', ')}</td>
        <td>
            <Button variant="contained" color="primary" onClick={() => onSelect(pokemon)}>Stats</Button>
        </td>
    </tr>
);

PokemonRow.propTypes = {
    pokemon: PokemonType,
};

export default PokemonRow;