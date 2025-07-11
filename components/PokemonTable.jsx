import PokemonRow from "./PokemonRow";
import { observer } from "mobx-react";
import store from '../src/store';

const PokemonTable = () => {
    return (
        <table width='100%'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {store.filteredPokemon
                    .slice(0, 20)
                    .map(p => (
                        <PokemonRow pokemon={p} key={p.id} onSelect={p => store.setSelectedPokemon(p)} />
                    ))}
            </tbody>
        </table>
    )
}

export default observer(PokemonTable);