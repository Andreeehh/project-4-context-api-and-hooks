import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, dispatch] = useCounterContext();

  return (
    <div>
      <h1>OI</h1>
    </div>
  );
};
