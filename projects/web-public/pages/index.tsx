import { Text } from '@monorepo/design-system';
import { sum } from '@monorepo/utils/math/sum';

export default function HomeScreen() {
    return (
        <div>
            <Text tag="h1">Home do Projeto</Text>
            <Text tag="p">@monorepo/utils/math/sum: sum(2,2) = {sum(2,2)}</Text>
        </div>
    );
}
