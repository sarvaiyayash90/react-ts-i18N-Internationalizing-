import * as React from 'react';
import './style.css';
import useName from './useName';
import { useTranslation } from 'react-i18next';

export default function App() {
  const [name, nameUpdate]: any = useName();
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = React.useState<any>();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  React.useEffect(() => {
    changeLanguage(selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <div>
        <h1>{t('title')}</h1>
        <div>{t('description.part1')}</div>
        <div>{t('description.part2')}</div>
      </div>
      <br />
      <label>Choose a language:</label>
      <select
        name="language"
        id="language"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="en">English</option>
        <option value="gu">Gujarati</option>
      </select>
      <p>Start editing to see some magic happen :)</p>
      <h1>{name}</h1>
      <button onClick={() => nameUpdate()}>Click Me..!!!</button>
    </div>
  );
}
