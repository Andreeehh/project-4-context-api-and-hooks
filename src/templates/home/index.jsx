import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  return (
    <div>
      <Heading />
      <div>
        {/* caso nao precise de parâmetros, pode passar o nome da função direta */}
        <Button onButtonClicked={actions.increase}>Increase</Button>
        <Button onButtonClicked={() => actions.decrease()}>Decrease</Button>
        <Button onButtonClicked={actions.reset}>Reset</Button>
        <Button onButtonClicked={() => actions.setCounter({ counter: 10 })}>Set Counter 10</Button>
        <Button onButtonClicked={() => actions.setCounter({ counter: 100 })}>Set Counter 100</Button>
        <Button disabled={state.loading} onButtonClicked={actions.asyncIncrease}>
          Async Increase
        </Button>
        <Button disabled={state.loading} onButtonClicked={handleError}>
          Async error
        </Button>
      </div>
    </div>
  );
};
